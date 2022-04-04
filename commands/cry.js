const globalFunctions = require("../globalFunctions");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "cry",
  description: "cry.",
  execute(bot, message, args) {
    const cryEmbed = new MessageEmbed()
      .setTitle(`${message.author} is sad and is crying :(`)
      .setTitle(`Hope you get better soon :((`)
    message.channel.send(cryEmbed)
    message.channel.send(globalFunctions.data.getImage(message, "animecrygif", true));

  },
};