const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "clear",
    description: "Clears a number of messages",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {
        const amount = args[1]

        if (!amount) return message.reply(`${amount == undefined ? "Nothing" : amount} is not a valid number.`)

        const amountParsed = parseInt(amount)

        message.channel.bulkDelete(amountParsed)

        const msg = await message.channel.send(`Cleared ${amountParsed} messages.`)

        setTimeout(() => msg.delete(), 5000)
    }
})