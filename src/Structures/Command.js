const Discord = require("discord.js")

const Client = require("./Client.js")

/**
 * 
 * @param {Discord.Message} message 
 * @param {string[]} args 
 * @param {Client} clients 
 */
function RunFunction(message, args, clients) {}

class Command {
    /**
     * @typedef {{name: string, description: string, permission: Discord.PermissionString, run: function}} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.name = options.name
        this.description = options.description
        this.permission = options.permission
        this.run = options.run
    }
}

module.exports = Command