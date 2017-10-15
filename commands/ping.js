exports.run = (client, message, args) => {
    message.channel.send(`Pong, that took ${new Date().getTime() - message.createdTimestamp} ms`);
}
