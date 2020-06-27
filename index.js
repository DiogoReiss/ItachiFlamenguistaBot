const Discord = require('discord.js');
const client = new Discord.Client();
const { RichEmbed} = require('discord.js');
const config = require('./data/configBot/botProps')
client.login(config.token);


client.on('ready', () => {
    console.log(`To on caraio! ${client.user.tag}`);
    client.user.setActivity('Comendo o cu de curioso!')
    const embed = new Discord.MessageEmbed()
    .setTitle('COMEÇOU A PUTARIA ')
    .setColor(0xff0000)
    .setImage("https://pbs.twimg.com/media/EHm2zoIXUAI0ttU.jpg")
    .setDescription('Mangekyō Sharingan, to on nessa bagaça!');
    var generalChannel = client.channels.cache.get("695102883087253507").send(embed)
});


client.on('guildMemberAdd', member => {
    var newMemberAvatar = member.user.displayAvatarURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`Bem vindo! ${member}`)
    .setColor(0xff0000)
    .setThumbnail(`${newMemberAvatar}`)
    .setDescription('O ultimo que entrou mama o bonde');
    var message = client.channels.cache.get("695102883087253507").send(embed)
})

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'ping') {
        msg.channel.send('LETYCIA OTARIA');
    }
    if (msg.content.toLowerCase() === `${config.prefix}bot`) {
        msg.reply('Oi, mô')
    }
    if (msg.content.toLowerCase() === `${config.prefix}anao`) {
        var randomNumber = Math.floor((Math.random() * 10) + 1);
        if (randomNumber < 10) {
            randomNumber = `0${randomNumber}`
        }
        const image = new Discord.MessageAttachment(`./data/littleGuysImages/0${randomNumber}.jpg`)
        msg.channel.send(`Aqui o anão porra!`, image)
        console.log(`Aqui o anão porra!`, image)
    }
});
