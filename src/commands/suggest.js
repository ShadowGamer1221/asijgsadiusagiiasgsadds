const { MessageEmbed } = require("discord.js")
const ms = require('ms');
const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
const axios = require('axios');
const db = require("quick.db");
require('discord-reply');
require('dotenv').config();

const config = {
  description: 'Sends your suggestion into the suggestion channel.',
  aliases: [],
  usage: '<message>',
  rolesRequired: ['Verified'],
  category: 'Bot'
}
 
module.exports = {
  config,
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("Please Suggest Something.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setColor("00FFFF")
       .setFooter("Status: Pending")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`✅ | Your suggestion is Submitted here, <#${channel}>\n\nNote: You agreed to get a DM on a reply over your Suggestion!`)
       .setColor("00FFFF")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('✅')
    await msgEmbed.react('❌')
  }
}