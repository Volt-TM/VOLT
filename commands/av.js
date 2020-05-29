const discord = require("discord.js")

exports.run =(client , message ,  args) => {
    
      const theUsersID = message.content.slice('+av'.length);
      if(!theUsersID) return message.reply('pls provide a valid user id')
    
    client.users.fetch(theUsersID).then(myUser => {
      const embed = new discord.MessageEmbed()
      .setColor('#6f00ff')
      .setTitle('__**AV**__')
      .setDescription(`**Avatar Of ${theUsersID}**`)
      .setImage(myUser.displayAvatarURL({dynamic: true}));
        message.channel.send(embed); 
    }).catch(error => {
      message.channel.send('**Error Occured Pls Type A Valid `ID`**')
    })
    

}

exports.help = {
  name: 'av',
 usage: "av"
}

