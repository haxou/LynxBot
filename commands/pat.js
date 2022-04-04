const { MessageEmbed } = require("discord.js");
const globalFunctions = require("../globalFunctions");

module.exports = {
  name: "pat",
  description: "pat the requested user.",
  usage: "[user]",
  args: true,
  execute(bot, message, args) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user.");
    

    async function AsyncFunc(message) {
      if (message.mentions.users.first() == message.author) {
        message.reply("You kissed yourself. Wait, you can't!");
      } else {
        const Embed = new MessageEmbed()
          .setTitle(`${message.author.tag} pats ${
              message.mentions.users.first().tag
            }.`)
                        .setColor(9384170)
                        
          

        message.channel.send(Embed);
				message.channel.send(globalFunctions.data.getImage(message, "animeshootgif", true))
      }
    }
    AsyncFunc(message);
  },
};