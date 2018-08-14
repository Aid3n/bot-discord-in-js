module.exports = (message) => {
    message.channel.send({
            files: [
                "./files/jm.jpg"
            ]
        }).catch(e => console.log(e));
}