const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "unban",
  description: "unban",
  execute: async(bot, message, args) => {


    let unbanned = message.mentions.users.first() || bot.users.resolve(args[0]);
    let reason = args.slice(1).join(" ")

    let member = await bot.users.fetch(unbanned);
    let ban = await message.guild.fetchBans();

    // Frontend Shit

    if(!unbanned) {
      let unbaninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: unban")
        .setDescription(
          `**Description:** Unban a member. \n` +
            "**Sub Commands:**\n" +
            "" +
            "**Usage:**\n" +
            "$unban [user] (limit) (reason) \n" +
            "**Examples:** \n" +
            "$unban <@597253939469221891> innocent \n" +
            "$unban 597253939469221891 innocent "
        )
        .setColor("#2C2F33")
      message.channel.send(unbaninfoembed)

      return;
    }

    if(!ban.get(member.id)) {
      let notbannedembed = new Discord.MessageEmbed()
        .setDescription("This user is not banned!")
        .setColor("#2C2F33");
    message.channel.send(notbannedembed)

    return;
    }

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnoperms = new Discord.MessageEmbed()
        .setDescription(
          "I do not have permissions, please contact an administrator."
        )
      message.channel.send(botnoperms)


      return;
    }

    if(!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `BAN MEMBERS` contact an administrator."
        )
        .setColor("#2C2F33");
    message.channel.send(nopermsembed)

      return;
    }

    var user = ban.get(member.id);
    message.guild.members.cache.unban(member)
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${member.tag} has been succesfully unbanned.`)
      .setColor("#2C2F33")

    message.channel.send(succesfullyembed);
  }
}