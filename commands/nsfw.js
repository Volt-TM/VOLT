const discord = require('discord.js');

const request = require('request');

const subs = ['gonewild','RealGirls','Ass','Asshole','AssOnTheGlass','SpreadEm','Booty','GirlsInYogaPants','GirlsInLeggings','CollegeSluts','CollegeNSFW','FuckYeahDrunkSluts','CumSluts']

module.exports.run = async (bot, message, args) => {

    var sub = subs[Math.floor(Math.random() * subs.length)];

    



    if (message.channel.nsfw === true) {



        request(`https://reddit.com/r/${sub}/random.json`, function (error, response, body) {

            body = JSON.parse(body)

            var data = body[0]['data']['children'][0]['data']

            var embed = new discord.MessageEmbed()

            

            if(data['url'].match('.jpg') || data['url'].match('.png')) {

                embed.setColor('RANDOM')

                embed.setTitle(`r/${sub}`)

                embed.setURL(`https://reddit.com${data['permalink']}`)

                embed.setFooter(`Photo by ${data['author']} 😉`)

                embed.setImage(data['url'])

                message.channel.send(embed);

            } else if(data['url'].match('gfycat')) {

                console.log('shmeet ')

                embed.setColor('RANDOM')

                embed.setTitle(`r/${sub}`)

                embed.setURL(`https://reddit.com${data['permalink']}`)

                embed.setFooter(`Photo by ${data['author']} 😉`)

                embed.setImage(data['url']+'.gif')

                message.channel.send(embed);

            }

        });

    } else {

        message.channel.send('Must be in a nsfw channel!')

    }

}



module.exports.help = {

    name: 'nsfw',

    usage: 'gets a random nsfw',

    description: 'Gets a random NSFW picture or gif'

} 