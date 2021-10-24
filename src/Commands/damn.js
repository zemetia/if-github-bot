const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "damn",
    description: "damn",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send("https://imgur.com/a/RrUIlfp")
    }
})