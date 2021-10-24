const Discord = require("discord.js")

const Command = require("../Structures/Command.js")

const cheerio = require("cheerio")

const request = require("request")

module.exports = new Command({
    name: "info",
    description: "Memberi informasi tentang satu mahasiswa IF'21",
    async run(message, args, client) {
        const nrp = args[1]
        request({
            method: "GET",
            url: "http://informatika.zymerweb.rf.gd/api.php?nrp=5025211031"
            },
            (err, res, body) => {
                if (err) return console.error(err)
        
                let $ = cheerio.load(body)
        
                let bodys = $("body")
                
                console.log(bodys.text())
            }
        )
        const embed = new Discord.MessageEmbed()
        
    }
})