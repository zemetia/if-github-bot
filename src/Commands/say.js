const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "say",
    description: "Bot will say a message",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const msg = args.splice(1, args.length).join(" ")
        message.channel.send(msg)
        message.delete()
    }

})