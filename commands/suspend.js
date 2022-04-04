const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');
const uuid = require('uuid')

module.exports = {
  name: "suspend",
  description: "Suspend staff members",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You can't suspend staff members!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    const suspendEmbed = new Discord.MessageEmbed()
      .setTitle(`Your staff rank has been **SUSPENDED** on ${message.guild.name}.`)
      .setDescription(`Reason: ${dMessage}`)
			.setFooter(`${uuid.v4()}`)
    dUser.send(suspendEmbed)
    message.channel.send(`${message.author} You have suspended ${dUser}. `)
    let role = message.guild.roles.cache.find(r => r.name === "admin/mod");

    let member = message.mentions.members.first();
    member.roles.remove(role)
  }
}
