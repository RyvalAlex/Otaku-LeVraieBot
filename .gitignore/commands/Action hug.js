const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var rand =  Math.floor(Math.random() * NUM_HUG)
    var text = message.content.substring(6)

    var HugEmbed = new Discord.RichEmbed()
    .setColor("#689AFB")
    .setImage(hug[rand].link)
    .setFooter("hug");

    message.channel.send(`<@${message.author.id}> fait un calîn à ${text}`)
    message.channel.send(HugEmbed)
        
}
const NUM_HUG = 7;
// Hug Gifs
var hug = [
  {link:'https://cdn.weeb.sh/images/BJF5_uXvZ.gif'},
  {link:'https://cdn.weeb.sh/images/rJ_slRYFZ.gif'},
  {link:'https://cdn.weeb.sh/images/r1bAksn0W.gif'},
  {link:'https://cdn.weeb.sh/images/r1G3xCFYZ.gif'},
  {link:'https://cdn.weeb.sh/images/Hy4hxRKtW.gif'},
  {link:'https://cdn.weeb.sh/images/ryPix0Ft-.gif'},
  {link:'https://cdn.weeb.sh/images/SJByY_QwW.gif'}
];
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hug',
    description: 'Pour faire des calîns au personne que vous souhaitez',
    usage: 'hug [mention ou mot]'
  };