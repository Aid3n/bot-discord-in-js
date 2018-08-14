module.exports = (message) => {
    message.react('👎').catch(e => console.log(e));
}