const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "8ball",
  description: "The classic 8ball.",
  execute(bot, message, args) {
    const responses = [
     "Try again later.",
     "Ask someone else.",
     "Why should I care?",
     "Mhm",
     "Yes.",
     "Obviously yes.",
     "Bruh. Yes.",
     "Yupper",
     "Yesssss",
     "Yessir/ma'am!",
     "Give me a cookie and I'll think about it.",
     "Nah, ain't nobody got time fo dat.",
     "Is that even a question? YES!!",
     "E DUH!!!",
     "Why do you care?",
     "Noperz",
     "Nope",
     "no.",
     "Hell no.",
     "Le nope",
     "Nah.",
     "Nu-uh.",
     "Did you really think yes? That's cute.",
     "nope",
     "NO..."
    ];

  const res = responses[Math.floor(Math.random() * Math.floor(responses.length))]

  const ballEmbed = new MessageEmbed()
    .setTitle('8ball ')
    .setDescription(`Questioner : ${message.author}\n \n**Response**:\n${res}`)
  message.channel.send(ballEmbed)
  .catch(e)
    message.channel.send(`Woah! I could not execute that command. This was the error: ${e}`)
  }
};