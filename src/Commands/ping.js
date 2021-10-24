const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "ping",
    description: "Melihat ping user.",
    async run(message, args, client) {
        message.reply("Mencari ping. . .").then(m => {
            const ping = m.createdTimestamp - message.createdTimestamp
            m.edit(`Ping Anda adalah ${ping} ms`)
        })
    }
})