const Discord = require('discord.js');
exports.run = (client, message) => {

    message.channel.send('Ping?')
      .then(msg => {

        var PingEmbed = new Discord.RichEmbed()
.setColor("#689AFB")
.addField("Pong !", `${msg.createdTimestamp - message.createdTimestamp}ms`)
.setFooter(`${message.author.username} || Ping`).setTimestamp();

        msg.edit(PingEmbed);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command, vous donne aussi votre ping.',
    usage: 'ping'
  };