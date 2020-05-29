
const dadjoke = require('../dadjoke.json');
exports.run = (client, message, args) => {
    args = args.join(" ");
    message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
}



exports.help = {
    name: "dadjoke",
    description: 'Sends a Horible dad joke that makes you cringe.',
    usage: 'dadjoke'
}
