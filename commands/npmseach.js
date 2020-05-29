const request = require('request');
const discord =  require("discord.js")
exports.run = async (client, message, args) => {
  
    let output = '';
    let i = 1;
    if (!args[0]) return message.reply('You need to input somthing to search!');
    
    request({url: 'https://api.npms.io/v2/search?q=' + encodeURIComponent(args.join(' ')), json: true}, async (req, res, json) => {
      if (json.results.length > 5) json.results.length = 5;
      
      json.results.forEach((module) => {
        output += '\n' + i + '. ' + module.package.name;
        i++;
      });
      let embed = new discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("__**NPM SEARCH**__")
      .setDescription("**Results Related To Your Search **")
      .addField(`${output}`,`[View Thread](https://api.npms.io/v2/search?q=${encodeURIComponent(args.join(' '))})`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      message.channel.send(embed)

    })
}
exports.help = {
    name : "npmsearch"
}