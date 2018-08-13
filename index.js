const Discord = require("discord.js");
const client = new Discord.Client();

//ready -> bot is online!
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("X-01");
});

client.on('message', message => {
    if (message.content === 'ping') {
        return message.channel.send("Pong!");
    }
});

client.on('message', message => {
    if (message.content === 'what is my avatar') {
        return message.channel.send(message.author.avatarURL);
    }
});

client.login(process.env.BOT_TOKEN);
