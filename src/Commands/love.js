const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "love",
    description: "Bot will love someone",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        var tag = args[1]

        if (!tag) return message.reply("Please enter a name or a mention.")
       
        if (tag.startsWith("<@!") && tag.endsWith(">")) {
            tag = client.users.cache.get(tag.substring(3, tag.length - 1)).username
        }        

        const cusses = [
            `Love you ${tag}`,
            `${tag} <3 <3 <3`,
            `${tag} is my baby ❤️`,
            `*Hugs ${tag}*`,
            `*Pets ${tag}*`,
            `lOVE YOU ${tag}`,
        ]

        var rng = Math.floor(Math.random() * cusses.length)

        message.channel.send(cusses[rng])
    }
})