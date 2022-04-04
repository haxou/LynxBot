const globalFunctions = require("../globalFunctions");
module.exports = {
  name: "choosemypfp",
  description: "Can't decide on a profile pic? Look no further!",
  execute(bot, message, args) {
    globalFunctions.data.getImage(message, "animepfp", true);
  },
};