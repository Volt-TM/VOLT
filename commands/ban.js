const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
        if (!message.guild) return;
          if (message.member.hasPermission("KICK_MEMBERS")) {
              
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
              .ban()
              .then(() => {
                  let reason = message.content.slice(`+ban ${user}`.length)
                  if(!reason) return message.reply(' +ban member reason  pls provide reason next time')
  
                message.channel.send(`**${member} banned by ${message.author.username} logged **`)
                

              })
              .catch(err => {
                message.reply('i was missing perm');
                console.error(err);
                
            });
            let channel = message.guild.channels.cache.find(channel => channel.name === 'volt-logs')
              if(!channel) return;
              let reason = message.content.slice(`+ban ${user}`.length)
            if(!reason) return channel.send(`banned ${user} without reason by ${message.author.tag}`)
              let embed2 = new Discord.MessageEmbed()
              .setColor("#OOFFFF")
              .setTitle('__**BAN**__')
               .setDescription(`Banned ${user.tag}`)
               .addField("**REASON**",reason)
               .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                channel.send(embed2)
          } else {
            message.reply('user is not in server');
          }
        } else {
          message.reply('mention someone');
        }
        
      } else {
        message.reply("You Don't Have Permission")
      }
      };
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bigyeet"],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};