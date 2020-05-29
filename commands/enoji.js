
const moment = require('moment');
const { MessageEmbed } = require('discord.js');

exports.run = (client, message , args) => {
let emoji = message.content.slice("+emoji".length)
  const embed = new MessageEmbed()
			.setColor(0x00AE86)
			.setThumbnail(emoji.url)
			.addField('❯ Name', emoji.name, true)
			.addField('❯ ID', emoji.id, true)
			.addField('❯ Creation Date', moment.utc(emoji.createdAt).format('MM/DD/YYYY h:mm A'), true)
			.addField('❯ Animated?', emoji.animated ? 'Yes' : 'No', true);
		return message.channel.send(embed);
	}
exports.help = {
    name: "emoji"
}