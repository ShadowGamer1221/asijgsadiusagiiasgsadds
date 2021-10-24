const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const discord = require('discord.js');
const ytsr = require('ytsr');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
require('dotenv').config();

const config = {
    description: 'Play a song in the vc.',
    aliases: [],
    usage: '<song>',
    rolesRequired: ['Verified'],
    category: 'Music'
}

module.exports = {
    config, 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor(client.config.colors.error)
            .setDescription(`You need to be in a vc to execute this command!`)
        if (!voice_channel) return message.channel.send(embed);

        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor(client.config.colors.success)
            .setDescription(`Added **${song.name}** to the queue`)


            // If there were no errors the Player#songAdd event will fire and the song will not be null.
            if(song)
                message.channel.send(added);
            return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Started playing **${song.name}**`)

            // If there were no errors the Player#songAdd event will fire and the song will not be null.
            if(song)
                message.channel.send(started);
            return;
        }
    }
}