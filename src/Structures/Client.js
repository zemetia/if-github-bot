const Discord = require("discord.js")

const { Intents } = require("discord.js")

const config = require("../Data/config.json")

const fs = require("fs")

require("dotenv").config()

class Client extends Discord.Client {
    constructor() {
        super({ 
            intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
            ]
        })
        
        this.commands = new Discord.Collection()

        this.prefix = config.prefix
    }

    start() {
        console.clear()

        fs.readdirSync("./src/Commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const command = require(`../Commands/${file}`)
                console.log(`Command ${command.name} loaded`)
                this.commands.set(command.name, command)
            })
        fs.readdirSync("./src/Events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const event = require(`../Events/${file}`)
                console.log(`Event ${event.event} loaded.`)
                this.on(event.event, event.run.bind(null, this))
            })

        this.login(process.env.TOKEN)
    }
}

module.exports = Client
