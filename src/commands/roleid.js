const { MessageEmbed, Permissions } = require('discord.js');
const Discord = require('discord.js')
const path = require('path')
const discord = require('discord.js')
const axios = require('axios');
require('discord-reply');
require('dotenv').config();

const config = {
    description: 'Sends the role id from the rolename.',
    aliases: [],
    usage: '',
    rolesRequired: ['🛡️ Moderation Team'],
    category: 'Moderation'
}



module.exports = {
	config,
	run: async (client, message, args) => {
		// code starts here
		try {
			const roleId = message.guild.roles.cache
				.find((r) => (r.name === args.toString()) || (r.id === args.toString()));

			const perms = new Permissions(roleId.permissions.bitfield).toArray();

			const embed = new MessageEmbed()
				.setColor(client.config.colors.success)
				.setTitle(roleId.name)
				.addFields(
					{
						name: 'Role ID: ',
						value: roleId.id,
						inline: true,
					},
					{
						name: 'Role Name: ',
						value: roleId.name,
						inline: true,
					},
				);

			return message.lineReply(embed);
		} catch (e) {
			return message.lineReply('Role Doesn\'t Exist').then(() => console.log(e));
		}
	},
};