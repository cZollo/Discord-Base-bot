exports.run = (client, message, args) => {
    message.channel.send(`Pong... That took ${message.createdTimestamp - message.createdTimestamp}ms`);
}
