const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply');
require('dotenv').config();

const config = {
    description: 'Gives the specified user a kiss 💋.',
    aliases: [],
    usage: '<member>',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const url = 'https://no-api-key.com/api/v2/kiss';

		let response;
		try {
			const { data } = await axios.get(url);
			response = data;
		} catch (e) {
			return message.lineReply('An error has occured, try again!');
		}

		const embed = new MessageEmbed()
			.setTitle(`@${message.author.username} gave @${message.mentions.users.first().username ||
      message.mentions.members.first()} a kiss`)
			.setColor(client.config.colors.success)
			.setImage(response.image);

		return message.channel.send(embed);
	},
};
