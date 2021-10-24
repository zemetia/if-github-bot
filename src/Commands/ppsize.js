const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "ppsize",
    description: "How long your pp is.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const rng = Math.floor(Math.random() * 101)
        message.channel.send(`\`\`\`Your dick size is ${rng} cm.\`\`\``)
    }
})