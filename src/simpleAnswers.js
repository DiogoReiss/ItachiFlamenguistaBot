const Discord = require('discord.js');
const Answer = require('../data/hiBotData')

var hiBot = (msg) => {
  msg.reply(Answer[Object.keys(Answer)[Math.floor(Math.random()*Object.keys(Answer).length)]])
}


module.exports = hiBot;