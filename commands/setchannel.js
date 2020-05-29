const Discord = require('discord.js')
var jimp = require('jimp');
const db = require("quick.db")

exports.run = async (client, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send("You must specify a valid id for the welcome channel!")
	 

	 client.guilds.cache.get(message.guild.id).channels.cache.get(cArgs).send("Welcome channel set!")
	 
 db.set(`${message.guild.id}`, cArgs)
 
 message.channel.send("You have successfully set the welcome channel to <#" + cArgs + ">")
 }

 
 
 
exports.help = {
  name: "channel"
}