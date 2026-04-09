const axios = require('axios');
require('dotenv').config();

/**
 * Hermes Automation Script
 * Template untuk automation di GitHub Codespaces
 */

class HermesAutomation {
  constructor() {
    this.name = 'Hermes Bot';
    this.version = '1.0.0';
  }

  async init() {
    console.log(`🚀 ${this.name} v${this.version} started`);
    console.log('Environment:', process.env.NODE_ENV || 'development');
    
    // Contoh: Fetch data dari API
    await this.fetchExample();
    
    // Contoh: Setup server (opsional)
    this.setupServer();
  }

  async fetchExample() {
    try {
      // Contoh fetch data - ganti dengan API yang kamu butuhkan
      console.log('📡 Fetching data...');
      // const response = await axios.get('https://api.example.com/data');
      // console.log('Data:', response.data);
    } catch (error) {
      console.error('Error fetching:', error.message);
    }
  }

  setupServer() {
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.get('/', (req, res) => {
      res.json({
        name: this.name,
        version: this.version,
        status: 'running',
        timestamp: new Date().toISOString()
      });
    });

    app.get('/health', (req, res) => {
      res.json({ status: 'ok' });
    });

    app.listen(PORT, () => {
      console.log(`🌐 Server running on port ${PORT}`);
      console.log(`🔗 http://localhost:${PORT}`);
    });
  }
}

// Run
const bot = new HermesAutomation();
bot.init().catch(console.error);
