const Discord = require('discord.js');
var uuid = require('uuid');
const punID = uuid.v4();
module.exports = {
	name: 'ban',
	category: 'moderation',
	description: 'ban a members',
	 execute(bot, message, args, guild) {
		let banned =
			message.mentions.users.first() || bot.users.resolve(args[0]);
		let reason = args.slice(1).join(' ');

		// MESSAGES

		if (!banned) {
			let baninfoembed = new Discord.MessageEmbed()
				.setTitle('Command: ban')
				.setDescription(
					`**Description:** Ban a member, optional time limit. \n` +
						'**Sub Commands:**\n' +
						'$ban save | Ban a user and save their messages in chat. \n' +
						'**Usage:**\n' +
						'$ban [user] (limit) (reason) \n' +
						'$ban save [user] (limit) (reason) \n' +
						'**Examples:** \n' +
						'$ban <@597253939469221891> 48h spam \n' +
						'$ban save <@597253939469221891> 48h spam '
				)
				.setColor('#2C2F33');
			message.channel.send(baninfoembed);

			return;
		}

		if (message.author === banned) {
			let sanctionyourselfembed = new Discord.MessageEmbed()
				.setDescription(`You cannot sanction yourself`)
				.setColor('#2C2F33');
			message.channel.send(sanctionyourselfembed);

			return;
		}

		if (!reason) {
			let noreasonembed = new Discord.MessageEmbed()
				.setDescription(`Enter a reason`)
				.setColor('#2C2F33');
			message.channel.send(noreasonembed);

			return;
		}

		if (!message.member.permissions.has('BAN_MEMBERS')) {
			let nopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'You do not have permission `BAN MEMBERS` contact an administrator'
				)
				.setColor('#2C2F33');
			message.channel.send(nopermsembed);

			return;
		}

		if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
			let botnopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'I do not have `BAN MEMBERS` permission, please contact an administrator'
				)
				.setColor('#2C2F33');
			message.channel.send(botnopermsembed);

			return;
		}
  
    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been **BANNED** from ${message.guild.name}.`)
      .setDescription(`Reason: ${reason}`)
			.setFooter(`Punishment ID: ${punID}`);

    banned.send(banEmbed)


		message.guild.members.ban(banned, { reason: reason });

		let successfullyembed = new Discord.MessageEmbed()
			.setTitle(`Ban`)
      .setDescription(`Moderator: ${message.author}
      \nReason: ${reason}
      \nUser: ${banned}
			\nPunishment ID: ${punID}`)
			.setColor('#2C2F33');


		message.channel.send(successfullyembed);
	}
};
