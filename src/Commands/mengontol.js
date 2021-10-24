const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "mengontol",
    description: "mengontol",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send("https://cdn.discordapp.com/attachments/890245227850371144/901702547037904916/831566549554167879.png")
    }
})