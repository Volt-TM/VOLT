const quiz = require('../quiz.json');



const discord = require("discord.js")

exports.run  = async (client ,message ,args) => {
    
    const item = quiz[Math.floor(Math.random() * (quiz.length))];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    let embed = new discord.MessageEmbed()
.setColor("#6f00ff")
.setImage(item.url)
.setTitle("**Get Ready Pal**")
.setDescription("All Alphabets Should Be In Lowecase And Can Include Space If Required")
.addField('**Guess The Anime Character**','** **')
message.channel.send(embed)
.then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
			message.channel.send(`${collected.first().author} got the correct answer ....enjoy your 10 points!`)
		})
		.catch(collected => {
			message.channel.send(`Looks like nobody got the answer this time. sed the answer was ${item.answers}`);
        });
        
});

}
exports.help = {
    name: "quiz"
}
