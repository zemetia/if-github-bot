console.clear()

const Client = require("./Structures/Client.js")

const client = new Client()

require('dotenv').config()

client.start(process.env.TOKEN)

// console.clear()

// import DiscordJS, { Intents } from 'discord.js'
// import dotenv from 'dotenv'
// import fs from 'fs'
// dotenv.config()

// fs.readdirSync('')

// const client = new DiscordJS.Client({
//     intents: [
//         Intents.FLAGS.GUILDS,
//         Intents.FLAGS.GUILD_MESSAGES
//     ]
// })

// client.on("ready", () => {
//     console.log('The bot is ready')

//     const guildId = '331800619692195840'
//     const guild = client.guilds.cache.get(guildId)

//     let commands

//     if (guild) {
//         commands = guild.commands
//     } else
//     {
//         commands = guild.application?.commands
//     }

//     commands?.create({
//         name: 'ping',
//         description: 'bot will reply with pong',
//     })

//     commands?.create({
//         name: 'add',
//         description: 'Add 2 nums',
//         options: [{
//                 name: 'num1',
//                 description: 'first number',
//                 required: true,
//                 type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
//             },
//             {
//                 name: 'num2',
//                 description: 'second number',
//                 required: true,
//                 type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
//             },
//         ], 
//     })
// })

// client.on("interactionCreate", async (interaction) => {
//     if (!interaction.isCommand) {
//         return
//     }

//     const { commandName, options } = interaction

//     if (commandName === 'ping') {
//         interaction.reply({
//             content: 'pong',
//             ephemeral: 'true',
//         })
//     }

//     else if (commandName === 'add') {
//         const num1 = options.getNumber('num1') || 0
//         const num2 = options.getNumber('num2') || 0

//         await interaction.deferReply({
//             ephemeral: false,
//         })

//         await new Promise((resolve) => setTimeout(resolve, 5000))

//         await interaction.reply({
//             content: `Sum is ${num1 + num2}`,
//             ephemeral: true,
//         })
//     }
// })

// client.on("messageCreate", (message) => {
//     if (message.content === 'ping') {
//         message.reply({
//             content: 'pong',
//         })
//     }
// })

// client.login(process.env.TOKEN)