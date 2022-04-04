const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: "hentai",
  description: "hentai",
  execute: async (bot, message, args) => {
      if (message.channel.nsfw === true) {
          link = await neko.nsfw.hentai()
          console.log(link.url)
          const embed = new Discord.MessageEmbed()
              .setAuthor(`Turned on?`)
              .setColor('#00FFF3')
              .setImage(link.url)
              .setFooter(`Bot by Codex10`);
              message.channel.send(embed);
        } 
      else {
        message.channel.send("This isn't NSFW channel!")
        link = await neko.nsfw.hentai()

        console.log(link.url)
      }
    }
}
    