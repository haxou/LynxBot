const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');
module.exports = {
  name: "staffadd",
  description: "Add staff members.",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You can't add moderators!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    message.channel.send(`${message.author} You have added ${dUser} to moderator.`)
    message.channel.send(`Roles updated for ${dUser} - Added Moderator.`)
    let role = message.guild.roles.cache.find(r => r.name === "Moderator");
    const approveEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been added to moderator on ${message.guild.name}. `).setDescription(`Here's the note that was tagged to you: ${dMessage}`)
    dUser.send(approveEmbed)
    let member = message.mentions.members.first();
    member.roles.add(role)
    if (!role)
      message.channel.send('Role Moderator is not present, adding role Mod...')
      let role2 = message.guild.roles.cache.find(r => r.name === "admin/mod");
      member.roles.add(role2)
    if(!role2)
      return message.channel.send('Role Mod is not present. Please add either role Moderator or Mod and give it the respective perms.')
  }
}
