const Discord = require("discord.js");
const client = new Discord.Client();

const javi_ap = require ("./cmd/javi_ap.js");
const ping = require ("./cmd/ping.js");
const git = require ("./cmd/git.js");
const wima = require ("./cmd/wima.js");

//ready
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("X-01");
});
//!github
client.on("message", (message) => {
    if(message.content == "!github"){
             git(message);
        }
});
//!ping
client.on("message", (message) => {
	if(message.content == "!ping"){
			ping(message);
		}
});
//what is my avatar
client.on("message", (message) => {
    if(message.content == "what is my avatar"){
            wima(message);
        }
})
//!hello
client.on('message', message => {
    if (message.content === '!hello') {
        return message.channel.send("Hello!");
    }
});
//aquech
client.on('message', message => {
    if (message.content === 'aquech') {
        return message.channel.send("<@335796011194777611> mongolo vete al maincra");
    }
});
//@Subject X-01
client.on('message', message => {
    if (message.content === '<@455725168556245003>') {
        return message.channel.send("Mi prefijo aquí es _**!**_");
    }
});

//javi aprueba
client.on("message", (message) => {
    if(message.content == "javi aprueba"){
            javi_ap(message);
        }
})

//on join
client.on("guildMemberAdd", (member) => { 
    let guild = member.guild; 
    let memberTag = member.user.tag; 
    if(guild.systemChannel){
        guild.systemChannel.send(new Discord.RichEmbed() 
        .setTitle("Usuario nuevo!")
        .setDescription(memberTag + " ha entrado al servidor!")
        .setThumbnail(member.user.displayAvatarURL) 
        .addField("Número de miembros", member.guild.memberCount)
        .setTimestamp()
        );
    }
    });


client.login(process.env.BOT_TOKEN);
