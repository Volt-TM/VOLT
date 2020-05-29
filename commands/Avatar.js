const discord = require("discord.js")
exports.run = (client , message , args ) => {

	if (args[0]) {
		const user = message.mentions.users.first();
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone else\'s .');
		}
    let embed26 = new discord.MessageEmbed()
    .setColor('#6f00ff')
    .setTitle('**Avatar**')
    .setDescription(`**Avatar Of ${user.tag}**`)
    .setImage(` ${user.displayAvatarURL({dynamic: true})}`);
      message.channel.send(embed26)
        .catch(error => {
      message.channel.send('**Error Occured **')
    })
    }
}




    
     exports.help = {
         name: "avatar",
         usage: "avatar "
     }
