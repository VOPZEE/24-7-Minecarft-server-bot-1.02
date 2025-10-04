const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'sturgeon.aternos.host', // replace with your server IP
  port: 40359,              // replace if different
  username: 'BotName'       // bot username
});

bot.on('spawn', () => {
  console.log('Bot spawned!');
  
  // Simple AFK loop
  setInterval(() => {
    bot.setControlState('forward', true);
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('forward', false);
      bot.setControlState('jump', false);
    }, 1000);
  }, 5000);
});

bot.on('end', () => {
  console.log('Bot disconnected, reconnecting...');
  bot.connect();
});
