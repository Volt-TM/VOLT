const got = require("got")
const discord = require("discord.js")
exports.run = (client ,message , args) => {

      got('https://www.reddit.com/r/memes/random/.json').then(response => {
      let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        const embed = new discord.MessageEmbed()
        .addField(`${memeTitle}`, `[View thread](${memeUrl})`)
        .setImage(memeImage)
        .setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
          }).catch(console.error);

    
        }
        exports.help = {
            name : "meme",
            usage: "gives a aredit meme"
        }