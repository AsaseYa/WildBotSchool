const { MESSAGES } = require("../../utils/constants/constants");

module.exports.run = (client, messageCreate, commandName, args, prefix) => {
    const quotes = ['Hop là', 'Typiquement ...', 'SIGNATURES', 'eh beh', 'Lis la doc'];
    messageCreate.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
};

module.exports.help = MESSAGES.COMMANDS.MISC.GEOFFROY;