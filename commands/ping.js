exports.run = (client, message, args) => {
    message.channel.send(`Pong... ${Math.round(this.client.ping)}ms.`);
}
