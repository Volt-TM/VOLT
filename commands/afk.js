
module.exports.run = async (client, message, args, ) => {
  
    let reason = args.join(' ') ? args.join(' ') : 'I am currently afk, I will reply as soon possible.';
    let afklist = client.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        }
        
        client.afk.set(message.author.id, construct);
        message.channel.send({ embed: {
            color: 0x6f00ffF,
            title: '__**AFK**__',
            fields: [{
                name: '** **',
                value: `**You Have Been Set Afk** **${reason}**`,
            }]
          
        } 
          
        })
    }
}
        
    


  


module.exports.help = {
    name: 'afk'
};
