# GoPadel - Proyek Toko Online Perlengkapan Padel (Client-Server)

Ini adalah proyek website E-commerce sederhana yang dibangun menggunakan arsitektur Client-Server dengan Node.js dan Express.js. Website ini mensimulasikan toko online perlengkapan Padel dan dilengkapi dengan halaman admin untuk manajemen produk dan pesanan.

## Fitur Utama

### Frontend (User):
- **Halaman Dinamis:** Produk ditampilkan secara dinamis dengan mengambil data dari API backend.
- **Detail Produk:** Halaman detail untuk setiap produk, juga mengambil data dari API.
- **Keranjang Belanja:** Fungsionalitas penuh (tambah, hapus, ubah kuantitas) dengan data disimpan di `localStorage`.
- **Kode Voucher:** Sistem diskon sederhana.
- **Checkout:** Mengirim data pesanan (alamat & item) ke API backend.
- **Notifikasi Modern:** Menggunakan "toast notification".
- **Fitur Tambahan:** Bagian "Produk Terkait" dan "Promo".

### Backend (Admin & Server):
- **API Server:** Dibangun dengan Node.js dan Express.js.
- **Manajemen Produk (CRUD):** Halaman admin memungkinkan Tambah, Edit, dan Hapus produk.
- **Manajemen Pesanan:** Halaman admin menampilkan daftar pesanan masuk dan memungkinkan perubahan status serta penghapusan pesanan.
- **Penyimpanan Data:** Data produk disimpan di `produk.json` dan data pesanan disimpan di `pesanan.json` (persistent storage berbasis file).
- **API Endpoints:**
    - `GET /api/produk`: Mengambil semua produk.
    - `GET /api/produk/:id`: Mengambil satu produk.
    - `POST /api/produk`: Menambah produk baru.
    - `PUT /api/produk/:id`: Mengedit produk.
    - `DELETE /api/produk/:id`: Menghapus produk.
    - `POST /api/pesanan`: Menerima pesanan baru.
    - `GET /api/pesanan`: Mengambil semua pesanan.
    - `PATCH /api/pesanan/:id`: Mengubah status pesanan.
    - `DELETE /api/pesanan/:id`: Menghapus pesanan.

## Teknologi yang Digunakan

- **Frontend:** HTML5, CSS3 (TailwindCSS via CDN), JavaScript (ES6)
- **Backend:** Node.js, Express.js
- **Data Storage:** File JSON (`produk.json`, `pesanan.json`)

## Cara Menjalankan

1.  **Jalankan Backend Server:**
    * Buka terminal Anda.
    * Arahkan ke folder `backend` (`cd path/to/GoPadel-Project/backend`).
    * Jika ini pertama kali, jalankan `npm install` untuk menginstal dependensi.
    * Jalankan server dengan `node server.js` atau (lebih baik) `nodemon server.js`. Server akan berjalan di `http://localhost:3000`.

2.  **Buka Frontend:**
    * Buka file `index.html` (yang ada di folder utama, **bukan** di dalam folder `backend`) di browser Anda.

## Catatan

- File `produk.js` yang mungkin masih ada di folder utama sudah tidak digunakan lagi (deprecated). Semua data produk sekarang dikelola oleh backend melalui `produk.json`.