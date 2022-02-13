const { MessageEmbed } = require("discord.js");


function failEmbedMsg(command, prefix, failMsg) {
    const failEmbed = new MessageEmbed()
        .setColor("#36393F")
        .setTitle(`**REPORT** : \`${command.help.name}\``)
        .setDescription(failMsg)
        .addField(
            "Utilisation",
            command.help.usage
                ? `${prefix}${command.help.name} ${command.help.usage}`
                : `${prefix}${command.help.name}`,
            true
        );
    if (command.help.aliases.length > 1) {
        failEmbed.addField(
            "Alias",
            `${command.help.aliases.join(", ")}`,
            true
        );
    }
    return failEmbed;
}

module.exports.noMention = (messageCreate, command, prefix) => {
    let failMsg = `La commande \`${command.help.name}\` demande une mention (@Anas).`;
    messageCreate.channel.send({embeds : [failEmbedMsg(command, prefix, failMsg)]});
};

module.exports.noArgs = (messageCreate, command, prefix) => {
    let failMsg = `La commande \`${command.help.name}\` demande un argument.`;
    messageCreate.channel.send({embeds : [failEmbedMsg(command, prefix, failMsg)]});
};

module.exports.noPermissions = (messageCreate, command, prefix) => {
    let failMsg = `Tu n'as pas les droits pour utiliser la commande \`${command.help.name}\`.`;
    messageCreate.channel.send({embeds : [failEmbedMsg(command, prefix, failMsg)]});
};