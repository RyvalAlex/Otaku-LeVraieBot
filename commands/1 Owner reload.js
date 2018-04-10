exports.run = (client, message, args) => {
    let command;
    if (client.commands.has(args[0])) {
      command = args[0];
    } else if (client.aliases.has(args[0])) {
      command = client.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`Je ne trouve pas la commande: ${args[0]}`);
    } else {
      message.channel.send(`Chargement de: ${command}`)
        .then(m => {
          client.reload(command)
            .then(() => {
              m.edit(`La commande: ${command}, à bien été chargée`);
            })
            .catch(e => {
              m.edit(`La commande: ${command}\n\`\`\`${e.stack}\`\`\`, n'as pas été chargée`);
            });
        });
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'reload',
    description: 'Recharge une commande modifiée',
    usage: 'reload <nom de la commande>'
  };