````markdown
# Bookshelf API

Bookshelf API adalah proyek backend sederhana yang dibangun menggunakan Node.js dan Express.js. Aplikasi ini dibuat sebagai bagian dari submission program Asah/Dicoding untuk mempelajari konsep dasar backend dan penerapan RESTful API.

Aplikasi ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) terhadap data buku yang disimpan secara sementara (in-memory). Selain itu, tersedia fitur pencarian dan filter menggunakan query parameter.

## Fitur Utama

1. Menambahkan data buku baru.
2. Melihat daftar seluruh buku.
3. Melihat detail buku berdasarkan ID.
4. Memperbarui data buku berdasarkan ID.
5. Menghapus buku berdasarkan ID.
6. Menyaring buku berdasarkan:
   - Nama (`?name`)
   - Status sedang dibaca (`?reading`)
   - Status selesai dibaca (`?finished`)

## Teknologi yang Digunakan

- **Node.js (v18.13.0 LTS)**
- **Express.js**
- **nanoid@3** untuk pembuatan ID unik
- **ESLint v9 (Flat Config)** untuk menjaga konsistensi kode


## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/muhmmdyusuf/bookself-api.git
````

2. Masuk ke folder proyek:

   ```bash
   cd bookself-api
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run start
   ```

Aplikasi akan berjalan di:

```
http://localhost:9000
```

## Struktur Folder

```
bookself-api/
├── src/
│   ├── controllers/
│   │   └── booksController.js
│   ├── data/
│   │   └── books.js
│   ├── routes/
│   │   └── books.js
│   └── server.js
├── eslint.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

## Dokumentasi Endpoint

### 1. Menambahkan Buku

**POST** `/books`
Body JSON:

```json
{
  "name": "Buku A",
  "year": 2023,
  "author": "John Doe",
  "summary": "Contoh deskripsi buku.",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 25,
  "reading": true
}
```

**Respons Sukses (201)**

```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "abc123xyz"
  }
}
```

### 2. Menampilkan Semua Buku

**GET** `/books`
Contoh query opsional:

```
/books?name=dicoding
/books?reading=1
/books?finished=0
```

**Respons Sukses (200)**

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "abc123xyz",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

### 3. Menampilkan Detail Buku

**GET** `/books/{bookId}`

**Respons Sukses (200)**

```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "abc123xyz",
      "name": "Buku A",
      "year": 2023,
      "author": "John Doe",
      "summary": "Deskripsi buku",
      "publisher": "Dicoding Indonesia",
      "pageCount": 100,
      "readPage": 25,
      "finished": false,
      "reading": true,
      "insertedAt": "2023-03-04T09:11:44.598Z",
      "updatedAt": "2023-03-04T09:11:44.598Z"
    }
  }
}
```

### 4. Memperbarui Buku

**PUT** `/books/{bookId}`
Body JSON sama seperti endpoint `POST /books`.

**Respons Sukses (200)**

```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

### 5. Menghapus Buku

**DELETE** `/books/{bookId}`

**Respons Sukses (200)**

```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```

## Pengujian

Semua endpoint telah diuji menggunakan Postman Collection resmi dari Dicoding:

* `Bookshelf API Test.postman_collection.json`
* `Bookshelf API Test.postman_environment.json`

Seluruh pengujian mandatory dan opsional berhasil dijalankan tanpa error.

## Catatan Tambahan

* Aplikasi menggunakan penyimpanan data sementara (array `books[]`).
* Tidak menggunakan database eksternal.
* `node_modules` diabaikan melalui file `.gitignore`.
* ESLint telah dikonfigurasi dengan aturan konsisten dan tidak menghasilkan error.

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dalam program Asah/Dicoding.
Seluruh kode bebas digunakan untuk keperluan edukasi dan pengembangan pribadi.

**Dibuat oleh:**
Muhammad Yusuf
Tahun: 2025
