const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
  description: 'Shows the total bans.',
  aliases: [],
  usage: '',
  rolesRequired: ['🛡️ Moderation Team'],
  category: 'Moderation'
}
        
        
        
        
  module.exports = {
  config,
  run: async (client, message, args) => {

    message.guild.fetchBans().then((bans) =>{
    const bansEmbed = new Discord.MessageEmbed() 
      .setTitle('Total Bans:')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setThumbnail('https://cdn.discordapp.com/app-icons/880517850291388427/6730aad569eaaa559d79d744424311d6.png?size=2048')
      .setColor(client.config.colors.success)
      .setDescription(bans.size)
      .setFooter('')
      .setTimestamp();
    message.lineReply(bansEmbed)
    });
  },
};