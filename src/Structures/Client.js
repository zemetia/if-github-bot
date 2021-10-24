const Discord = require("discord.js")

const Command = require("./Command.js")

const Event = require("./Event.js")

const { Intents } = require("discord.js")

const config = require("../Data/config.json")

const fs = require("fs")

class Client extends Discord.Client {
    constructor() {
        super({
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
            ]
        })
        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection()

        this.prefix = config.prefix
    }

    start(TOKEN) {
        fs.readdirSync("./src/Commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/${file}`)
                console.log(`Command ${command.name} loaded`)
                this.commands.set(command.name, command)
            })

        fs.readdirSync("./src/Events")
                /**
                 * @type {Event}
                 */
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const event = require(`../Events/${file}`)
                console.log(`Event ${event.event} loaded`)
                this.on(event.event, event.run.bind(null, this))
            })
        this.login(TOKEN)
    }
}

module.exports = Client