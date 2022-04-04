const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');
module.exports = {
  name: "promote",
  description: "Promote staff members to SrMod!",
  execute(bot, message, args) {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't promote staff!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    message.channel.send(`${message.author} You have promoted ${dUser}.`)
    message.channel.send(`Roles updated for ${dUser} - Added SrMod/Admin..`)
    let role = message.guild.roles.cache.find(r => r.name === "SrMod");
    const approveEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been promoted to **SrMod or Admin** on ${message.guild.name}. `).setDescription(`Here's the note that was tagged to you: ${dMessage}`)
    dUser.send(approveEmbed)
    let member = message.mentions.members.first();
    member.roles.add(role)
    if (!role)
      message.channel.send('Role SrMod is not present, adding role Admin...')
      let role2 = message.guild.roles.cache.find(r => r.name === "Admin");
      member.roles.add(role2)
      
  }
}
