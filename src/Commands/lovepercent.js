const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "lovepercentage",
    description: "Shows the percentage of how much 2 people love eachother.",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if (args.length > 3) return message.reply("You have passed too many arguments.")
        var user1 = args[1]
        var user2 = args[2]
        console.log(user1)
        console.log(user2)
        const eranID = "<@!415862138352173057>"
        const gentaID = "<@!707985586643795969>"
        const bamID = "<@!605629091374301213>"
        const nadID = "<@!506824374133719051>"

        if (!user1) return message.reply("Please enter the name of the first person.")
        if (!user2) return message.reply("Please enter the name of the secods person.")

        var rng = Math.floor(Math.random() * 101)

        if (user1 == eranID) {
            if (user2 == gentaID) rng = 100
            else if (user2 == bamID) rng = 0
            else if (user2 == "Nana" || user2 == "nana") rng = "mati lu pedo"
        }

        if (user1 == gentaID) {
            if (user2 == bamID) rng = 100
            else if (user2 = eranID) rng = 100
        }

        if (user1 == nadID || user1 == "Nadya Aurelia" || user1 == "Nadya") rng = "[[Hyperlink Blocked]]"
        if (user2 == nadID || user2 == "Nadya Aurelia" || user2 == "Nadya") rng = "[[Hyperlink Blocked]]"

        if (user1.startsWith("<@!") && user1.endsWith(">")) {
            user1 = client.users.cache.get(user1.substring(3, user1.length - 1)).username
        }     
        if (user2.startsWith("<@!") && user2.endsWith(">")) {
            user2 = client.users.cache.get(user2.substring(3, user2.length - 1)).username
        }
        var msg = await message.reply("```Calculating...```")
        setTimeout(() => {
            msg.edit(`\`\`\`${user1} and ${user2}'s love percentage: ${rng}%\`\`\``),
            15000
        })
    }

})