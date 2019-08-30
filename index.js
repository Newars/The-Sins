const Discord = require("discord.js")
const client = new Discord.Client()
const config = require ("./config.json")

let prefix = "+"

client.login(config.token)

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("online")
    client.user.setActivity("faire des parties personnalisé", {type: 1})
})

client.on("message", message => {
    if(message.content === prefix + "ping") {
        message.reply("Pong !")
    }

    if(message.content === "deux") {
        message.channel.send("trois")
    }
})