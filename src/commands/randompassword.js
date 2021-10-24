const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Sends a random password.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const facts = 'https://no-api-key.com/api/v2/password?length=16';

		let fact; let
			responses;
		try {

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Random Password')
			.setColor(client.config.colors.success)
			.setDescription(fact.password)

		return message.channel.send(embed);
	},
};
