const { MessageEmbed } = require('discord.js');
const os = require('os');
const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
    description: 'Sends the role id from the rolename.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Bot'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setThumbnail('https://cdn.discordapp.com/app-icons/880517850291388427/6730aad569eaaa559d79d744424311d6.png?size=2048')
			.setTitle('Bot Stats')
			.setColor(client.config.colors.success)
			.addFields(
				{
					name: '🌐 Servers',
					value: `Serving ${client.guilds.cache.size} servers.`,
					inline: true,
				},
				{
					name: '📺 Channels',
					value: `Serving ${client.channels.cache.size} channels.`,
					inline: true,
				},
				{
					name: '👥 Server Users',
					value: `Serving ${client.users.cache.size}`,
					inline: true,
				},
				{
					name: '⏳ Ping',
					value: `${Math.round(client.ws.ping)}ms`,
					inline: true,
				},
				{
					name: 'Join Date',
					value: client.user.createdAt,
					inline: true,
				},
				{
					name: 'Server Info',
					value: `Cores: ${os.cpus().length}`,
					inline: true,
				},
			)
			.setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL());

		return message.lineReply(embed);
	},
};
