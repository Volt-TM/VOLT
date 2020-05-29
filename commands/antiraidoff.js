exports.run = (client , message , args) => {

   
      if(message.member.hasPermission(["ADMINISTRATOR"])) {
      var role = message.guild.roles.cache.find(role => role.name === 'Muted')
      if(!role) return;
     message.guild.members.cache.forEach(member => member.roles.remove(role));
    message.channel.send('**antiraid mode off**')
      } else {
        message.reply('You Dnt Have permission')
      }
    }
      

  
exports.help = {
    name: "antiraidoff",
    usage: "turn off anitiraid"
}