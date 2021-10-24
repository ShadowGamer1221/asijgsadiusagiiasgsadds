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
  description: 'Sets the suggestion channel for the suggestions.',
  aliases: [],
  usage: '<#channel>',
  rolesRequired: ['🛡️ Moderation Team'],
  category: 'Moderation'
}

module.exports = {
    config,
    run: async (client, message, args) => {

        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.lineReply(`Please Mention A Channel!`);

        if (Channel.type === "voice") return message.lineReply(`Please Mention A Text Channel!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor(client.config.colors.success)
        .setDescription(`Suggestion Channel is setted as <#${Channel.id}>`)

        return message.lineReply(Embed);

    }
};