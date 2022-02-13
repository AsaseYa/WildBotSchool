const MESSAGES = {
    COMMANDS: {
        DEBUG: {
            DEBUGARGS: {
                name: "debug:args",
                aliases: [
                    "dbargs",
                    "dba"
                ],
                category: "debug",
                description: "Test les args",
                usage: "<ton_arg>",
                args: true,
                hasMention: false,
                permissions: false,
            },
            DEBUGMENTION: {
                name: "debug:mention",
                aliases: [
                    "dbmen",
                    "dbm"
                ],
                category: "debug",
                description: "Test les mentions",
                usage: "<ta_mention>",
                args: false,
                hasMention: true,
                permissions: false,
            },
            DEBUGPERMISSIONS: {
                name: "debug:permissions",
                aliases: [
                    "dbperm",
                    "dbp"
                ],
                category: "debug",
                description: "Test la permission",
                usage: "",
                args: false,
                hasMention: false,
                permissions: true,
            },
        },
        DICE: {
            DICE: {
                name: "dice",
                aliases: [
                    "d",
                    "d2",
                    "d3",
                    "d4",
                    "d5",
                    "d6",
                    "d7",
                    "d8",
                    "d9",
                    "d10",
                    "d11",
                    "d12",
                    "d15",
                    "d20",
                    "d100",
                ],
                category: "dice",
                description: "roll x dice of x (d et dice = d20)",
                usage: "<your_number_of_dice_within_the_limit_of_100>",
                args: false,
                hasMention: false,
                permissions: false,
            },
        },
        MISC: {
            SALUT: {
                name: "salut",
                aliases: ["hello"],
                category: "misc",
                description: "Renvoie un salut",
                usage: "",
                args: false,
                hasMention: false,
                permissions: false,
            },
            USERINFO: {
                name: "userinfo",
                aliases: ["ui", "uinfo"],
                category: "misc",
                description:
                    "Renvoie les infos d'un utilisateur mentionné.",
                usage: "votre_mention",
                args: true,
                hasMention: true,
                permissions: false,
            },
            HELP: {
                name: "help",
                aliases: ["help"],
                category: "misc",
                description:
                    "Renvoie une liste de commande ou les informations sur une seule commande",
                usage: "la_commande_obscure",
                args: false,
                hasMention: false,
                permissions: false,
            },
            GEOFFROY: {
                name: "geoffroy",
                aliases: ["geo"],
                category: "misc",
                description:
                    "Renvoie une quote random de Geoffroy",
                usage: "",
                args: false,
                hasMention: false,
                permissions: false,
            }
        },

    },
};

exports.MESSAGES = MESSAGES;
