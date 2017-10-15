exports.run = (client, message, [mention, ...reason]) => {
  let modRole = message.guild.roles.find("name", "Moderator");
    
  if(message.member.roles.has(modRole.id)) { 

	  
	  if (!message.mentions.users.first()) {
		  return message.reply("You must mention a user to ban them.")
	  }
      
	  let banMember = message.guild.member(message.mentions.users.first())
      message.guild.member(banMember).ban();
      message.channel.send("User was Banned.");
    } else {
      return message.reply("You must have the role `Moderator` to use this command");
    }
};
