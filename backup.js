const Discord = require('discord.js');
const client = new Discord.Client();

const word = 'snacky';

let words = [];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// use .then() to handle this shit

client.on('message', msg => {

  let sendMessage = (message) => {
    let parsedMessage = message.join(' ');
    msg.channel.send(parsedMessage);
  };

  let bannerize = (wordLetters) => {
    let string = [];
    wordLetters.map((wordSet, i1) => {
      wordSet.map((word, i2) => {
        string.push(`:regional_indicator_${word}:`);
      });
    });
    sendMessage(string);
  };

  let prepMessage = () => {
    let wordLetters = [];
    words.shift();
    msg.channel.send('```res: The array has been logged in the terminal.```');
    words.map((word) => {
      wordLetters.push([...word]);
    });
    bannerize(wordLetters);
  };

  if (msg.content.split(' ', 1)[0] === '!travy') {
    msg.channel.send('```res: success!```');

    words = msg.content.toLowerCase().split(' ');
    prepMessage();
  };
});

client.login('NjA0MDAyNDcyODA1MTMwMjQ.DKLIfw.ou_nCU7X9yneIIpULaPlUFmYimU');
