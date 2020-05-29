
client.on("ready", () => {
  console.log("ready")
  client.user.setActivity('+help | +invite',{type: 'PLAYING'})
  const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

  // And then we have two prepared statements to get and set the score data.
  client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
  client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
});

client.on("message", message => {
  if (message.author.bot) return;
  let score;
  if (message.guild) {
    score = client.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    score.points++;
    const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
    if(score.level < curLevel) {
      score.level++;
      message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
    }
    client.setScore.run(score);
  }
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
0
  

if(command === "rank") {
   message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
}
if(command === "give") {
  // Limited to guild owner - adjust to your own preference!
  
if(message.author.id !== "628498212050698260") return message.reply('This Command Is For Owner Only ')
  const user = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!user) return message.reply("You must mention someone or give their ID!");

  const pointsToAdd = parseInt(args[1], 10);
  if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...")

  // Get their current points.
  let userscore = client.getScore.get(user.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 }
  }
  userscore.points += pointsToAdd;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;

  // And we save it!
  client.setScore.run(userscore);

  return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
}

if(command === "lb") {
  const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);

    // Now shake it and show it! (as a nice embed, too!)
  const embed = new discord.MessageEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(0x00AE86);

  for(const data of top10) {
    embed.addField(client.users.cache.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  return message.channel.send({embed});
}
})
;
var prefix = "+";

client.on('ready', () => {
	 console.log('i am ready!');
});
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});


 client.commands = new discord.Collection();
 
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

var prefix = "+"
client.afk = new Map();
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

 
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (message.content.includes(message.mentions.users.first())) {
    client.afk.forEach(key => {
      if (key.id == message.mentions.users.first().id) {
        message.guild.members.fetch(key.id).then(member => {
          let user_tag = member.user.tag;
          const embed = new MessageEmbed()
          .setColor('#00FFFF')
          .setTitle('__**AFK**__')
          .setDescription(`**${user_tag} is afk ${key.reason}**`)
          message.channel.send(embed)
          
        });
      }
    });
  }
client.afk.forEach(key => {
    if (message.author.id == key.id) {
      client.afk.delete(message.author.id);
      const embed = new MessageEmbed()
      .setColor('#00FFFF')
      .setTitle('__**AFK**__')
      .setDescription('You Have Been Removed From Afk')
      message.channel.send(embed)
    }
  });
if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(client, message, args);
});

