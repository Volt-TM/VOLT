const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (client , message, args) => {
    let guildMember;
  
    if (message.mentions.members.first()) {
      guildMember = message.mentions.members.first();
    } else {
      guildMember = message.member;
    }
  
    const user = guildMember.user;

    let embed = new Discord.MessageEmbed()
      .setAuthor(user.username)
      .setDescription("Users Info", true)
      .setColor("#64FF00", true)
      .addField("Full Username:", `${user.username}${user.discriminator}`, true)
      .addField("ID:", user.id, true)
      .addField("Created at:", user.createdAt, true)
      .addField("Status:", `${user.presence.status}`, true)
      .addField("Roles", guildMember.roles.cache.map(r => `${r}`).join('|'), true)
      .setThumbnail(`${user.displayAvatarURL({dynamic: true})}`)
  
    message.channel.send(embed);
  }

module.exports.help = {
    name: 'whois'
}