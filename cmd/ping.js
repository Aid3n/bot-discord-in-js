module.exports = (message) => {
    message.channel.send("Pong!").catch(e => console.log(e));
}