const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<!doctype html><html lang="kk"><meta charset="utf-8"><title>Практика №5</title><body style="font:20px system-ui;max-width:850px;margin:60px auto"><h1>Практикалық жұмыс №5</h1><p>Бұлттық жоба жұмыс істеп тұр</p><p>10-нұсқа: файлдық сақтау</p><p><a href="/files">Файлдар тізімі</a> · <a href="/info">Нұсқа туралы мәлімет</a></p></body></html>');
});

app.get('/info', (req, res) => {
  res.json({ status: 'ok', practice: 5, variant: process.env.STUDENT_VARIANT || 'not-set' });
});

// Файлдардың атауы, түрі және байтпен берілген көлемі.
app.get('/files', (req, res) => {
  res.json([
    { id: 1, name: 'дәріс.pdf', type: 'application/pdf', sizeBytes: 245760 },
    { id: 2, name: 'сурет.png', type: 'image/png', sizeBytes: 1048576 },
    { id: 3, name: 'жазба.txt', type: 'text/plain', sizeBytes: 4096 }
  ]);
});

app.listen(PORT, '0.0.0.0', () => console.log(`Сервер ${PORT} портында іске қосылды`));
