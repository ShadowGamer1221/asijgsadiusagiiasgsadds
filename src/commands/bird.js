const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Sends a random bird pic with a fact.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Animals'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const url = 'https://some-random-api.ml/img/birb';
		const facts = 'https://some-random-api.ml/facts/birb';

		let image; let
			response;
		let fact; let
			responses;
		try {
			response = await axios.get(url);
			image = response.data;

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Random Bird Image and Fact')
			.setColor(client.config.colors.success)
			.setDescription(fact.fact)
			.setImage(image.link);

		return message.channel.send(embed);
	},
};
