
const discord = require('discord.js')

exports.run = async (client, message, args) => {
    let rolee =  message.content.slice("+roleinfo".length);
    if(!rolee) return message.reply("pls mention a role")
   let role =  message.guild.roles.cache.find(role => role.name === rolee.id)
   if(!role) return message.reply("not able to find that role")
   console.log(role)
}
exports.help = {
  name: 'channelinfo',
  info: 'Shows information about a channel',
  usage: '<channel>',
  unlisted: false,
}

