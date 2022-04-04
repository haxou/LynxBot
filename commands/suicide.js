const globalFunctions = require("../globalFunctions");
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "suicide",
  description: "cry.",
  execute(bot, message, args) {
     const suicideEmbed = new MessageEmbed()
      .setTitle(`${message.author} has had enough of this world and decided suicide would be the best way out.`)
    message.channel.send(suicideEmbed)
    (globalFunctions.data.getImage(message, "animesuicidegif", true))
    
  },
};