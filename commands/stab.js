const { MessageEmbed } = require("discord.js");
const globalFunctions = require("../globalFunctions");

module.exports = {
  name: "stab",
  description: "stab the requested user.",
  usage: "[user]",
  args: true,
  execute(bot, message, args) {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user.");
    

    async function AsyncFunc(message) {
      if (message.mentions.users.first() == message.author) {
        message.reply("You stabbed yourself. Please seek help.");
      } else {
        const Embed = new MessageEmbed()
          .setTitle(`${message.author.tag} stabbed ${
              message.mentions.users.first().tag
            }.`)
                        .setColor(9384170)
                        .setDescription(globalFunctions.data.getImage(message, "animestabgif", true))
          

        message.channel.send(Embed);
      }
    }
    AsyncFunc(message);
  },
};