const { MessageAttachment } = require("discord.js")
const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "moyaibutgru",
    description: "moyai but gru",
    permission: "SEND_MESSAGES",
    async run(message) {
        message.channel.send("https://cdn.discordapp.com/attachments/890245227850371144/901706187937054720/moyaibutgru.png")
    }
})