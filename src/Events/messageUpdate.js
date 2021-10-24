const { run } = require("../Commands/lovepercent")
const Event = require("../Structures/Event.js")

module.exports = new Event("messageUpdate", async (client, message1, message2) => {
    if (message1.author.id == "900728999104348200") return;
})