const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Binarys the specified user.',
    aliases: [],
    usage: '<member>',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const url = `https://no-api-key.com/api/v1/binary?text=${args.join('%20')}`;

		let response;

		try {
			const { data } = await axios.get(url);
			response = data;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Text to Binary')
			.setDescription(response.binary);

		return message.lineReply(embed);
	},
};