client.on('guildMemberAdd', async member => {
  
	let wChan = db.fetch(`${member.guild.id}`)
	
	if(wChan == null) return;
	
	if(!wChan) return;
  
	
let embed = new discord.MessageEmbed()
.setColor(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`)
.setTitle(`**Welcome**`)
.setDescription(`**Welcome ${member} To ${member.guild.name}**`)
.addField(`You Are ${member.guild.memberCount}th Member In Our Server`,`** **`)
.addField(`Pls Read Rules Carefully And Respect Everyone Enjoy`,"** **")
.setThumbnail(member.user.displayAvatarURL({dynamic:true}))
.setImage(`${copypastass[Math.floor(Math.random() * copypastass.length)]}`)
member.guild.channels.cache.get(wChan).send(embed)//Send the image to the channel
})
backup = require("discord-backup"),
client.on("message", async message => {
 
    // This reads the first part of your message behind your prefix to see which command you want to use.
    let command = message.content.toLowerCase().slice(prefix.length).split(" ")[0];
 
    // These are the arguments behind the commands.
    let args = message.content.split(" ").slice(1);
 
    // If the message does not start with your prefix return.
    // If the user that types a message is a bot account return.
    // If the command comes from DM return.
    if (!message.content.startsWith(prefix) || message.author.client|| !message.guild) return;
 
    if(command === "create"){
        // Check member permissions
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x: | You must be an administrator of this server to request a backup!");
        }
        // Create the backup
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("The backup has been created! To load it, type this command on the server of your choice: `"+prefix+"load "+backupData.id+"`!");
            message.channel.send(":white_check_mark: Backup successfully created. The backup ID was sent in dm!");
        });
    }
    if(command === "load"){
        // Check member permissions
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x: | You must be an administrator of this server to load a backup!");
        }
        let backupID = args[0];
        if(!backupID){
            return message.channel.send(":x: | You must specify a valid backup ID!");
        }
        // Fetching the backup to know if it exists
        backup.fetch(backupID).then(async () => {
            // If the backup exists, request for confirmation
            message.channel.send(":warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type `-confirm` to confirm!");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-confirm"), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    // if the author of the commands does not confirm the backup loading
                    return message.channel.send(":x: | Time's up! Cancelled backup loading!");
                });
                // When the author of the command has confirmed that he wants to load the backup on his server
                message.author.send(":white_check_mark: | Start loading the backup!");
                // Load the backup
                backup.load(backupID, message.guild).then(() => {
                    // When the backup is loaded, delete them from the server
                    backup.remove(backupID);
                }).catch((err) => {
                    // If an error occurenced
                    return message.author.send(":x: | Sorry, an error occurenced... Please check that I have administrator permissions!");
                });
        }).catch((err) => {
            // if the backup wasn't found
            return message.channel.send(":x: | No backup found for `"+backupID+"`!");
        });
    }
 
    if(command === "infos"){
        let backupID = args[0];
        if(!backupID){
            return message.channel.send(":x: | You must specify a valid backup ID!");
        }
        // Fetch the backup
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
                .setAuthor("Backup Informations")
                // Display the backup ID
                .addField("Backup ID", backupInfos.id, false)
                // Displays the server from which this backup comes
                .addField("Server ID", backupInfos.data.guildID, false)
                // Display the size (in mb) of the backup
                .addField("Size", `${backupInfos.size} mb`, false)
                // Display when the backup was created
                .addField("Created at", formatedDate, false)
                .setColor("#FF0000");
            message.channel.send(embed);
        }).catch((err) => {
            // if the backup wasn't found
            return message.channel.send(":x: | No backup found for `"+backupID+"`!");
        });
    }
});
client.on('message', message => {
  if(message.mentions.has( client.user)) {
    if(message.mentions.has("@here"|| "@everyone")) return;
    message.reply(":thinking: yo want my prefix here it is `+`")
  }
});

client.on('guildMemberUpdate', function ( oldMember, newMember) {
  const guild = newMember.guild;
 
  var Changes = {
    unknown: 0,
    username: 3,
    nickname: 4,
     addedRole: 1,
    removedRole: 2
  }
  var change = Changes.unknown

  var removedRole = ''
  oldMember.roles.cache.forEach(function (value) {
    if (newMember.roles.cache.get(value.id) == null) {
      change = Changes.removedRole
      removedRole = value.name
    }
  })
 // check if roles were added
  var addedRole = ''
  newMember.roles.cache.forEach(function (value) {
    if (oldMember.roles.cache.get( value.id) == null) {
      change = Changes.addedRole
      addedRole = value.name
    }
  })

  // check if username changed
  if (newMember.user.username != oldMember.user.username) {
    change = Changes.username
  }
  // check if nickname changed
  if (newMember.nickname != oldMember.nickname) {
    change = Changes.nickname
  }
  
  
 
  // post in the guild's log channel
  var log = guild.channels.cache.find(channel => channel.name === 'volt-logs')
  if(!log) return;
    switch (change) {
      
      case Changes.username:
        log.send('**[User Username Changed]** ' + newMember + ': Username changed from ' +
          oldMember.user.username + '#' + oldMember.user.discriminator + ' to ' +
          newMember.user.username + '#' + newMember.user.discriminator)
        break
        
      case Changes.nickname:
       log.send('**[User Nickname Changed]** ' + newMember + ': ' +
          (oldMember.nickname != null ? 'Changed nickname from ' + oldMember.nickname +
            +newMember.nickname : 'Set nickname') + ' to ' +
          (newMember.nickname != null ? newMember.nickname + '.' : 'original username.'))
        break
      case Changes.avatar:
       log.send('**[User Avatar Changed]** ' + newMember)
        break
    case Changes.addedRole:
          const embed1  =  new MessageEmbed()
          .setColor("#00FFFF")
          .setTitle("__**ROLE ADDED**__")
          .setDescription(`Role Added To ${newMember}`)
          .addField('**ROLE NAME**',`${addedRole}`)
          log.send(embed1)
          break
      case Changes.removedRole:
        const embed  =  new MessageEmbed()
        .setColor("#00FFFF")
        .setTitle("__**ROLE REMOVED**__")
        .setDescription(`Role Removed From ${newMember}`)
        .addField('**ROLE NAME**',`${removedRole}`)
        log.send(embed)
        break
      
    }
  })

client.on('messageUpdate', function(oldMessage, newMessage) {

    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
 var log = newMessage.guild.channels.cache.find(channel => channel.name === 'volt-logs');
        if (!log) return;
            log.send('**[Message Updated]** *' + newMessage.author + '*:\n*Old Message*: ' + oldMessage.cleanContent +
                '\n*New Message*: ' + newMessage.cleanContent);
    }

});


add
client.on('message', message => {
  if (message.content === prefix + 'invite') {
    const embed = new MessageEmbed()
    .setColor('#00FFFF')
    .setTitle('__**INVITE**__')
    .addField('Click Here To Invite Me To Your Server','[INVITE](https://discord.com/api/oauth2/authorize?client_id=710534645405581353&permissions=8&scope=bot)')
    .setImage('https://media.discordapp.net/attachments/657125708631506955/711154940529082388/15896229335536390100299185066591.jpg')
    message.author.send(embed)
    message.channel.send('__**CHECK YOUR DM**__')
    
  }
});
client.on('message', message => {
  if (message.content === '+antiraidon') {
  
  if(message.member.hasPermission(["ADMINISTRATOR"])) {
  
client.on('guildMemberAdd', member => {
 var role = member.guild.roles.cache.find(role => role.name === 'Muted')
 if(!role) return message.reply("pls make  a `Muted` role for antiraid to perform")
  member.roles.add(role);
},)
message.channel.send('**antiraid on**')
  } else {
    message.reply("You don't have permission for that")
  }

}
});
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
	kickThreshold: 12, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 15, // Amount of messages sent in a row that will cause a ban.
	muteThreshold: 8, // Amount of messages sent in a row that will cause a mute.
	maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
	banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
	muteMessage: '**{user_tag}** has been muted for spamming.', // Message that will be sent in chat upon muting a user.
	maxDuplicatesWarning: 5, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesMute: 9, // Amount of duplicate messages that trigger a warning.
	// Discord permission flags: https://discord.js.org/#/docs/main/master/class/Permissions?scrollTo=s-FLAGS
	exemptPermissions: [ 'ADMINISTRATOR','MANAGE_SERVERS'], // Bypass users with any of these permissions(These are not roles so use the flags from link above).
	ignoreBots: true, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredUsers: [],
        mutedRole: ['Muted'] // Array of User IDs that get ignored.
	// And many more options... See the documentation.
	
});

client.on("message", message => {
  if (message.content === "+avatar") {
  const embed = new MessageEmbed()
  .setColor('#6f00ff')
  .setTitle('__**AVATAR**__')
   .setDescription(`**Avatar Of ${message.author.tag}**`)
  .setImage(`${message.author.displayAvatarURL({dynamic: true})}`)
  message.channel.send(embed)
}
});
client.on('message', message => {  
  if(message.content.startsWith(prefix + "unmute")) {
    if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.reply('you dumb bruh :thinking:');
    let person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
    let muteRole = message.guild.roles.cache.find(val => val.name === 'Muted')
    if(!person) return message.reply("mention someone")
    if (!message.guild.member(person).roles.cache.has(muteRole.id)) return message.reply(`Duh, u dumb bruh he is not muted :laughing:`);
message.guild.member(person).roles.remove(muteRole)
    
      const embed = new MessageEmbed()
      message.channel.send(`**UNMUTED ${person} by ${message.author.tag}**`)
     
      let logchannel = message.guild.channels.cache.find(channel => channel.name === 'volt-logs');
      if  (!logchannel) return ;
      logchannel.send(`${person} unmutes by ${message.author.tag}`)
     
        }
    });
client.on("guildDelete", messagee => {
      let embed = new discord.MessageEmbed()
      .setDescription(`guild name ${messagee.name} guild id ${messagee.id}`)
      client.channels.cache.get("706611044767760534").send(embed)
  });
client.on("guildMemberAdd", member => {
  let log = member.guild.channels.cache.find(channel => channel.name === 'volt-logs')
  if(!log) return;
  if(!member.user.bot) return
  const embed = new MessageEmbed()
  .setTitle("__**BOT ADDED**__")
  .setColor("#00FFFF")
  .setDescription(`a bot was added to the guild named ${member.user.tag} `)
log.send(embed)
})

    client.login(config.token);
