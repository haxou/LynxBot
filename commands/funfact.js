module.exports = {
  name: "fact",
  description: "Tells a random fact.",
  aliases: ["funfact", "ff"],
  execute(bot, message, args) {
    const facts = [
      'The plural of octopus is "octopodies"!',
      "The hashtag symbol is technically called an octothorpe.", 
      "The 100 folds in a chef's hat represent 100 ways to cook an egg.",
      "Some cats are allergic to people.",
      "The unicorn is the national animal of Scotland.",
      "M&M stands for Mars and Murrie.",
      'Neil Armstrong didn\'t say "That\'s one small step for man." He actually stated, "That\'s one small step for ***a*** man"',
      "You can hear a blue whale's heartbeat from more than 2 miles away.",
      "Four times more people speak English as a second language than as a native one.",
      "The lyrebird can mimic almost any sounds it hears — including chainsaws.",
      "Coca-Cola was the first soft drink in space.",
      'The speed of a computer mouse is measured in "Mickeys."',
      "Fear of the number 13 is called triskaidekaphobia.",
      "The first oranges weren’t orange.",
      'A cow-bison hybrid is called a "beefalo".',
      "Johnny Appleseed’s fruits weren’t for eating.",
      'Scotland has 421 words for "snow".',
      "Samsung tests phone durability with an ass-shaped robot.",
      'The "Windy City" name has nothing to do with Chicago weather.',
      "Peanuts aren’t technically nuts.",
      "Armadillo shells are bulletproof.",
      "The longest English word is 189,819 letters long.",
      "Octopodies lay 56,000 eggs at a time.",
      "Cats have fewer toes on their back paws.",
      "Kleenex tissues were originally intended for gas masks.",
      "Blue whales eat half a million calories in one mouthful.",
      "That tiny pocket in jeans was designed to store pocket watches.",
      "Turkeys can blush.",
      "Most Disney characters wear gloves to keep animation simple.",
      "The man with the world’s deepest voice can make sounds humans can’t hear.",
      "The American flag was designed by a high school student.",
      "Cows don’t have upper front teeth.",
      "I wouldn't be able to do any of this without Jasmine. She kept me motivated, even when times got rough. She's a legend. Nothing can obstruct my passionate love for her. However, I would be able to do all of this without F_x who did nothing but threaten me with my own scripts and take credit for my code, without a fucking thanks. Now, this said user is an asshole :D **HE CAN GO FUCK HIMSELF, I'M NOT LETTING HIM STEAL MY FUCKING CODE AT ALL!!**" 
    ];
    message.channel.send(
      facts[Math.floor(Math.random() * Math.floor(facts.length))]
    );
  },
};