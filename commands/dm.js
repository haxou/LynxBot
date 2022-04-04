const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
  name: "dm",
  description: "DM users a message.",
  execute(bot, message, args) {    
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')
    const dmEmbed = new Discord.MessageEmbed()
      .setTitle(`A moderator from ${message.guild.name} sent you a message!`)
      .setDescription(`Message: ${dMessage}`)
    dUser.send(dmEmbed)

    message.channel.send(`${message.author} You have sent your message to ${dUser}`)
  }
}