const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "dog",
  description: "Sends an image of a cute doggo.",
  execute(bot, message, args) {
    message.channel.send(globalFunctions.data.getImage(message, "dog", true));
  },
};