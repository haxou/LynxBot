const Discord = require("discord.js");
const uuid = require('uuid');

module.exports= {
  name: 'kick',
  category: 'moderation',
  description: 'kick members',
  execute(bot,message,args,guild) {

    let kicked = message.mentions.users.first() || bot.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setTitle("Command: kick")
        .setDescription(
          `**Description:** Kick a member. \n` +
            "**Sub Commands:**\n" +
            "\n" +
            "**Usage:**\n" +
            "$kick [user] (reason) \n" +
            "**Examples:** \n" +
            "$kick <@597253939469221891> spam"
        )
        .setColor("#2C2F33");
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot sanction yourself`)
        .setColor("#2C2F33");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason`)
        .setColor("#2C2F33");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `KICK MEMBERS` contact an administrator"
        )
        .setColor("#2C2F33");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `KICK MEMBERS` permission, please contact an administrator"
        )
        .setColor("#2C2F33");
      message.channel.send(botnopermsembed);
  
      return;
    }

    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been **KICKED** from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
			.setFooter(`Punishment ID: ${uuid.v4()}`)
    kicked.send(kickEmbed)
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`Kick`)
      .setDescription(`Moderator: ${message.author}
      \nReason: ${reason}
      \nUser: ${kicked}
			\nPunishment ID: ${uuid.v4()}`)
			.setColor('#2C2F33');
  
    message.channel.send(successfullyembed);

  }
}