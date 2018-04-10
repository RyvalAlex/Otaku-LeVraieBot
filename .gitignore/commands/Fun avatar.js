const Discord = require("discord.js");

exports.run = (client, message) => {

    let AvatarEmbed = new Discord.RichEmbed()
    .setDescription("Avatar de " + message.author.username)
    .setColor("#689AFB")
    .setImage(message.author.avatarURL)

    message.channel.send(AvatarEmbed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Donne votre avatar ( et non celui d\'un autre )',
  usage: 'avatar'
};