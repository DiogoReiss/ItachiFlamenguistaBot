const Discord = require('discord.js');

var littleGuy = (msg) => {
  var randomNumber = Math.floor((Math.random() * 14) + 1);
  if (randomNumber < 10) {
      randomNumber = `0${randomNumber}`
  }
  const image = new Discord.MessageAttachment(`./data/littleGuysImages/0${randomNumber}.jpg`)
  msg.channel.send(`Aqui o anão porra!`, image)
  console.log(`Aqui o anão porra!`, image)
}

module.exports = littleGuy 