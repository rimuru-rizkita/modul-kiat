# Modul KIAT – Kewarganegaraan Inklusif dan Aksesibel

Prototipe modul daring mata kuliah Kewarganegaraan (MKWU) Institut Teknologi Sumatera untuk program SATRIA 2026.
Model pembelajaran **KIAT** terdiri atas empat tahap: Pemicu, Refleksi, Aksi, dan Integrasi.

## Halaman

- **Beranda (`#beranda`)**: dashboard pembelajaran berisi lanjutkan belajar, ringkasan progres, materi per minggu, tugas dan tenggat, pengumuman, pilihan cara belajar, dan pengajuan akomodasi ke ULD.
- **Pertemuan 1 (`#langkah-1` sampai `#langkah-5`)**: satu langkah per layar, yaitu Pemicu → Materi → Refleksi → Aksi → Integrasi.
- **Tombol bulat melayang** (kanan bawah) membuka pengaturan tampilan dan aksesibilitas. Pintasan: Alt + A.
- **Tab samping "Lihat dalam Bahasa Isyarat"** membuka format Isyarat di halaman pertemuan.
- Materi per pertemuan, CPMK, metode, dan bobot penilaian **mengikuti RPS Kewarganegaraan WU25-00003**.
- **Pop-up** dipakai untuk umpan balik, definisi istilah, jurnal terkirim, cek pemahaman, bab selesai, dan formulir akomodasi. Setiap pop-up punya tombol **Dengarkan**.

## Fitur khusus disabilitas (target WCAG 2.2 AA)

| Pengguna | Fitur |
|---|---|
| Netra / low vision | HTML semantik, navigasi keyboard penuh, *skip link*, fokus terlihat, teks 100–200%, kontras tinggi, narasi suara dengan sorotan |
| Tuli | Format **Isyarat** per bab, jendela juru bahasa isyarat di video, teks tertutup, transkrip |
| Disleksia | Pilihan huruf (Atkinson Hyperlegible, Lexend, **OpenDyslexic**, huruf sistem), jarak teks lega, penggaris baca, sorotan kalimat saat dibacakan |
| Disabilitas intelektual | Easy Read satu kalimat per layar dengan gambar dan suara, cek pemahaman |
| Semua | 4 format belajar, tema terang/gelap/kontras tinggi, kurangi gerakan, jurnal multiformat, pengajuan akomodasi, bantuan dan lapor (ULD dan Satgas PPKPT) |

Pengaturan, draf jurnal, dan progres disimpan di `localStorage` browser masing-masing pengguna.

## Struktur

```
index.html                     Beranda + Bab 1 (rute lewat #hash)
assets/css/style.css           Palet warna, token tema, dan gaya
assets/js/app.js               Interaksi
assets/img/jbi-ilustrasi.gif   Animasi PENANDA TEMPAT juru bahasa isyarat (5 detik)
assets/img/jbi-diam.png        Gambar diam untuk tombol "Hentikan animasi"
assets/img/pemicu-dimas.gif    Ilustrasi video pemicu Pertemuan 1 (12 detik, 4 adegan selaras teks tertutup)
assets/img/pemicu-diam.png     Gambar diam video pemicu (sebelum diputar)
assets/fonts/OpenDyslexic-*.woff  Font OpenDyslexic (lisensi bebas salin, berbasis Bitstream Vera)
.nojekyll
```

> **Penting:** `jbi-ilustrasi.gif` hanya ilustrasi dan **bukan isyarat BISINDO/SIBI yang sebenarnya**.
> Ganti dengan rekaman juru bahasa isyarat atau penutur Tuli yang sudah divalidasi.
> Untuk rekaman asli, gunakan `<video muted loop playsinline>` (MP4/WebM) dengan tombol jeda dan `<track kind="captions">`, karena hasilnya lebih tajam dan ringan daripada GIF.

## Deploy ke GitHub Pages

1. Buat repositori baru, misalnya `modul-kiat`.
2. Unggah seluruh isi folder ini (pastikan `index.html` ada di paling luar), atau gunakan git:
   ```bash
   git init
   git add .
   git commit -m "Modul KIAT"
   git branch -M main
   git remote add origin https://github.com/USERNAME/modul-kiat.git
   git push -u origin main
   ```
3. Buka **Settings → Pages → Deploy from a branch**, lalu pilih `main` dan `/ (root)`. Klik **Save**.
4. Situs aktif di `https://USERNAME.github.io/modul-kiat/` setelah 1–2 menit.

## Yang perlu dilengkapi

- Kontak resmi ULD dan Satgas PPKPT (panel **Bantuan**).
- Video pemicu dan video bahasa isyarat asli beserta teks tertutup.
- Rekaman narator manusia (saat ini memakai suara bawaan browser).
- Pemeriksaan kutipan pasal dengan naskah resmi.
- Pertemuan 2–15 (salin struktur `.langkah` Pertemuan 1; data ringkas tiap pertemuan ada di konstanta `RPS` pada `assets/js/app.js`).
- Uji dengan NVDA/VoiceOver, axe, WAVE, dan Lighthouse, serta bersama pengguna penyandang disabilitas.
