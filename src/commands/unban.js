const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply');
require('dotenv').config();

const config = {
    description: 'Unban\'s the mentioned member.',
    aliases: [],
    usage: '<member> [reason]',
    rolesRequired: ['E | Ban Permissions'],
    category: 'Moderation'
}

module.exports = {
	config,
	run: async (client, message, args) => {

    if (!args[0]) return message.lineReply('please enter a users id to unban!').then((m) => m.delete({ timeout: 5000 }));

		let member;

		try {
			member = await client.users.fetch(args[0]);
		} catch (e) {
			console.log(e);
			return message.lineReply('Not a valid user!').then((m) => m.delete({ timeout: 5000 }));
		}

		const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		return message.guild.fetchBans().then((bans) => {
			const user = bans.find((ban) => ban.user.id === member.id);

			if (user) {
				embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
					.setColor(client.config.colors.success)
					.addField('User ID', user.user.id, true)
					.addField('user Tag', user.user.tag, true)
					.addField('Banned Reason', user.reason != null ? user.reason : 'no reason')
					.addField('Unbanned Reason', reason);
				message.guild.members.unban(user.user.id, reason).then(() => message.lineReply(embed));
			} else {
				embed.setTitle(`User ${member.tag} isn't banned!`)
					.setColor(client.config.colors.error);
				message.lineReply(embed);
			}
		}).catch((e) => {
			console.log(e);
			message.lineReply('An error has occurred!');
		});
	},
};