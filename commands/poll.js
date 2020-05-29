const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args.join(' ')) return message.reply('You need to supply the question');
    
    let embed = new Discord.MessageEmbed()
    .setTitle(args.join(' '))
    .setFooter( message.author.tag)
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setColor('#00FFFF');

    let msg = await message.channel.send(embed);
    
    await msg.react('👍');
    await msg.react('👎');
    await msg.react('🤷');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'poll',
  category: 'General',
  description: 'Starts a poll',
  usage: 'poll <question>'
};