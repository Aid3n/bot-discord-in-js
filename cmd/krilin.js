module.exports = (message) => {
    message.channel.send('Ay mi niño ❤', {
            files: [
                "./files/krilin.jpg"
            ]
        }).catch(e => console.log(e));
}
