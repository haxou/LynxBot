const Discord = require('discord.js')

module.exports = {
	name: 'apply',
	description: 'apply',
	execute: async(bot, message, args) => {
  message.channel.send(`:ballot_box:  ${message.author.username} applied! React to my next message to vote on it. :ballot_box: `);
  const pollTopic = await message.channel.send(message.content.slice(6));
  await pollTopic.react(`✅`);
  await pollTopic.react(`⛔`);
  if(!polltopic)
    message.author.send('Here is the template if you wish to be a staff member.')
    message.author.send('Why would you like to be a staff member?')
    message.author.send('Who would recommend you for the position?')
    message.author.send('What would your skillset be?')
    message.author.send('Please post the application with $apply and then your application.')

  // Create a reaction collector
  const filter = (reaction) => reaction.emoji.name === '✅';
  const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
  collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
  collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  }
};