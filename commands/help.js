const fs = require('fs')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(bot, message, args) {
    var commands = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			commands += `Name: ${command.name}\nDescription: ${command.description}\n \n`;
		}

		const helpEmbed = new MessageEmbed()
      .setTitle('CodexBot\'s Command List')
      .setDescription(commands)
      .setColor('RANDOM')
    message.author.send(helpEmbed)
    message.channel.send("I have DMed you a list of commands. If you haven't received them, please do $helpnodms")
	},
};