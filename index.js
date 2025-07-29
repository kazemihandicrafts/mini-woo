const messages = require('./messages');
const TelegramBot = require('node-telegram-bot-api');
const messages = require('./messages');

// توکن ربات از BotFather
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start' || text === 'سلام') {
    bot.sendMessage(chatId, messages.welcome, {
      reply_markup: {
        keyboard: [
          ['🛍️ مشاهده محصولات'],
          ['📦 پیگیری سفارش'],
          ['💬 ارتباط با ما']
        ],
        resize_keyboard: true
      }
    });
  }
});
