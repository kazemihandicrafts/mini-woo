bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, messages.welcome);
});
