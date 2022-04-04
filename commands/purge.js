const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "purge",
  description: "mass delete",
  execute(bot,message,args) {
            if (!message.member.hasPermission('KICK_MEMBERS'))  return message.channel.send("You cannot delete messages :/");
            if(!args[0]) return message.reply(" How many messages do you want to delete (limit 99)");
            if(parseInt(args[0]) > 99) return message.reply("You can't delete more than 99 messages at once.");
            const deleteCount = parseInt(args[0], 10);

            if (!deleteCount || deleteCount < 1 || deleteCount > 100) return;

            message.channel.bulkDelete(deleteCount + 1).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

            message.channel.bulkDelete(parseInt(args[0]) + 1 ).then(message =>{
                message.channel.send(`Cleared ${args[0]} messages!`).then (message =>message.delete({timeout: 300}));
                message.react("ðŸ‘Œ")
            }).catch((err) =>{
                console.log(err)
                            })

  }
}