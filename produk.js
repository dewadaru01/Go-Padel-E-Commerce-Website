// File: produk.js
// Berfungsi sebagai "database" produk. Semua informasi produk disimpan di sini.
const semuaProduk = [
    {
        id: "P001",
        nama: "Raket Carbon Pro X",
        harga: 2950000,
        hargaTeks: "Rp 2.950.000",
        rating: 5,
        gambar: "Images/raket-padel.webp",
        deskripsi: "Raket Padel Carbon Pro X dirancang untuk pemain tingkat lanjut yang mencari kekuatan dan presisi maksimal. Dibuat dengan 100% serat karbon 3K.",
        spesifikasi: [
            "Material: 100% Carbon Fiber 3K",
            "Berat: 360-375 gram",
            "Bentuk: Diamond (Berlian)",
            "Profil: 38 mm",
        ]
    },
    {
        id: "P002",
        nama: "Sepatu Ultimate Grip 3.0",
        harga: 1499000,
        hargaTeks: "Rp 1.499.000",
        rating: 4,
        gambar: "Images/sepatu-padel.webp",
        deskripsi: "Sepatu performa tinggi dengan grip maksimal di lapangan. Nyaman dan tahan lama untuk permainan intensitas tinggi.",
        spesifikasi: [
            "Material: Sintetis & Mesh",
            "Outsole: Karet Non-marking",
            "Fitur: Bantalan Gel",
            "Warna: Hijau Neon",
        ]
    },
    {
        id: "P003",
        nama: "Bola Padel Isi 3 (Fast Bounce)",
        harga: 180000,
        hargaTeks: "Rp 180.000",
        rating: 5,
        gambar: "Images/bola-padel-3.webp",
        deskripsi: "Bola Padel, dipukul pakai raket.",
        spesifikasi: [
            "Material: Sintetis & Mesh",
            "Outsole: Karet Non-marking",
            "Fitur: Bantalan Gel",
            "Warna: Kuning neon",
        ]
    },
    {
        id: "P004",
        nama: "Tas Raket GoPadel Pro",
        harga: 899000,
        hargaTeks: "Rp 899.000",
        rating: 5,
        gambar: "Images/tas-padel.webp",
        deskripsi: "Tas raket premium dengan kompartemen thermal untuk melindungi raket Anda dari perubahan suhu. Cukup luas untuk semua perlengkapan Anda.",
        spesifikasi: [
            "Kapasitas: 6 Raket",
            "Fitur: Kompartemen sepatu terpisah",
            "Bahan: Poliester Tahan Air",
            "Warna: Hitam/Hijau Neon"
        ]
    },
    {
        id: "P005",
        nama: "Overgrip Pro Comfort (Isi 3)",
        harga: 150000,
        hargaTeks: "Rp 150.000",
        rating: 4,
        gambar: "Images/padel-overgrip.webp",
        deskripsi: "Tingkatkan genggaman dan kenyamanan Anda dengan overgrip Pro Comfort. Menyerap keringat dengan sangat baik.",
        spesifikasi: [
            "Isi: 3 per pak",
            "Ketebalan: 0.6 mm",
            "Fitur: Tacky (lengket)",
            "Warna: Pink"
        ]
    },
    {
        id: "P006",
        nama: "Jersey GoPadel Dry-Fit",
        harga: 350000,
        hargaTeks: "Rp 350.000",
        rating: 5,
        gambar: "Images/jersey-padel.webp",
        deskripsi: "Tetap sejuk dan kering di lapangan dengan jersey Dry-Fit dari GoPadel. Dibuat dari bahan ringan yang menyerap keringat.",
        spesifikasi: [
            "Material: 100% Poliester Dry-Fit",
            "Fitur: Proteksi UV",
            "Potongan: Regular Fit",
            "Warna: Biru"
        ]
    }
];