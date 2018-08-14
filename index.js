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

//what is my avatar -> avatar url
client.on('message', message => {
    if (message.content === 'what is my avatar')
        return message.channel.send('This is your avatar! ' +message.author.avatarURL);
    }
);

client.on('message', message => {
    if (message.content === '!hello') {
        return message.channel.send("Hello!");
    }
});

client.on('message', message => {
    if (message.content === 'aquech') {
        return message.channel.send("<@335796011194777611> mongolo vete al maincra");
    }
});

client.on('message', message => {
    if (message.content === '<@455725168556245003>') {
        return message.channel.send("Mi prefijo aquí es _**!**_");
    }
});

client.on('message', message => {
    if (message.content === 'javi aprueba')
        return message.channel.send('Javi guapo', {
            files: [
                "./files/jm.jpg"
            ]
        });
    }
);

client.login(process.env.BOT_TOKEN);
