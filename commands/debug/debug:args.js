const { MESSAGES } = require("../../utils/constants/constants");

module.exports.run = (client, messageCreate, commandName, args, prefix) => {
    messageCreate.channel.send("Le test \'Debug:args\' n'a pas provoqué d'erreur.");
};

module.exports.help = MESSAGES.COMMANDS.DEBUG.DEBUGARGS;