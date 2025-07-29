const TelegramBot = require('node-telegram-bot-api');
const messages = require('./messages');
const token = process.env.TELEGRAM_TOKEN || 'توکن‌ات‌از‌BotFather';

const bot = new TelegramBot(token, { polling: true });

// دکمه‌های اصلی منوی کیبورد
const mainKeyboard = {
  reply_markup: {
    keyboard: [
      ['🛍️ مشاهده محصولات'],
      ['📦 پیگیری سفارش'],
      ['📞 ارتباط با ما']
    ],
    resize_keyboard: true
  }
};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, messages.welcome, mainKeyboard);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '🛍️ مشاهده محصولات') {
    bot.sendMessage(chatId, messages.categories);
  } else if (text === '📦 پیگیری سفارش') {
    bot.sendMessage(chatId, 'برای پیگیری سفارش، لطفاً شماره سفارش خود را ارسال نمایید.');
  } else if (text === '📞 ارتباط با ما') {
    bot.sendMessage(chatId, messages.contact);
  }
});
