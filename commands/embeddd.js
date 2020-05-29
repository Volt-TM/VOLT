const discord =  require('discord.js')

exports.run = (client , message , args) => {
    let text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('write some input')
    const embed = new discord.MessageEmbed()
    .setColor('#6f00ff')
    .setDescription(text)
    message.channel.send(embed);
    
    message.delete()
  }
 

  exports.help = {
      name: "embed",
      usage: "makes a message embed"
  }