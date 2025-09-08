const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Завантаження логотипів
app.get('/api/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'files', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send('Файл не знайдено');
  }
});

// Запит на вивід грошей
app.post('/api/withdraw', (req, res) => {
  const { userId, method, account, amount } = req.body;
  console.log(`Запит від ${userId}: вивід ${amount}$ через ${method} на ${account}`);
  res.json({ success: true, message: 'Запит прийнято' });
});

app.listen(PORT, () => console.log(`✅ Сервер запущено на http://localhost:${PORT}`));
