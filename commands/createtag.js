exports.run = async (client, message, args, level) => {
    try {
      let notAnimated = [];
      let animated = [];
      
      message.guild.emojis.cache.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString());
        else notAnimated.push(emoji.toString());
      });
  
      if (!animated[0]) animated = ['None'];
      if (!notAnimated[0]) notAnimated = ['None'];
      
      message.channel.send('**Animated:\n**' + animated.join(' ') + '**\n\nNot Animated**' + notAnimated.join(' '));
    } catch (err) {
      message.channel.send('Their was an error!\n' + err).catch();
    }
  };
  
  
  exports.help = {
    name: 'emojis',
    category: 'General',
    description: 'Returns all of the emojis in the server.',
    usage: 'emojis'
  };