const discord = require('discord.js')
const fs = require('fs')
exports.run = async (client ,message ,args) => {
    if(!message.member.hasPermission(["MANGE_SERVERS"])) return message.reply("Did U Think U Could Make Me Do That :laughing:")
    if(!args[0] || args[0 === "help"] ) return message.reply("+prefix <desired prefix>")
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf-8"));
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err)
       
        
    })

    message.channel.send(`prefix changed to ${args[0]}`)

}
exports.help = {
    name : "prefix"
}