const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
const config = require('./data/configBot/botProps')
const path = require('path');
//const images = require('./data/littleGuysImages')

client.on('ready', () => {
    console.log(`To on caraio! ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'ping') {
        msg.channel.send('LETICIA OTARIA');
    }
    if (msg.content.toLowerCase() === `${config.prefix}bot`) {
        msg.reply('Oi, mô')
    }
    if (msg.content.toLowerCase() === `${config.prefix}anao`) {
        var randomNumber = Math.floor((Math.random() * 10) + 1);
        if (randomNumber < 10) {
            randomNumber = `0${randomNumber}`
        }
        const image = new MessageAttachment(`./data/littleGuysImages/0${randomNumber}.jpg`)
        msg.channel.send(`Aqui o anão porra!`, image)
        console.log(`Aqui o anão porra!`, image)
    }
});

client.login(config.token);