exports.run = function(client, message, args) {
          if (message.member.hasPermission("KICK_MEMBERS")) {
          
          let args = message.content.substring(6)
          if (!args[0]) return message.channel.send('plz provide the number of messages').then(msg => msg.delete('3000'))
          message.channel.bulkDelete(args)
          message.channel.send(`deleted ${args} messages`).then(msg => msg.delete({timeout:0000}))
          } else {
            message.reply("You Don't Have permission")
          }
          
        }
    
    
  
  exports.help = {
    name: 'purge',
    description: 'Purges X amount of messages from a given channel.',
    usage: 'purge all|bots|user|author <amount>'
  };