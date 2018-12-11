const Discord = require("discord.js");
const client = new Discord.Client();

const javi_ap = require ("./cmd/javi_ap.js");
const ping = require ("./cmd/ping.js");
const git = require ("./cmd/git.js");
const wima = require ("./cmd/wima.js");
const like = require ("./cmd/react/like.js")
const dislike = require ("./cmd/react/dislike.js")
const rt = require ("./cmd/react/rt.js")
const krilin = require ("./cmd/krilin.js");

//ready
client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("X-01");
});
//!github
client.on("message", (message) => {
    if(message.content == "!github"){
        const embed = new Discord.RichEmbed()
        .setColor('f4eb42')
        .setThumbnail('https://media.discordapp.net/attachments/478509969684299786/478509983659720704/AR01..jpg?width=480&height=480')
        .setTitle("Aid3n/bot-discord-in-js")
        .setURL("https://github.com/Aid3n/bot-discord-in-js")
        .setDescription("You cand find my github project here!")
        .setAuthor('Aiden', 'https://media.discordapp.net/attachments/478509969684299786/478999662053949451/38618692.jpg', 'https://github.com/Aid3n')
        message.channel.sendEmbed(embed);
        }
})
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
//
client.on('message', message => {
	if (message.content === 'x45/33' ) {
		return message.channel.send("puto");
	}
});
//!hello
client.on('message', message => {
    if (message.content === '!hello') {
        return message.channel.send("Hello!");
    }
});
//
client.on('message', message => {
	if (message.content === '!pene') {
		return message.channel.send("https://media.istockphoto.com/illustrations/angry-penis-funny-comic-cartoon-illustration-illustration-id469692444");
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

//reacts: !like, !dislike, !rt
client.on('message', message => {
    if (message.content === '!like'){
            like(message);
        }
})
client.on('message', message => {
    if (message.content === '!dislike'){
            dislike(message);
        }
})
client.on('message', message => {
    if (message.content === '!rt'){
            rt(message);
        }
})

//!krilin
client.on("message", (message) => {
    if(message.content === "!krilin"){
            krilin(message);
        }
})

const embed1 = require ("./cmd/embed1.js");
client.on("message", (message) => {
    if(message.content == "!embed1"){
            embed1(message);
        }
})

//on join
client.on("guildMemberAdd", (member) => { 
    let guild = member.guild; 
    let memberTag = member.user.tag; 
    if(guild.systemChannel){
        guild.systemChannel.send(new Discord.RichEmbed() 
        .setTitle("Usuario nuevo!")
        .setColor('f4eb42')
	.setDescription(memberTag + " ha entrado al servidor!")
        .setThumbnail(member.user.displayAvatarURL) 
        .addField("Número de miembros", member.guild.memberCount)
        .setTimestamp()
        );
    }
});


client.login(process.env.BOT_TOKEN);
