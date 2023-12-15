const express = require('express');
const app = express();
const port = 3000; // Выберите свободный порт

app.get('/', (req, res) => {
    res.send('Привет, мир! Это exampleExpress!');
});

app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
