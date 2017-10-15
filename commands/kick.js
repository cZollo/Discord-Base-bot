exports.run = (client, message, [mention, ...reason]) => {
  let modRole = message.guild.roles.find("name", "Moderator");
    
  if(message.member.roles.has(modRole.id)) { 

	  
	  if (!message.mentions.users.first()) {
		  return message.reply("You must mention a user to kick them.")
	  }
      
	  let kickMember = message.guild.member(message.mentions.users.first())
      message.guild.member(kickMember).kick();
      message.channel.send("User was kicked.");
    } else {
      return message.reply("You must have the role `Moderator` to use this command");
    }
};
