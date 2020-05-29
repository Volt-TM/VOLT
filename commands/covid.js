const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();
const discord = require("discord.js")
exports.run = async (client ,  message , args ) => {
 
    let dis = message.content.slice("+corona".length);
    if(!dis) return message.reply('pls enter country');
    let corona = await track.countries(dis) 
      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#6f00ff")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
exports.help = {
    name: "corona",
    usage: 'give corona updates'
};

