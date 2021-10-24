const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Sends the invite link for the Human Resources Team.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Info'
}

        module.exports = {
  config,
  run: async (client, message, args) => {

    const hrdEmbed = new Discord.MessageEmbed() 
      .setTitle('Human Resources Department:')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setThumbnail('https://cdn.discordapp.com/app-icons/880517850291388427/6730aad569eaaa559d79d744424311d6.png?size=2048')
      .setColor(client.config.colors.success)
      .setDescription('Deals with staffing, in-game appeals, sessions, internships, and much more.\n\nhttps://discord.gg/F5cWRH38fa')
      .setFooter('')
      .setTimestamp();
    message.lineReply(hrdEmbed)
  }
}