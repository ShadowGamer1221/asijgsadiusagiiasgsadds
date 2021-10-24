const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Sends the roles that you have.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Info'
}

        module.exports = {
  config,
  run: async (client, message, args) => {
    const user =			message.mentions.members.first()
			|| message.guild.members.cache.get(args[0])
			|| message.member;

    const whoisEmbed = new Discord.MessageEmbed() 
      .setTitle('Your Roles:')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setThumbnail('https://cdn.discordapp.com/app-icons/880517850291388427/6730aad569eaaa559d79d744424311d6.png?size=2048')
      .setColor(client.config.colors.success)
      .setDescription(user.roles.cache.map((role) => role.toString()).join(' ,'))
      .setFooter('')
      .setTimestamp();
    message.lineReply(whoisEmbed)
  }
}