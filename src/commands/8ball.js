const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const ms = require('ms');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Sends an magic 8 Ball.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
    
   if (!args[0]) {
      let errorembed = new MessageEmbed() 
      .setTitle('No Question')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor(client.config.colors.error)
      .setDescription('Please ask a question!')
      .setFooter('')
      .setTimestamp();
   return message.lineReply(errorembed);
   }

		const facts = 'https://no-api-key.com/api/v2/magic8ball';

		let fact; let
			responses;
		try {

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('')
			.setColor(client.config.colors.success)
			.setDescription(fact.response)

		return message.channel.send(embed);
	},
};
