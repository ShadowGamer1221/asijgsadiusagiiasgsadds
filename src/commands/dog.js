const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Sends a random dog pic with a fact.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Animals'
}

module.exports = {
	config,
	run: async (client, message, args) => {
		const url = 'https://no-api-key.com/api/v2/animals/dog';

		let image;
		let fact;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.image;
			fact = data.fact;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Random Dog Image and Fact')
			.setColor(client.config.colors.success)
			.setDescription(fact)
			.setImage(image);

		return message.channel.send(embed);
	},
};

