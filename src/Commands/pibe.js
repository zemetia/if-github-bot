const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "pibe",
    description: "Lord Pibe",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send("https://media.discordapp.net/attachments/877218574081597462/877815080421572648/9e961ee9-9cd0-432d-9f31-55051e734c21.gif")
    }
})