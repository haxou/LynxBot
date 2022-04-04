const { DiscordEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
  name: "verify",
  description: "Verify yourself by pinging",
  execute: async(bot, message, args) => {
		await message.delete().catch(err => console.log(err));
    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`Welcome to ${message.guild.name}.`)
      .setDescription(`Please read over the rules to avoid punishment.`)
    message.member.send(muteEmbed)
    let member = message.mentions.members.first();
    let role = message.guild.roles.cache.find(r => r.name === "Verified");
    let role1 = message.guild.roles.cache.find(r => r.name === "Member")
		if(message.member.roles.cache.find(r => r.name === "Blinded")) {
			message.member.send(`You are blinded on ${message.guild.name}, therefore you cannot verify.`)
			return;
		}
		if(message.member.roles.cache.find(r => r.name === "Muted")) {
			message.member.send(`You are muted on ${message.guild.name}, therefore you cannot verify.`)
			return;
		}

    if(role) {
            try {
                await message.member.roles.add(role);
                console.log("Role added!");
            }
            catch(err) {
              message.channel.send(err);
            }
        }        
  }
}