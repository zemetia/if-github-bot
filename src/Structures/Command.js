class Command {
    constructor (options) {
        this.name = options.name
        this.description = options.description
        this.run = options.run
    }
}

module.exports = Command