
var prefix  = "+"
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request");
const discord = require("discord.js")
exports.run = (client ,message , args) => {
 
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === prefix + "image") { // Check if first part of message is image command
 
        // call the image function
        image(message, parts); // Pass requester message to image function
    }

function image(message, parts) {
 
    /* extract search query from message */
 
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
       $ = cheerio.load(responseBody); 
 
        var links = $(".image a.link");
 
        
        
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
           
            return;
        }
      
        const embed = new discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle("__**IMAGES**__")
        .setImage( urls[0] );
 
       
        message.channel.send( embed );
    });
 
}
}


exports.help = {
    name : "image",
    usage: "gives image"
}