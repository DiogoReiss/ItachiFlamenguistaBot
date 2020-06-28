const Discord = require('discord.js');

var calculatePing = (msg) => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Calculando o Ping!')
    .setColor(0xff0000)


  msg.channel.send(embed).then(m => {
    var ping = m.createdTimestamp - msg.createdTimestamp
    var modifiedEmbed = new Discord.MessageEmbed()
    .setTitle('Calculando o Ping!')
    .setColor(0xff0000)
    .setDescription(`O seu ping é de: ${ping}ms`)

    m.edit(modifiedEmbed)
  })
}

module.exports = calculatePing;