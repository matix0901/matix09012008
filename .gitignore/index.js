const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("bot arkadia rp !help");
    console.log("Le bot a bien ete connecte");
});
