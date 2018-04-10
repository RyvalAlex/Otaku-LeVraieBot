const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas un channel NSFW.")

    var rand =  Math.floor(Math.random() * NUM_HENTAI)
    
var EntaiEmbed = new Discord.RichEmbed()
    .setColor("#689AFB")
    .setImage(hentai[rand].link)
    .setFooter("Yamete Kudasai");

    message.channel.send(EntaiEmbed)
        
}
const NUM_HENTAI = 18;
// Hug Gifs
var hentai = [
  {link:'https://78.media.tumblr.com/b44a83bf04c6bd645c4b190e5b3642e5/tumblr_o4oeteF6Ag1rmzw91o1_540.gif'},
  {link:'https://78.media.tumblr.com/faf07b197cc4b2c132a7805f778c1adc/tumblr_oig0m0JZiF1vzttmyo1_500.gif'},
  {link:'https://78.media.tumblr.com/d1f3015b7c8d1d4eae41839cb4350b0f/tumblr_ni0fujlzAK1r6i9rfo1_500.gif'},
  {link:'https://78.media.tumblr.com/c5290b57543bcdcabb81aa062fd52a2b/tumblr_n0wjrz0YTD1sjyos5o1_500.gif'},
  {link:'https://78.media.tumblr.com/3f72df829be46c7a331cd92b511e9c0b/tumblr_ntnv47pO0g1s5k1uro1_r1_500.gif'},
  {link:'https://78.media.tumblr.com/558c773ef3be34b0256a53fdcc915635/tumblr_o8fffljCwI1ul1tdto1_400.gif'},
  {link:'https://78.media.tumblr.com/3709b5a34148ff4cb0389fddc13c6d3e/tumblr_mvajo4WmZy1svkw9to1_500.gif'},
  {link:'https://78.media.tumblr.com/26bdd65e8f2c831c5adaf4592b277e63/tumblr_oi59cyqblL1vzttmyo8_1280.gif'},
  {link:'https://78.media.tumblr.com/a6d3f001e4765260bd16df5592b59251/tumblr_o7585zecUB1ttgbudo1_1280.gif'},
  {link:'https://78.media.tumblr.com/5328d3e2aaf6f9b4ff3dd41c834806b1/tumblr_otmhezRy0a1wq784vo1_540.gif'},
  {link:'https://78.media.tumblr.com/5b609d8e63898894f0a45c583dc738aa/tumblr_mwcanwyuU71rk78pwo1_1280.gif'},
  {link:'https://78.media.tumblr.com/32a4a7bb64130796db5ebc40d0e39cbc/tumblr_mlzwgznuzC1rmvspko1_500.gif'},
  {link:'https://78.media.tumblr.com/49c0d8d34278a6cd1cfe7030e3eee16a/tumblr_p25vnrzC4R1vkkt9ro1_500.gif'},
  {link:'https://78.media.tumblr.com/ffc0d799d5e600f5aba8918283485d63/tumblr_oattlhu7rK1rwixf9o1_540.gif'},
  {link:'https://78.media.tumblr.com/80109f526792ba47bce7cb1375de7dbd/tumblr_oj965mbXpL1v2hfg0o3_500.gif'},
  {link:'https://78.media.tumblr.com/710e12149b0009cfaffe0944d5515602/tumblr_p29y4nKOks1urpdgno1_540.gif'},
  {link:'https://78.media.tumblr.com/8d174877289df9cbb3b10555303e7a25/tumblr_om43qr3paE1v2hfg0o1_1280.gif'},
  {link:'https://78.media.tumblr.com/95e3447f87b168a61f186cb72de6d8b0/tumblr_ohy3suGiOy1v2hfg0o4_1280.gif'}
];

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hentai',
    description: ':smirk: Envoie de gif de hentai :smirk:',
    usage: 'hentai'
  };