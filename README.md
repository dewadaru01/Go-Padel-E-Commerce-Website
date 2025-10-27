# GoPadel - Proyek Toko Online Perlengkapan Padel (Client-Server)

Ini adalah proyek website E-commerce sederhana yang dibangun menggunakan arsitektur Client-Server dengan Node.js dan Express.js. Website ini mensimulasikan toko online perlengkapan Padel dan dilengkapi dengan halaman admin untuk manajemen produk dan pesanan.

## 🚀 Fitur

* Frontend user-friendly untuk browsing produk, keranjang belanja, dan checkout.
* Backend API dengan Node.js/Express untuk mengelola data produk dan pesanan.
* Halaman admin untuk CRUD (Create, Read, Update, Delete) produk dan manajemen pesanan (termasuk update status & hapus).
* Penyimpanan data produk dan pesanan menggunakan file JSON (`produk.json`, `pesanan.json`).
* Fitur tambahan: kode voucher, gratis ongkir, produk terkait, notifikasi toast.
* Desain responsif menggunakan TailwindCSS.

## 🛠️ Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal perangkat lunak berikut di komputer Anda:

1.  **Git:** Untuk mengunduh (clone) repositori.
    * Cek instalasi: Buka terminal dan ketik `git --version`.
    * Unduh: [git-scm.com](https://git-scm.com/)
2.  **Node.js (versi LTS direkomendasikan):** Untuk menjalankan server backend. Node.js akan otomatis menyertakan `npm` (Node Package Manager).
    * Cek instalasi: Buka terminal dan ketik `node -v` dan `npm -v`.
    * Unduh: [nodejs.org](https://nodejs.org/)

## ⚙️ Instalasi & Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal:

1.  **Clone Repositori:**
    Buka terminal Anda, pindah ke direktori tempat Anda ingin menyimpan proyek, lalu jalankan:
    ```bash
    git clone [https://github.com/USERNAME/NAMA_REPO.git](https://github.com/USERNAME/NAMA_REPO.git)
    cd NAMA_REPO
    ```
    *(Ganti `USERNAME/NAMA_REPO` dengan URL repositori ini).*

2.  **Instal Dependensi Backend:**
    Masuk ke folder `backend` dan instal library Node.js yang diperlukan:
    ```bash
    cd backend
    npm install
    ```

3.  **Jalankan Server Backend:**
    Masih di dalam folder `backend`, jalankan server:
    ```bash
    node server.js
    ```
    *(Atau gunakan `nodemon server.js` jika Anda menginstalnya, agar server otomatis restart saat ada perubahan kode).*
    Server akan berjalan di `http://localhost:3000`. **Biarkan terminal ini tetap terbuka.**

4.  **Akses Aplikasi:**
    Buka browser web Anda dan kunjungi alamat:
    **`http://localhost:3000`**

    Server akan menyajikan halaman `index.html` dari folder `public`. Anda bisa mulai menggunakan website dan halaman admin (`http://localhost:3000/admin.html`)