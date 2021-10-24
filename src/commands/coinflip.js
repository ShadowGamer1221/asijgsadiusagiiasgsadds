const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Flips a coin.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
	config,
	run: async (client, message, args) => {
    const facts = 'https://no-api-key.com/api/v2/coin-flip';

		let fact; let
			responses;
		try {

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.lineReply('An error occured, please try again!');
		}

    const embed = new MessageEmbed()
			.setTitle('Flipped Coin')
			.setColor(client.config.colors.success)
			.setImage(fact.gif)
      .setFooter(fact.coin)
  
  const embed1 = message.channel
    .send({
      embed: {
        color: client.config.colors.success,
        description: `**Flipping Coin... <a:coinflip:891730655476604968>**`
      }
    })
    .then(embed1 => {
      setTimeout(function() {
        embed1.edit(embed)
      }, 2000);
    });
  }
}
