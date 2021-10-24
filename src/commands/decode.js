const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
  description: 'makes your discord name into a decode.',
  aliases: [],
  usage: '<member>',
  rolesRequired: ['Verified'],
  category: 'Miscellaneous'
}


module.exports = {
  config,
	run: async (client, message, args) => {
		const url = `https://no-api-key.com/api/v1/binary-text?binary=${args.join('%20')}`;

		let response;
		try {
			const { data } = await axios.get(url);
			response = data;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Decode Binary')
			.setDescription(response.text);

		return message.lineReply(embed);
	},
};