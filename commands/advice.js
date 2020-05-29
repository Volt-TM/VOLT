const request = require('superagent');
const discord = require('discord.js')


exports.run = async (bot, message, args) => {

        request

            .get('http://api.adviceslip.com/advice')

            .end((err, res) => {

                if (!err && res.status === 200) {

                    try {

                        JSON.parse(res.text)

                    } catch (e) {

                        return message.channel.send('An api error occurred.');

                    }

                    const advice = JSON.parse(res.text)

                    const embed = new discord.MessageEmbed()
                    .setColor('#6f00ff')
                    .setTitle("__**ADVICE**__")
                    .setDescription(advice.slip.advice)
                    message.channel.send(embed)

                } else {

                console.error(`REST call failed: ${err}, status code: ${res.status}`)

                }

            });

    };


exports.help = {

    name: 'advice',

    description: 'Send a Life Advice',

    usage: 'advice'

  };
