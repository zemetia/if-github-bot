const Discord = require("discord.js")

const Command = require("../Structures/Command.js")

const fs = require("fs")
module.exports = new Command({
    name: "help",
    description: "Shows commands and functions",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed()

        fs.readdirSync("./src/Commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const command_name = require(`./${file}`)
                embed.addField(`\`%${command_name.name}\``, command_name.description)
            })
        embed.setTitle("Cuss Bot Commands")
            .setColor("AQUA")
        message.channel.send({ embeds: [embed]})
    }
})