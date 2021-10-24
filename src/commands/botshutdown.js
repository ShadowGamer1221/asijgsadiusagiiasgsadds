const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Shuts down the bot. Abusing this will result in a ban.',
    aliases: [],
    usage: '',
    rolesRequired: ['🛡️ Administrator'],
    category: 'Bot'
}


module.exports = {
config,
	run: async (client, message, args) => {

    const botshutEmbed = new Discord.MessageEmbed() 
      .setTitle('Shuting down bot:')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setThumbnail('https://cdn.discordapp.com/app-icons/880517850291388427/6730aad569eaaa559d79d744424311d6.png?size=2048')
      .setColor(client.config.colors.success)
      .setDescription('Contact <@832932513936441375> to start the bot again.\n\nShuting down bot...')
      .setFooter('Shuting down. Contact Shadow to start the bot again.')
      .setTimestamp();
   await message.lineReply(botshutEmbed)
		process.exit();
	},
};