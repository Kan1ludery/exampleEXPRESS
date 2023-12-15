require('dotenv').config(); // Загружаем переменные окружения из .env файла

const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Используем порт из переменной окружения или 3000 по умолчанию

app.get('/', (req, res) => {
    res.send('Привет, мир! Это exampleExpress!');
});

app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
