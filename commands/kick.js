const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
        if (!message.guild) return;
        
          if (message.member.hasPermission("KICK_MEMBERS")) {
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
              .kick()
              .then(() => {
                let reason = message.content.slice(`+kick ${user}`.length)
                if(!reason) return message.reply(' +kick member reason  pls provide reason next time ');
                message.channel.send(`**${member} was kicked by ${message.author.username} logged **`)
              
              })
              .catch(err => {
                message.reply('i was missing perm');
                console.error(err);
            });
            let channel = message.guild.channels.cache.find(channel => channel.name === 'volt-logs')
            if(!channel) return;
            let reason = message.content.slice(`+kick ${user}`.length)
            if(!reason) return channel.send(`kicked ${user} without reason by ${message.author.tag}`)
              let embed2 = new Discord.MessageEmbed()
              .setColor("#OOFFFF")
              .setTitle('__**KICK**__')
               .setDescription(`kicked ${user.tag}`)
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
      } 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yeet"],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};