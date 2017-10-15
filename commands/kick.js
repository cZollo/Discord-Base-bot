exports.run = (client, message, [mention, ...reason]) => {
  const moderator = message.guild.roles.find("name", "Moderator");
  if (!moderator)
    return message.channel.send("The `Moderator` role does not exist, please create a role named `Moderator` to use this command");

  if (!message.member.roles.has(moderator.id))
    return message.reply("You can't use this command, you are not a moderator");

  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kick");
  
  if (message.mentions.users.size >= 1 )
  return message.reply("You may only ban one person at a time")

    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("I do not have permission to kick that member");

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ")).catch(message.channel.send("Error but this activated").then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`);
    });
  }
};
