const discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send(new discord.MessageAttachment('https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg'));
  } catch (err) {
    message.channel.send('There was an error somehow!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['surpika', 'surprised'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'pikaoh',
  category: 'Fun',
  description: 'Returns a surprised Pikachu.',
  usage: 'pikaoh'
}