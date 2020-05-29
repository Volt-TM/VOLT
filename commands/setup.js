
const discord = require("discord.js")
exports.run = (client , message ,  args) => {
      if (message.member.hasPermission(["KICK_MEMBERS"])) {
  message.guild.channels.create('volt-logs', {
      type: 'text',
      permissionOverwrites: [
          {
              id: message.guild.id,
              deny: ['VIEW_CHANNEL'],
          },
          {
              id: message.author.id,
              allow: ['VIEW_CHANNEL'],
          },
      ],
  })
  
  
  
  const embed = new discord.MessageEmbed()
  .setColor('#00FFFF')
  .setTitle("__**SETUP COMPLETED**__")
  .addField('created a logs channel','** **')
  
  .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
  message.channel.send(embed);
  } else {
    message.reply("You Don't Have Permission")
  }
  }
  exports.help = {
      name: "setup",
      usage: " setup command"
  }