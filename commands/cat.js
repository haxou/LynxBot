const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "cat",
  description: "Sends an image of a cat.",
  execute(bot, message, args) {
    message.channel.send(globalFunctions.data.getImage(message, "cat", true));
  },
};