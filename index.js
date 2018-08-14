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
        return message.channel.send({
            files: [
                "./jm.jpg"
            ]
        });
    }
);

client.on('message', message => {
    if (message.content === '!github')
        return message.channel.send('You cand find my github project here!\n-> https://github.com/Aid3n/bot-discord-in-js <-');
    }
);

client.on("guildMemberAdd", (member) => { 
    let guild = member.guild; 
    let memberTag = member.user.tag; 
    if(guild.systemChannel){
        guild.systemChannel.send(new Discord.RichEmbed() 
        .setTitle("A new user joined")
        .setDescription(memberTag + " has joined the guild")
        .setThumbnail(member.user.displayAvatarURL) 
        .addField("Members now", member.guild.memberCount)
        .setTimestamp()
        );
    }
    });


client.login(process.env.BOT_TOKEN);
