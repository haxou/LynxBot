const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
  name: "unmute",
  description: "unmute people",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't unmute people!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a reason.')

    const unmuteEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been **UNMUTED** on ${message.guild.name}.`)
      .setDescription(`Reason: ${dMessage}`)
    dUser.send(unmuteEmbed)    


    const confirmEmbed = new Discord.MessageEmbed()
      .setTitle(`Unmute`)
      .setDescription(`Moderator: ${message.author}
      \nReason: ${dMessage}
      \nUser: ${dUser}`)
			.setColor('#2C2F33');
    message.channel.send(confirmEmbed)
    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    let role2 = message.guild.roles.cache.find(r => r.name === "Verified");

    let member = message.mentions.members.first();
    member.roles.remove(role)
    member.roles.add(role2)
  }
}
