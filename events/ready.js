const chalk = require('chalk');
module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgGreen.black(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
  client.user.setActivity(`${client.guilds.size} serveurs || //help || ${client.user.username}`, {type: "WATCHING"});
};