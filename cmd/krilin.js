module.exports = (message) => {
    message.channel.send('Hay mi niño ❤', {
            files: [
                "./files/krilin.jpg"
            ]
        }).catch(e => console.log(e));
}
