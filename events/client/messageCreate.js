const {Collection} = require("discord.js"); //import le bot et les collections
const {
    noMention,
    noArgs,
    noPermissions,
} = require("../../utils/functions/failFunction");
const {DEFAULTSETTINGS} = require('../../config.js')

module.exports = async (client, messageCreate) => {
    const prefix = DEFAULTSETTINGS.prefix;

    //si l'author est le bot
    if (messageCreate.author.bot) return;

    // si ça ne commence pas par le préfix
    if (!messageCreate.content.startsWith(prefix)) return;

    //Remove prefix et divise str en array pour séparer les arguments
    const args = messageCreate.content.slice(prefix.length).split(/ +/);

    //Sépare en array les éléments et les lower case
    const commandName = args.shift().toLowerCase();

    //crée user pour vérification s'il y a une mention
    const user = messageCreate.mentions.users.first();

    //stock la commande ou aliases dans command
    let command = '';
    command =
        client.commands.get(commandName) ||
        client.commands.find(
            (cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName)
        )

    //si la commande n'existe pas ou s'il n'y a pas d'argument
    if (!command) return messageCreate.channel.send(`La commande n'existe pas.`);


    //If permissions: true
    if (
        command.help.permissions &&
        !messageCreate.member.permissions.has("BAN_MEMBERS")
    ) {
        return noPermissions(messageCreate, command, prefix);
    }

    //If hasMention: true
    if (command.help.hasMention && !user) {
        return noMention(messageCreate, command, prefix);
    }

    //If args: True
    if (command.help.args && !args.length) {
        return noArgs(messageCreate, command, prefix);
    }

    command.run(client, messageCreate, commandName, args, prefix); //run la commande
};
