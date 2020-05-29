const copypastas = require('../copypasta.json');
exports.run = (client, message, args) => {
    args = args.join(" ");
    message.channel.send(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`);
}


exports.help = {
  name: 'copypasta',
  description: 'Sends a random copypasta.',
  usage: 'copypasta'
};