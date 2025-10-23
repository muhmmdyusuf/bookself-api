// src/server.js
const express = require('express');
const app = express();
const booksRoute = require('./routes/books');

// Middleware untuk parsing JSON
app.use(express.json());

// Daftarkan router utama
app.use('/', booksRoute);

// Gunakan port 9000 untuk server
const port = 9000;
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});


module.exports = app;
