const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');
const uuid = require('uuid')

module.exports = {
  name: "warn",
  description: "Warn people",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    const noPermsEmbed = new Discord.MessageEmbed()
      .setTitle('No permission!')
      .setDescription('You do not have the permission MANAGE_MESSAGES.')
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noPermsEmbed)
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a reason.')

    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been **WARNED** on ${message.guild.name}.`)
      .setDescription(`Reason: ${dMessage}`)
			.setFooter(`${uuid.v4()}`)
    dUser.send(muteEmbed)
    const confirmEmbed = new Discord.MessageEmbed()
			.setTitle(`Warn`)
      .setDescription(`Moderator: ${message.author}
      \nReason: ${dMessage}
      \nUser: ${dUser}
			\nPunishment ID: ${uuid.v4()}`)
			.setColor('#2C2F33');
    message.channel.send(confirmEmbed)

    let member = message.mentions.members.first();
    let role2 = message.guild.roles.cache.find(r => r.name === "Warned");
    let role = message.guild.roles.cache.find(r => r.name === "StrictWatch")
    member.roles.add(role)
    if(!role)
      message.channel.send('Would you like to give the warned users a role? If no, ignore this message. If yes, create a role called "warned" or "StrictWatch". Currently trying role StrictWatch, I will let you know if it fails.')
      member.roles.add(role2)
    if(!role2)
      message.channel.send('Would you like to give the warned users a role? If no, ignore this message. If yes, create a role called "warned" or "StrictWatch". Currently trying role Warned, I will let you know if it fails.')
  }
}
