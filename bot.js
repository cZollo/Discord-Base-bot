const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = process.env.BOT_PREFIX

function ready() {
  console.log("Bot is onine!")
   client.user.setPresence({
      game: {
        name: "!help - BaseBot",
        type: 0
      }
})
}

client.on("ready", () => {
     client.user.setPresence({
      game: {
        name: "Client Starting",
        type: 0
      }
})
  console.log("Starting the bot...")
  setTimeout(ready(), 10000);
})

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.BOT_TOKEN);
