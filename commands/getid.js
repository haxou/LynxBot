const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
  name: "getid",
  description: "Get the ID of someone.",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")

    const confirmEmbed = new Discord.MessageEmbed()
      .setTitle(`${dUser}`)
      .setDescription(`The ID of ${dUser} is in the title of this embed.`)
			.setColor('#2C2F33');
    message.channel.send(confirmEmbed)

    let member = message.mentions.members.first();
  }
}
