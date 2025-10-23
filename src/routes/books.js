// src/routes/books.js
const express = require('express');
const router = express.Router();
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById
} = require('../controllers/booksController');

// Menyimpan buku baru
router.post('/books', addBook);

// Mendapatkan semua buku
router.get('/books', getAllBooks);

// Mendapatkan detail buku berdasarkan ID
router.get('/books/:bookId', getBookById);

// Mengubah data buku
router.put('/books/:bookId', updateBookById);

// Menghapus buku
router.delete('/books/:bookId', deleteBookById);

module.exports = router;
