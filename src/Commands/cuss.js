const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "cuss",
    description: "Bot will cuss at someone",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        var tag = args[1]

        if (!tag) return message.reply("Please enter a name or a mention.")
        
        if (tag.startsWith("<@!") && tag.endsWith(">")) {
            tag = client.users.cache.get(tag.substring(3, tag.length - 1)).username
        }
    
        const cusses = [
            `Fuck you ${tag}`,
            `${tag} is a piece of shit.`,
            `Kontol ${tag}`,
            `Babi lu ${tag}`,
            `Anjing banget ${tag}`,
            `Jancok raimu ${tag}`,
        ]

        var rng = Math.floor(Math.random() * cusses.length)

        message.channel.send(cusses[rng])
    }
})