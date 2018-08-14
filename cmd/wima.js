module.exports = (message) => {
    message.channel.send('This is your avatar! \n'+message.author.avatarURL).catch(e => console.log(e));
}