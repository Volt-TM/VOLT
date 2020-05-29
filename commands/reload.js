exports.run = (client, message, args) => {
    if (message.author.id !== '628498212050698260' && message.author.id !== '557097259561517062') return message.channel.send('You scrub, what made you think you\'d be able to do that??');
    if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
  };
  exports.help = {
      name: "reload"
  }