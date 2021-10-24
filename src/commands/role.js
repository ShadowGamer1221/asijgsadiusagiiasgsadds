const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Gives a specified role to the mentioned member.',
    aliases: [],
    usage: '<member [role]>',
    rolesRequired: ['🛡️ Moderation Team'],
    category: 'Moderation'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		message.delete();


		if (!args[0] || !args[1]) return message.lineReply('Incorrect usage, It\'s `<username || user id> <role name || id>').then((m) => m.delete({ timeout: 5000 }));

		try {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);

			if (alreadyHasRole) return message.lineReply('User already has that role').then((m) => m.delete({ timeout: 5000 }));

			const embed = new MessageEmbed()
				.setTitle(`Role Name: ${roleName.name}`)
				.setDescription(`${message.author} has successfully given the role ${roleName} to ${member.user}`)
				.setColor(client.config.colors.success)
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setFooter(new Date().toLocaleString());

			return member.roles.add(roleName).then(() => message.channel.send(embed));
		} catch (e) {
			return message.lineReply('Try to give a role that exists next time...').then((m) => m.delete({ timeout: 5000 }));
		}
	},
};