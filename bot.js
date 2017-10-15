const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = process.env.BOT_PREFIX; //replace this with const prefix = "your prefix here";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.login(process.env.BOT_TOKEN); //replace this with client.login("your token here");
