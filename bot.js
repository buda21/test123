const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533668174227570708")
setInterval(function() {
channel.send(`Hi Im Moon And im faker and GG easy Ez`);
}, 30)
})

client.login(process.env.BOT_TOKEN);