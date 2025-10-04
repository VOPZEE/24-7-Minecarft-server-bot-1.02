const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'sturgeon.aternos.host:', // replace with your server IP
    port: 40359,              // replace if different
    username: 'WinDy_Zone'       // bot username
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
    setTimeout(createBot, 5000); // wait 5s, then create a new bot
  });

  bot.on('error', (err) => {
    console.log('Bot error:', err);
  });

  return bot;
}

// Start the bot
createBot();
