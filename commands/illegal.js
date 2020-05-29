const discord =  require("discord.js")

exports.run = async (client, message, args, level) => {
    const embed =  new discord.MessageEmbed()
    .setColor("#00FFFF")
    .setTitle("__**LIEDETECTOR**__")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setDescription('**Your messages are ' + Math.floor(Math.random() * 99) + '% lies**');
      message.channel.send(embed)
      .catch(error => {
        message.channel.send('**Error Occured **')
      })
     
  };
  
  
  
  exports.help = {
    name: 'liedetector',
    category: 'Fun',
    description: 'Returns how much you lie',
    usage: 'liedetector'
  };