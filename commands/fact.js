exports.run = async (client, message, args, level) => {
    try {
      require('request')({url: 'https://nekos.life/api/v2/fact', json: true}, (req, res, json) => {
        let embed = new client.Embed('blend', {
          title: 'Fun Fact',
          description: json.fact
        });
        
        message.channel.send(embed);
      });
    } catch (err) {
      message.channel.send('There was an error!\n' + err).catch();
    }
  };
 
  
  exports.help = {
    name: 'fact',
    category: 'Fun',
    description: 'Returns a fun fact',
    usage: 'fact'
  };
 