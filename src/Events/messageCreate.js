const Event = require("../Structures/Event.js")

module.exports = new Event("messageCreate", async (client, message) => {
    if (message.author.id == '900728999104348200') return;
    if (message.content === "no u") return message.reply("no u")
    
    let args = message.content.split(/ +/)
    if (args[0][0] != client.prefix) {
        for (let i = 0; i < args.length; i++) {
            if (args[i] == "damn" || args[i] == "Damn") {
                message.reply(args[i])
                return
            }
        }
    }
    if (!message.content.startsWith(client.prefix)) return;

    args[0] = args[0].substring(client.prefix.length)

    const command = client.commands.find(cmd => cmd.name == args[0])

    if (!command) {
        const msg = await message.reply(`${args[0]} is not a valid command!`)
        setTimeout(() => msg.delete(), 5000)
        return
    }

    const permission = message.member.permissions.has(command.permission)
    
    if (!permission) return message.reply(`You do not have permission to use the ${args[0]} command`)
    command.run(message, args, client)
})