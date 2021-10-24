const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Deletes the ammount of messages.',
    aliases: [],
    usage: '<ammount>',
    rolesRequired: ['🛡️ Moderation Team'],
    category: 'Moderation'
}

module.exports = {
	config,
	run: async (client, message, args) => {
	
		if (!args[0]) {
			return message.lineReply('Please enter a amount 1 to 100');
		}

		let deleteAmount = parseInt(args[0], 10);

		if (Number.isNaN(deleteAmount)) {
			return message.lineReply('Please enter a amount 1 to 100');
		}

		// could use ternary
		if (deleteAmount > 100) {
			deleteAmount = 100;
		} else {
			deleteAmount = parseInt(args[0], 10);
		}

		await message.channel.bulkDelete(deleteAmount, true);

		const embed = new MessageEmbed()
			.setTitle(`${message.author.username}`)
			.setThumbnail(message.author.displayAvatarURL())
			.setDescription(`Successfully deleted ${deleteAmount}`)
			.setFooter(message.author.username, message.author.displayAvatarURL())
			.setColor(client.config.colors.success);
		return message.lineReply(embed);
	},
};