const Discord = require("discord.js");
const bot = new Discord.Client();
const { token } = require("./config.json");
const PREFIX = "!";

// check single command(s)
const checkSingleCommands = msg => {
  const str = msg.content.substring(PREFIX.length);
  const command = str.split(":")[0];
  const args = str
    .substring(str.indexOf(":") + 1, str.length)
    .replace(/\s/g, "%20")
    .split(",");

  switch (command) {
    case "fluky":
      const url = "http://fluky.io/?name=" + args;
      msg.channel.send(url);
      break;
  }
};

// check phrase commands
const checkPhraseCommands = msg => {
  if (msg.content === "I feel a breeze.") {
    msg.reply("did somebody open a window?");
  }
};

// ready event
bot.on("ready", () => {
  console.log("Bot online!");
});

// message event
bot.on("message", msg => {
  checkSingleCommands(msg);
  checkPhraseCommands(msg);
});

// login
bot.login(token);
