import Discord, { Intents } from "discord.js"

import dotenv from "dotenv"

dotenv.config()

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log("TC21 Bot is Online")
})

client.login(process.env.TOKEN)