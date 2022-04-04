const { MessageEmbed } = require("discord.js");
const globalFunctions = require("../globalFunctions");

module.exports = {
  name: "shoot",
  description: "shoot the requested user.",
  usage: "[user]",
  args: true,
  execute(bot, message, args) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user.");
    

    async function AsyncFunc(message) {
      if (message.mentions.users.first() == message.author) {
        message.reply("You shot yourself. Please seek help.");
      } else {
        const Embed = new MessageEmbed()
          .setTitle(`${message.author.tag} shot ${
              message.mentions.users.first().tag
            }. Pew pew!`)
                        .setColor(9384170)
          

        message.channel.send(Embed);
				message.channel.send(globalFunctions.data.getImage(message, "animeshootgif", true))
      }
    }
    AsyncFunc(message);
  },
};