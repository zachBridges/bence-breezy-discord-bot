const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjYxMjk0NDAwODI3MDMxNTcz.Xu_YcQ.uERoR9JWYYjMcm2aO_NodUf6XGg";
const PREFIX = "!";

// check single command(s)
const checkSingleCommands = msg => {
  const commands = msg.content.substring(PREFIX.length).split(" ");

  for (const command of commands) {
    switch (command) {
      case "ping":
        msg.channel.send("pong"); // replies to the channel
        break;
      case "shit":
        msg.reply("please watch your mouth in this channel. Thanks!"); // replies to a specific person
        break;
    }
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
