const express = require('express');
const { Telegraf } = require('telegraf');

// ⚠️ HARDCODE TOKEN DI SINI (ganti dengan token kamu)
const BOT_TOKEN = '8457591796:AAFxRX0OREr2DpyFmEKw1OWwGrOo-MaK59o';

const bot = new Telegraf(BOT_TOKEN);
const app = express();
app.use(express.json());

bot.start((ctx) => {
ctx.reply('🤖 Hermes Automation Bot Aktif!\n\nCommand:\n/start - Mulai\n/help - Bantuan\n/status - Status sistem');
});

bot.help((ctx) => {
ctx.reply('📚 Command tersedia:\n/start - Mulai bot\n/help - Bantuan\n/status - Cek status');
});

bot.command('status', (ctx) => {
ctx.reply('✅ Hermes Bot Online!\n🟢 Webhook aktif\n🟢 Server berjalan');
});

bot.on('text', (ctx) => {
const msg = ctx.message.text;
console.log(`[${new Date().toISOString()}] ${ctx.from.username}: ${msg}`);
ctx.reply(`🤖 Terima kasih! Pesan diterima: "${msg}"`);
});

bot.catch((err) => {
console.error('Error:', err);
});

// Health check
app.get('/', (req, res) => {
res.json({
status: 'OK',
service: 'Hermes Bot',
time: new Date().toISOString()
});
});

// Webhook endpoint
app.post('/webhook', (req, res) => {
bot.handleUpdate(req.body, res);
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
console.log(`🚀 Hermes Bot running on port ${PORT}`);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
