const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const config = require('../config.json');
exports.run = (client, message, args) => {

  if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
    message.reply ("Tu n'as pas la permission").then(msg => {msg.delete(5000)});
    return;
  }
  else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
    message.reply ("Je n'es pas la permission").then(msg => {msg.delete(5000)});
    return;
  }

  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = message.guild.channels.find('name', 'otaku-logs');
  if (!modlog) return message.reply('I cannot find a ``otaku-logs`` channel').then(msg => {msg.delete(5000)});
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').then(msg => {msg.delete(5000)}).catch(console.error);

  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input.`;
  const embed = new RichEmbed()
  .setColor("#689AFB")
  .setTimestamp()
  .setDescription(`**Action:** Warn\n**Utilisateur warn:** ${user.tag}\n**Warn par:** ${message.author.tag}\n**Raison:** ${reason}`)
  .setFooter(`Warn`);
  return message.guild.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};