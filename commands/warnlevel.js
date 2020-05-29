const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.reply("Error You Don't Have Permission");
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('You must mention someone to check their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user...");
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
if(!warns[`${user.id}, ${message.guild.id}`]) return message.reply('No Warnings Found');
    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
    message.channel.send({embed});
}


  
  exports.help = {
    name: 'warnlevel',
    description: 'Show how many warnings a user have',
    usage: 'warnlevel [mention]'
  };
  
