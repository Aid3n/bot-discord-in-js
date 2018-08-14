module.exports = (message) => {
    var  embed = new Discord.RichEmbed()
        .setDescription("Hello this is a description")
    message.channel.sendEmbed(embed).catch(e => console.log(e));
}