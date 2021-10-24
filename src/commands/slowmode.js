const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
  description: 'Enables the ammount of seconds to slowdown the channel.',
  aliases: [],
  usage: '<time> [reason]',
  rolesRequired: ['🛡️ Moderation Team'],
  category: 'Moderation'
}

module.exports = {
	config,
	run: async (client, message, args) => {

		if (!args[0]) {
			return message.channel.send('You did not specify a time!').then((m) => m.delete({ timeout: 5000 }));
		}

		const currentCooldown = message.channel.rateLimitPerUser;

		const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		if (args[0] === 'off') {
			if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then((m) => m.delete({ timeout: 5000 }));

			embed.setTitle('Slowmode Disabled')
				.setColor(client.config.colors.success);
			return message.channel.setRateLimitPerUser(0, reason);
		}

		const time = ms(args[0]) / 1000;

		if (Number.isNaN(time)) {
			return message.channel.send(`not a valid time, please try again! EX: ***${client.prefix}slowmode 5s***`).then((m) => m.delete({ timeout: 5000 }));
		}

		if (time >= 21600) {
			return message.channel.send('That slowmode limit is too high, please enter anything lower than 6 hours.').then((m) => m.delete({ timeout: 5000 }));
		}

		if (currentCooldown === time) {
			return message.channel.send(`Slowmode is already set to ${args[0]}`);
		}

		embed.setTitle('Slowmode Enabled')
			.addField('Slowmode: ', args[0])
			.addField('Reason: ', reason)
			.setColor(client.config.colors.success);

		const msg = await message.channel.setRateLimitPerUser(time, reason);
		return msg.send(embed);
	},
};
