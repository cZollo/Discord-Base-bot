exports.run = (client, message, args) => {
    message.channel.send("I have sent you my github repo in a direct message.");
    message.author.send("My github repo is here: https://github.com/cZollo/Discord-Base-bot/");
}
