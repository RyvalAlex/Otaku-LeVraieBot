const config = require('../config.json');
const Discord = require('discord.js');
exports.run = (client, message, params) => {
  if (!params[0]) {
    
  var HelpEmbed = new Discord.RichEmbed()
  .setDescription(`Utilise ${config.prefix}help <commande> pour les infos de la commande`)
  .setColor("#689AFB")
  .addField("Administration", "``ban``, ``unban``, ``lockdown``")
  .addField("Modération", "``purge``, ``kick``, ``warn``")
  .addField("Information", "``botinfo``, ``serverinfo``, ``report``, ``ping``, ``otaku``, ``invite``")
  .addField("Social", "``hug``, ``cry``, ``kiss``, ``punch``")
  .addField("Fun", "``avatar``, ``pollc``, ``8ball``, ``say``,``google``, ``youtube``")
  .setFooter("๖̶̶̶ζ͜͡Bot par Kawaii Alex ͜͡ζ̶̶̶๖");

  message.channel.send("```Liste des commandes envoyé en mp```").then(msg => {msg.delete(5000)});
  message.author.send(HelpEmbed);

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, {code:'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'aide'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Montre tout les commandes existantes sur le bot',
  usage: 'help [command]'
};