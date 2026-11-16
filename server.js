const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!doctype html><html lang="kk"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Файлдар</title><style>body{font:17px/1.5 system-ui,sans-serif;max-width:880px;margin:48px auto;padding:0 20px;color:#17202a;background:#f5f7fa}h1{font-size:28px}section{background:white;padding:24px;border:1px solid #d7dee7;border-radius:8px}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:14px 10px;border-bottom:1px solid #e5e9ef}th{color:#526173;font-weight:600}tr:last-child td{border-bottom:0}</style><h1>Файлдар</h1><section><table><thead><tr><th>Атауы</th><th>Түрі</th><th>Көлемі</th></tr></thead><tbody><tr><td>дәріс.pdf</td><td>PDF құжаты</td><td>240 КБ</td></tr><tr><td>сурет.png</td><td>Сурет</td><td>1 МБ</td></tr><tr><td>жазба.txt</td><td>Мәтіндік файл</td><td>4 КБ</td></tr></tbody></table></section></html>`);
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
