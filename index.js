const Discord = require("discord.js");
const client = new Discord.Client();

//ready -> bot is online!
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("Offline");
});

client.on('message', message => {
    if (message.content === 'ping') {
        return message.channel.send("Pong!");
    }
});

client.login(process.env.BOT_TOKEN);
