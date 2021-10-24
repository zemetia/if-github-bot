const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "gaypercentage",
    description: "Shows the percentage of how much 2 guys love eachother.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if (args.length > 3) return message.reply("You have passed too many arguments.")
        var user1 = args[1]
        var user2 = args[2]

        if (!user1) return message.reply("Please enter the name of the first person.")
        if (!user2) return message.reply("Please enter the name of the secods person.")
        
        if (user1.startsWith("<@!") && user1.endsWith(">")) {
            user1 = client.users.cache.get(user1.substring(3, user1.length - 1)).username
        }     
        if (user2.startsWith("<@!") && user2.endsWith(">")) {
            user2 = client.users.cache.get(user2.substring(3, user2.length - 1)).username
        }
        var msg = await message.reply("```Calculating...```")
        setTimeout(() => {
            msg.edit(`\`\`\`${user1} and ${user2}'s gay percentage: 100%\`\`\``),
            15000
        })
    }

})