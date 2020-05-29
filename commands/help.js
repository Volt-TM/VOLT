const discord = require('discord.js')

exports.run = (client ,message ,args) => {
    const embed = new discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('__**HELP**__')
        .addField('__**MODERATION COMMNADS**__','`kick` `addrole` `warn` `warnlevel` `clearwarns` `mute` `clear` `ban` `tempmute` `unmute` `antiraidon` `antiraidoff` `votekick` `removerole` `timedlock` `setnick` `corona`')
        .addField('__**FUN COMMNADS**__',' `meme`  `quiz` `image` `nsfw` `8ball` `find` `rps` `userinfo` `serverinfo` `stats` `avatar` `av` `timer` `embed` `announce` `say` `love` `emojiimage` `emojisteal` `minesweeper` `whois` `gif` `encrypt` `f` `advice` `afk` `quiz`')
        .addField("__**OWEFIED COMMAND**__",'`kiss` `spank` `poke` `feed` `smack` `cuddle` `tickle` ')
       .addField("__**PROFILE**__",'`daily` `work` `beg` `balance` `profile` `buy` `sell` `leaderboard`')
       .addField("__**CHAT RANKING**__",'`rank` `lb`')
        .addField('__** INTERNALLY MANAGED MODULES**__','`Antispam`  `Logs` `backup`')
        .addField("__**BACKUP**__",'**Use +create Command To Create Backup For A Server And Whenever You Want To Load It Using +load <backupid> Remember That Backup Id Is Case Sensitive Which Will Provided In Dm When You Create A Backup & Do +setup For Logs Setup** ')
        .setFooter('my prefix is `+`')
        message.channel.send(embed)
}
exports.help = {
    name : "help"
}
