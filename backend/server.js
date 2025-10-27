const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;
const pesananDbPath = './pesanan.json';
const produkDbPath = './produk.json';

let semuaProduk = [];
let pesananDiterima = [];

// Load data saat startup
try {
    const dataProduk = fs.readFileSync(produkDbPath, 'utf8');
    semuaProduk = JSON.parse(dataProduk);
    console.log('Database produk dimuat.');
} catch (err) { console.error('Gagal memuat produk:', err); }

try {
    const dataPesanan = fs.readFileSync(pesananDbPath, 'utf8');
    pesananDiterima = JSON.parse(dataPesanan);
    console.log('Database pesanan dimuat.');
} catch (err) { console.log('File pesanan.json tidak ditemukan.'); }

// Fungsi simpan data
function simpanDatabaseProduk() {
    try { fs.writeFileSync(produkDbPath, JSON.stringify(semuaProduk, null, 2)); console.log('Database produk diperbarui.'); } 
    catch (err) { console.error('Gagal simpan produk:', err); }
}
function simpanDatabasePesanan() {
    try { fs.writeFileSync(pesananDbPath, JSON.stringify(pesananDiterima, null, 2)); } 
    catch (err) { console.error('Gagal simpan pesanan:', err); }
}

app.use(cors());
app.use(express.json());

// === API Produk ===
app.get('/api/produk', (req, res) => res.json(semuaProduk));

app.get('/api/produk/:id', (req, res) => {
    const produk = semuaProduk.find(p => p.id === req.params.id);
    if (produk) { res.json(produk); } 
    else { res.status(404).json({ message: 'Produk tidak ditemukan' }); }
});

app.post('/api/produk', (req, res) => {
    const produkBaru = req.body;
    const idTerakhir = semuaProduk.length > 0 ? parseInt(semuaProduk[semuaProduk.length - 1].id.replace('P', '')) : 0;
    produkBaru.id = 'P' + String(idTerakhir + 1).padStart(3, '0');
    semuaProduk.push(produkBaru);
    simpanDatabaseProduk();
    console.log(`Produk ditambah: ${produkBaru.nama}`);
    res.status(201).json(produkBaru);
});

app.put('/api/produk/:id', (req, res) => {
    const index = semuaProduk.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    semuaProduk[index] = { ...semuaProduk[index], ...req.body };
    simpanDatabaseProduk();
    console.log(`Produk diupdate: ${semuaProduk[index].nama}`);
    res.status(200).json(semuaProduk[index]);
});

app.delete('/api/produk/:id', (req, res) => {
    const index = semuaProduk.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    const deleted = semuaProduk.splice(index, 1);
    simpanDatabaseProduk();
    console.log(`Produk dihapus: ${deleted[0].nama}`);
    res.status(200).json({ message: `Produk "${deleted[0].nama}" dihapus.` });
});


// === API Pesanan ===
app.post('/api/pesanan', (req, res) => {
    const pesananBaru = { idPesanan: Date.now(), tanggalPesan: new Date().toISOString(), status: 'Baru', ...req.body };
    pesananDiterima.push(pesananBaru);
    simpanDatabasePesanan();
    console.log(`Pesanan #${pesananBaru.idPesanan} disimpan.`);
    res.status(201).json({ message: 'Pesanan berhasil dibuat!', idPesanan: pesananBaru.idPesanan });
});

app.get('/api/pesanan', (req, res) => res.json(pesananDiterima));

app.patch('/api/pesanan/:id', (req, res) => {
    const index = pesananDiterima.findIndex(p => p.idPesanan === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    pesananDiterima[index].status = req.body.status;
    simpanDatabasePesanan();
    console.log(`Status pesanan #${req.params.id} -> ${req.body.status}`);
    res.status(200).json(pesananDiterima[index]);
});

app.delete('/api/pesanan/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pesananDiterima.findIndex(p => p.idPesanan === id);
    if (index === -1) return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    pesananDiterima.splice(index, 1);
    simpanDatabasePesanan();
    console.log(`Pesanan #${id} dihapus.`);
    res.status(200).json({ message: `Pesanan #${id} dihapus.` });
});


// === Jalankan Server ===
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});