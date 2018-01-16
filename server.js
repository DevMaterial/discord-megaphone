const Discord = require('discord.js');
const client = new Discord.Client();

let words = [];

var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  let sendMessage = (message) => {
    let parsedMessage = message.join(' ');
    msg.channel.send(parsedMessage);
  };

  let bannerize = (wordLetters) => {
    let num = /([0-9])/;
    let alph = /([a-z])/;
    let string = [];
    wordLetters.map((wordSet, i1) => {
      wordSet.map((word, i2) => {
        if (word === ' ') {
          string.push(`:small_blue_diamond:`);
        } else if (alph.test(word)) {
          string.push(`:regional_indicator_${word}:`);
        } else if (num.test(word)) {
          for (var i = 0; i < digits.length; i++) {
            if (digits[i] === word) {
              string.push(`:${numbers[i]}:`);
              break;
            }
          }
        }
      });
    });
    sendMessage(string);
  };

  let prepMessage = () => {
    let wordLetters = [];
    words.shift();
    words.map((word) => {
      wordLetters.push([...word]);
    });
    bannerize(wordLetters);
  };

  if (msg.content.split(' ', 1)[0] === '!b') {
    let testReg = /[^a-zA-z0-9\s]/g;
    let testMsg = msg.content.replace(/!b /g, '');
    if (testReg.test(testMsg)) {
      return false;
    } else {
      words = msg.content.toLowerCase().split(/(\S+\s+)/).filter(n => n);
      prepMessage();
    }
  }
});

client.login('NjA0MDAyNDcyODA1MTMwMjQ.DKLIfw.ou_nCU7X9yneIIpULaPlUFmYimU');
