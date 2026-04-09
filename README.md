# 🚀 Hermes Codespace Template

Template siap pakai untuk menjalankan Hermes automation di GitHub Codespaces.

## 📋 Fitur

- ✅ Node.js 18 pre-installed
- ✅ Auto-install dependencies
- ✅ Port forwarding (3000, 8080)
- ✅ VS Code extensions ready
- ✅ GitHub CLI included

## 🚀 Quick Start

### 1. Buat Repo dari Template ini

```bash
# Fork/download repo ini ke GitHub kamu
```

### 2. Buka di Codespaces

1. Buka repo di GitHub
2. Klik tombol **Code** (hijau)
3. Pilih tab **Codespaces**
4. Klik **Create codespace on main**

### 3. Tunggu Setup

Codespaces akan otomatis:
- Install Node.js dependencies
- Setup environment
- Forward ports

### 4. Jalankan

```bash
# Terminal akan terbuka otomatis
npm start
```

Akses aplikasi di browser (port 3000 akan diforward otomatis).

## 🛠️ Commands

| Command | Fungsi |
|---------|--------|
| `npm start` | Jalankan aplikasi |
| `npm run dev` | Development mode (auto-reload) |
| `npm run build` | Build aplikasi |

## 🔧 Environment Variables

Buat file `.env` di root:

```env
PORT=3000
NODE_ENV=development
API_KEY=your_api_key_here
```

## 📁 Structure

```
.
├── .devcontainer/
│   └── devcontainer.json    # Codespaces config
├── src/
│   └── index.js             # Main script
├── package.json             # Dependencies
└── README.md                # This file
```

## 💡 Tips

- **Free tier**: 120 jam/bulan untuk GitHub Free
- **Auto sleep**: Codespaces sleep setelah idle
- **Persist**: File tersimpan otomatis

## 🔗 Resources

- [GitHub Codespaces Docs](https://docs.github.com/codespaces)
- [Node.js Docs](https://nodejs.org/docs/)

---
Selamat mengkode! 🎉
