const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Устанавливаем путь к собранному React-приложению
app.use(express.static(path.join(__dirname, 'build')));

// Обрабатываем запросы к корню приложения
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
