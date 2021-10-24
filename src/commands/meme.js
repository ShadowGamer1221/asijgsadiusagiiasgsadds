const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply');
require('dotenv').config();

const config = {
    description: 'Sends a random meme 🤣.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const url = 'https://no-api-key.com/api/v2/memes';

		let response;
		try {
			const { data } = await axios.get(url);
			response = data;
		} catch (e) {
			return message.lineReply('An error has occured, try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Random Meme: ')
			.setColor(client.config.colors.success)
			.setImage(response.image);

		return message.lineReply(embed);
	},
};