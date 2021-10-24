const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
require('discord-reply');
require('dotenv').config();

const config = {
  description: 'Winks the specified user.',
  aliases: [],
  usage: '<member>',
  rolesRequired: ['Verified'],
  category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const url = 'https://some-random-api.ml/animu/wink';

		let response; let
			data;
		try {
			response = await axios.get(url);
			data = response.data;
		} catch (e) {
			return message.lineReply('An error occured!');
		}

		const embed = new MessageEmbed()
			.setTitle(`@${message.author.username} winks at @${message.mentions.users.first().username || message.mentions.members.first()}`)
			.setImage(data.link);

		return message.channel.send(embed);
	},
};
