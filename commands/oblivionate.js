const Discord = require('discord.js');
const globalFunctions = require("../globalFunctions");

var uuid = require('uuid');
const punID = uuid.v4();
module.exports = {
	name: 'doom',
	category: 'moderation',
	description: 'oblivion',
	 execute(bot, message, args, guild) {
		let banned =
			message.mentions.users.first() || bot.users.resolve(args[0]);
		let reason = args.slice(1).join(' ');

		// MESSAGES

		if (!banned) {
			let baninfoembed = new Discord.MessageEmbed()
				.setTitle('Command: doom')
				.setDescription(
					`**Description:** Hilariously ban a member, optional time limit \n` +
						'**Sub Commands:**\n' +
						'$doom save | Ban a user and save their messages in chat. \n' +
						'**Usage:**\n' +
						'$doom [user] (limit) (reason) \n' +
						'$doom save [user] (limit) (reason) \n' +
						'**Examples:** \n' +
						'$doom <@597253939469221891> 48h spam \n' +
						'$doom save <@597253939469221891> 48h spam '
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
		message.channel.send(`Oh shit, what's that?`)
		message.channel.send(`We can't hold him off Sarge!`)
		message.channel.send(`**THERE IS NO ESCAPE!!**`)
		message.channel.send(`No no plea-`)
		globalFunctions.data.getImage(message, "animekillgif", true)

		let successfullyembed = new Discord.MessageEmbed()
			.setTitle(`Oblivion castings..`)
      .setDescription(`Moderator: ${message.author}
      \nReason: ${reason}
      \nUser: ${banned}
			\nPunishment ID: ${punID}`)
			.setColor('#2C2F33');


		message.channel.send(successfullyembed);
	}
};
