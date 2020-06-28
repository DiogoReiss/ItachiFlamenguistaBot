const Discord = require('discord.js');
const client = new Discord.Client();

const littleGuy = require('./src/littleGuy');
const simpleAnswers = require('./src/simpleAnswers');
const calculatePing = require('./src/calculatePing');
const config = require('./data/configBot/botProps');

client.login(config.token);


client.on('ready', () => {
    console.log(`To on caraio! ${client.user.tag}`);
    client.user.setActivity('Comendo o cu de curioso!')
    const embed = new Discord.MessageEmbed()
    .setTitle('COMEÇOU A PUTARIA ')
    .setColor(0xff0000)
    .setThumbnail("https://pbs.twimg.com/media/EHm2zoIXUAI0ttU.jpg")
    .setDescription('Mangekyō Sharingan, to on nessa bagaça!');
    var generalChannel = client.channels.cache.get("695102883087253507").send(embed)
});


client.on('guildMemberAdd', member => {
    console.log(member)
    var newMemberAvatar = member.user.displayAvatarURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`Bem vindo! ${member}`)
    .setColor(0xff0000)
    .setThumbnail(`${newMemberAvatar}`)
    .setDescription('O ultimo que entrou mama o bonde');
    var message = client.channels.cache.get("695102883087253507").send(embed)
})

client.on('message', msg => {
    if (msg.content.toLowerCase() === `ping`) {
        
        return calculatePing(msg);
    }
    if (msg.content.toLowerCase() === `${config.prefix}bot`) {
        
        return simpleAnswers(msg);
    }
    if (msg.content.toLowerCase() === `${config.prefix}anao`) {
        
        return littleGuy(msg);
    }
});
