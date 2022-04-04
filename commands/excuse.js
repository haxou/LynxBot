const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "excuse",
  description: "funny excuses",
  aliases: ["guildinfo", "guild", "server"],
  guildOnly: true,
  execute(bot, message, args) {
		var starter = [
			"Sorry I can't come ",
			"Please forgive my absence, ",
			"This is going to sound crazy but ",
			"Get this: ",
			"I can't go because ",
			"I know you're going to hate me but ",
			"I was minding my own business and boom! ",
			"I feel terrible but ",
			"I regretfully cannot attend, ",
			"This is going to sound like an excuse but ",
		];
		const randomElement = starter[Math.floor(Math.random() * starter.length)];
		
		
		
		var scapegoat = [
			"my nephew ",
			"the ghost of Hitler ",
			"the pope ",
			"my ex ",
			"a high school marching band ",
			"Dan Rather ",
			"a sad clown ",
			"the kid from Air Bud ",
			"a professional cricket team ",
			"my Tinder date ",
			"Ariana Grande ",
			"my dick ",
			"my boyfriend ",
			"my girlfriend ",
			"my dog ",
		];
		const randomElement2 = scapegoat[Math.floor(Math.random() * scapegoat.length)];
		
		var delay = [
			"just shit the bed.",
			"died in front of me.",
			"won't stop telling me knock knock jokes.",
			"is having a nervous breakdown.",
			"gave me syphilis.",
			"poured lemonade in my gas tank.",
			"stabbed me.",
			"found my box of human teeth.",
			"stole my bicycle.",
			"posted my nudes on Instagram.",
			"just came all over my bedsheets.",
			"hacked me.",
			"sucked my dick too long.",
			"took an IQ test and scored a 69.",
			"tested positive for HPV.",
			"has to iron my laundry.",
			"has a flat tire.",
		];
		const randomElement3 = delay[Math.floor(Math.random() * delay.length)];
		
		message.channel.send(randomElement + randomElement2 + randomElement3)
		
  }
};