const querystring = require('querystring');
const fetch = require('node-fetch')
const discord =  require("discord.js")

exports.run = async (client , message ,args) => {
  
  let text = message.content.slice('+find'.length);
    if(!text) return message.reply('You need to supply a search term!');
  

	const query = querystring.stringify({ term: text});

  const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

if(!list.length) return message.reply("**No Result Found**")
const embed = new discord.MessageEmbed()
.setColor('#00FFFF')
 .setTitle('__**DEFINITION**__')
 .setDescription(list[0].definition)
 message.channel.send(embed)
}


exports.help = {
    name : "find",
    usage: "finds a word"
};