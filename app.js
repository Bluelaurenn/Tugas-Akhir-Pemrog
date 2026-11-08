const express = require('express');
const app = express();
const PORT = 3000;

app.get('/beranda', (req, res) => {
  res.send('Selamat datang di server kelompok kami!');
});

app.get('/identitas', (req, res) => {
  res.json({
    kelompok: "Chernobyl",
    anggota: ["Muhamad Nabil Arraihan - 20250040105", "Mohrariz Stywan - 20250040178", "Muhamad Dzamar Munggaran - 20250040094", "Muhammad Abdul Baa'its Al-Jabar - 20250040157"]
  });
});

app.get('/matkul', (req, res) => {
  res.send('Mata Kuliah: Pemrograman Berbasis Platform');
});

app.get('/sapa/:nama', (req, res) => {
  res.send(`Halo ${req.params.nama}, selamat datang di web server kami!`);
});

app.get('/', (req, res) => {
  res.redirect('/beranda');
});

app.get('/kontak', (req, res) => {
  res.send('Hubungi kelompok Chernobyl melalui email: chernobyl@team.com');
});

app.listen(PORT, () => {
  console.log(`Server kelompok berjalan di http://localhost:${PORT}`);
});