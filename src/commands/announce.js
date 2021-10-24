const Discord = require("discord.js");
const path = require('path')
const discord = require('discord.js')
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
    description: 'Announces your message to a other channel..',
    aliases: [],
    usage: '<#channel> [message]',
    rolesRequired: ['🛡️ Moderation Team'],
    category: 'Moderation'
}


module.exports = {
  config,
  run: async (client, message, args) => {

    let inline = true;
    let sayChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!sayChannel)
      return message.lineReply(
        `❌ ${message.author} mention a channel First`
      );
    let sayMsg = args
      .slice(1)
      .join(" ")
      .split(" | ");

    if (!sayMsg[1]) sayMsg[1] == "#43d177";
    if (!sayMsg)
      return message.lineReply(
        `❌ Say Some Message To Announce`
      );
    let role = message.member.highestRole;
    let embed = new Discord.MessageEmbed()
      .setColor(client.config.colors.success)
      .setDescription(sayMsg[0]);

    message.delete();
    message.lineReply(
        `Successfully Announced Your Message To ${sayChannel}`
      )
      .then(m => m.delete({ timeout: 2000 }));

    sayChannel.send({ embed }).catch(console.error);
  }
};