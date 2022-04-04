const fs = require('fs')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'helpnodms',
	description: 'List all available commands if you have your DMs locked.',
	execute(bot, message, args) {
		let commands = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			commands += `Name: ${command.name}\nDescription: ${command.description}\n \n`;
		}

		const helpEmbed = new MessageEmbed()
      .setTitle('CodexBot\'s Command List')
      .setDescription(commands)
      .setColor('RANDOM')
    message.channel.send(helpEmbed)
	},
};