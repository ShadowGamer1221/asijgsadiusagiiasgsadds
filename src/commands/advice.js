const api = require("srod-v2");
const Discord = require("discord.js");
const axios = require('axios');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Returns a random Advice.',
    aliases: [],
    usage: '',
    rolesRequired: ['Verified'],
    category: 'Fun'
}

module.exports = {
  config,
  run: async (client, message, args) => {
    
    const Data = await api.GetAdvice({ Color: "#43d177" });
    return message.channel.send(Data);
  }
};