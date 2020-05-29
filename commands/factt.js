const fetch = require('node-fetch');

/**
 * Search something in the Discord.js Documentation
 * @returns JSON Embed Object 
 * @returns Promise
 * @requires node-fetch dependancy 
 * @argument term What to search the discord.js docs for
 */
exports.run = (client , message , args ) => {

async function fetchDocs(term) {
	const q = encodeURIComponent(term.toString());

	const res = await fetch(`https://djsdocs.sorta.moe/v1/main/stable/embed?q=${q}`);
	const embed = await res.json();
    message.channel.send( embed )
	 return embed
};

fetchDocs('ClientUser#setActivity')
	.then(console.log)
        .catch(console.error);
        message.channel.send({ embed: res })
        
}
exports.help = {
    name : "docs"
}