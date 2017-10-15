const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = process.env.BOT_PREFIX; //replace this with const prefix = "your prefix here";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({
      game: {
        name: "bb!help l BaseBot",
        type: 0
      }
})
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.reply('pong');
  	} else if (message.content === prefix + "github") {
        message.channel.send("My github repo has been sent to you in a direct message!")
        message.author.send("Here is my link to my github repo: https://github.com/cZollo/Discord-Base-bot")
    }
});


client.login(process.env.BOT_TOKEN); //replace this with client.login("your token here");
