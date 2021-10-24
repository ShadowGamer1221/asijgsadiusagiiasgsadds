const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');
const ms = require('ms');
const path = require('path')
const discord = require('discord.js')
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
  description: 'Shows the weather information.',
  aliases: [],
  usage: '<city name>',
  rolesRequired: ['Verified'],
  category: 'Miscellaneous'
}

module.exports = {
        config,
    run: async (bot, message, args) => {
    
        if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error:")
            .setDescription("❌ Please enter a location!")
            .setColor('#de554e')
            .setTimestamp();
                return message.lineReply(errorembed);
        }
        
        weather.find({ search: args.join(" "), degreeType: 'C'}, function(err, result) {
          
        if(result.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error:")
            .setDescription("❌ Please enter a vaild location!")
            .setColor('#de554e')
            .setTimestamp();
                return message.lineReply(errorembed);
        }
        
          var current = result[0].current;
          var location = result[0].location;
            if (err) {
            let errorembed = new MessageEmbed()
            .setTitle("Error:")
            .setDescription("❌ Please enter a vaild location!")
            .setColor('#de554e')
            .setTimestamp();
                return message.lineReply(errorembed);
            }
        
            
            let embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('#43d177')
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setTimestamp();
                message.lineReply(embed);
        });
    }
};
