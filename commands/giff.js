var GphApiClient = require('giphy-js-sdk-core')
var giphy = GphApiClient("Z6oLrZ1Xvr2reHP9Z3u4GvF58t7AeEMx")
const discord = require("discord.js")




exports.run = (client , message , args) => {
    let dis = message.content.slice('+gif'.length)
    if(!dis) return message.reply('Input Gif To Search ')
        giphy.search("gifs", { q: dis })
          .then(response => {
            var totalResponses = response.data.length;
            var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
            var responseFinal = response.data[responseIndex]
    let embed = new discord.MessageEmbed()
    .setTitle('**Gif According To Your Search**')
    .setColor('6f00ff')
    .addField("** **","[View Thread](https://developers.giphy.com/)")
    .setImage(responseFinal.images.fixed_height.url)
            message.channel.send(embed)
        });
      }

    
exports.help = {
    name:"gif"
}
