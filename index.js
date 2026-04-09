const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = 'TOKEN_DARI_BOTFATHER'; // GANTI INI

app.use(express.json());

// Telegram API
const telegramApi = axios.create({
baseURL: `https://api.telegram.org/bot${TOKEN}`
});

// Webhook endpoint
app.post('/webhook', async (req, res) => {
const { message } = req.body;
if (!message) return res.sendStatus(200);

const chatId = message.chat.id;
const text = message.text;

if (text === '/start') {
await telegramApi.post('/sendMessage', {
chat_id: chatId,
text: '👋 Halo Juragan! Hermes siap!'
});
}

res.sendStatus(200);
});

// Health check
app.get('/', (req, res) => {
res.json({ message: 'Hermes running!', telegram: TOKEN ? 'connected' : 'disconnected' });
});

app.listen(PORT, () => {
console.log(`🚀 Server: http://localhost:${PORT}`);
console.log('🤖 Telegram bot active');
});
