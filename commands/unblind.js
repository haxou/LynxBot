 const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');
var uuid = require('uuid');


module.exports = {
  name: "unblind",
  description: "Reversalof blind",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't blind people!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a reason.')

    const unmuteEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been **UNBLINDED** on ${message.guild.name}.`)
      .setDescription(`Reason: ${dMessage}`)
    dUser.send(unmuteEmbed)    


    const confirmEmbed = new Discord.MessageEmbed()
      .setTitle(`Unblind`)
      .setDescription(`Moderator: ${message.author}
      \nReason: ${dMessage}
      \nUser: ${dUser}`)
			.setColor('#2C2F33');
    message.channel.send(confirmEmbed)
    let role = message.guild.roles.cache.find(r => r.name === "Blinded");
    let role2 = message.guild.roles.cache.find(r => r.name === "Verified");

    let member = message.mentions.members.first();
    member.roles.remove(role)
    member.roles.add(role2)
  }
}
