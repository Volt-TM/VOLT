const discord = require("discord.js")
const drones = require("../drones.json")

exports.run = (client , message , args) => {
    if(!message.author.id === '628498212050698260') return message.reply("you scrub you really think that you could do that :laughing:");
    let embed = new discord.MessageEmbed()
        .setColor("#00FFFF")
        .setAuthor("__**GITHUB**__")
        .setDescription("Github Drones Incoming Keep Your Head Safe ")
        .addField("**GITHUB**",'account/github/drones/sahilarora-svg ')
        .addField(`${drones[Math.floor(Math.random() * drones.length)]}`,'** ** ')
        message.channel.send(embed);
    
}
exports.help = {
    name : "drones",
    usage: "gives github acc drones only for owner"
}