
   exports.run = (client , message , args) => {
          if (message.member.hasPermission("KICK_MEMBERS")) {
            // I've added this part
            let channel   = message.mentions.channels.first(); // you get the first mentioned 
            if (!channel) return message.reply("No  mentioned."); // if it doesn't exist, you exit
            let args = message.content.split(" ").slice(2).join(" "); // if it exist, you remove the command AND the 
        
            let split = args.split("-");
            let url = args[2];
            channel.send("** **", { // here you send it to your  instead of the same one
              embed: {
                color:  0X6f00ff,
                title: "ANNOUNMENT",
                description: split[0],
                url: split[1],
               
                footer: {
                  icon_url: message.author.avatarURL,
                  text: message.author.username
                }
              }
            });
          } else {
            message.reply("You Don't Have Permission")
          }
        }

       
exports.help = {
    name: "announce", 
    usage: 'makes a announcment'
}
        