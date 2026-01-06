# Laporan Tugas Besar: Pengembangan Website MyAdventure

## 1. Identitas Proyek
* **Nama Website:** MyAdventure
* **Kategori:** Tour & Travel (Open Trip) & Rental Alat Outdoor
* **Konsep Desain:** *Modern Adventure Interface* (Clean & Responsive)
* **Deskripsi:** MyAdventure adalah platform berbasis web yang menyediakan layanan "One-Stop Solution" untuk para pecinta alam. Website ini menawarkan katalog paket pendakian gunung (Open Trip) dan penyewaan peralatan camping. Fokus utama pengembangan adalah kemudahan akses informasi, filter pencarian yang interaktif tanpa *reload*, serta integrasi pemesanan langsung ke WhatsApp admin untuk memangkas birokrasi pemesanan.

### Anggota Kelompok:
1. **Muhammad Arya Alqadi** (4524210058)
2. **Muhamamad Arkan** (4524210114)
3. **Rangga Veda Aswanga** (4524210118)
4. **Muhammad Jibran Ferdian** (4524210067)
5. **Muhammad Farel Alberto** (4524210061)
6. **Aufa Al Ghiyats Sulthan Priatmojo** (4524210132)

---

## 2. Arsitektur & Teknologi (Tech Stack)

Kami menggunakan standar industri pengembangan web modern dengan rincian sebagai berikut:

| Teknologi | Implementasi Spesifik |
| :--- | :--- |
| **HTML5** | Struktur semantik dokumen web (`<nav>`, `<main>`, `<footer>`). Penggunaan tag `<video>` untuk *Hero Background* dan atribut `alt` untuk aksesibilitas gambar. |
| **CSS3 (Custom)** | Kustomisasi tampilan meliputi animasi `@keyframes fadeIn`, efek *hover zoom* pada kartu produk, dan penyesuaian warna tema (Kuning/Hitam). |
| **Bootstrap 5.3** | Framework CSS utama. Digunakan untuk *Grid System* (Responsive Layout), *Navbar*, *Button Groups*, dan *Dropdown Menu*. |
| **JavaScript (ES6)** | Logika utama website. Menangani **DOM Manipulation** untuk fitur filter kategori dinamis, logika tombol "Active", dan pembuatan pesan otomatis ke API WhatsApp. |
| **FontAwesome 6** | Ikon vektor untuk mempercantik antarmuka (ikon gunung, keranjang, panah, dll). |
| **Google Fonts** | Menggunakan font **Poppins** untuk memberikan kesan modern, tegas, dan mudah dibaca pada berbagai ukuran layar. |

---

## 3. Daftar Fitur (Feature List)

Berikut adalah seluruh fitur unggulan yang telah diimplementasikan dalam website MyAdventure:

### A. Fitur Navigasi & UI/UX
1.  **Video Background Hero:** Tampilan awal yang memukau dengan latar belakang video pegunungan yang berjalan otomatis (*autoplay loop*).
2.  **Responsive Layout:** Tampilan website beradaptasi otomatis di HP, Tablet, dan Desktop. Tombol navigasi di HP disusun secara vertikal (*flex-column*) agar mudah dijangkau jari.
3.  **Smooth Animations:** Efek transisi halus saat *hover* pada kartu produk dan animasi *fade-in* saat mengganti kategori filter.
4.  **Card Alignment System:** Menggunakan teknik *Flexbox* (`mt-auto`) untuk memastikan tombol harga dan booking selalu sejajar di bawah, terlepas dari panjang pendeknya deskripsi produk.

### B. Fitur Katalog & Logika Bisnis
5.  **Dynamic Filtering (Tanpa Reload):**
    * **Jadwal Trip:** Filter berdasarkan lokasi (Jawa, Bali, Sumatera, dll).
    * **Sewa Alat:** Filter berdasarkan jenis (Tenda, Carrier, Alat Masak, dll).
    * **Smart Dropdown:** Fitur "Lainnya" yang mengelompokkan kategori tambahan agar tampilan tidak penuh, dengan logika tombol induk yang tetap menyala saat anak menunya dipilih.
6.  **WhatsApp Booking Integration:**
    * Tombol "Booking Sekarang" (Trip) dan "Sewa" (Alat) terhubung langsung ke API WhatsApp.
    * Pesan otomatis terisi: *"Halo Admin, saya mau booking [Nama Produk] dengan harga [Harga]..."*

### C. Halaman Pendukung
7.  **Halaman Syarat & Ketentuan:** Informasi aturan sewa dan trip yang disajikan dengan layout kartu (*Cards*) yang rapi dan tombol navigasi responsif di bagian bawah.

---

## 4. Struktur Halaman (Sitemap)

1.  **Homepage (`index.html`)**
    * *Hero Section:* Video & Navigasi Cepat.
    * *Value Proposition:* Kenapa memilih kami (Guide Lisensi, Alat Lengkap).
2.  **Jadwal Trip (`paket.html`)**
    * Katalog gunung dengan label kesulitan (*Hard, Medium, Easy*).
    * Filter Lokasi (Pulau Jawa, Luar Jawa, dll).
3.  **Sewa Alat (`sewa.html`)**
    * Katalog alat outdoor dengan spesifikasi singkat.
    * Filter Kategori Alat & Dropdown Menu.
4.  **Syarat & Ketentuan (`syarat.html`)**
    * Kebijakan pembayaran, pembatalan, dan denda kerusakan alat.

---

## 5. Bukti Responsivitas & Tampilan

Dokumentasi tampilan website MyAdventure pada berbagai perangkat:

| Tampilan Desktop | Tampilan Tablet | Tampilan Mobile |
| :---: | :---: | :---: |
| ![Desktop View](img/desktop.png) | ![Tablet View](img/tablet.png) | ![Mobile View](img/hp.png) |
*(Gambar tersimpan di folder `docs/img/`)*

---

## 6. Bukti Aksesibilitas (Audit Lighthouse)

Kami telah melakukan pengujian performa dan aksesibilitas menggunakan Google Lighthouse untuk memastikan kualitas website.

| Kategori | Skor | Keterangan |
| :--- | :--- | :--- |
| **Performance** | **100** | Website sangat ringan dan cepat karena kode yang efisien. |
| **Accessibility** | **83** | Struktur HTML sudah menggunakan tag semantik dan atribut `alt` pada gambar. |
| **Best Practices** | **100** | Kode mengikuti standar keamanan dan pengembangan web modern. |
| **SEO** | **90** | Website mudah ditemukan dan diindeks oleh mesin pencari. |

**Screenshot Hasil Audit:**

![Hasil Audit Lighthouse](img/lighthouse.png)

---

### Akses Proyek:
* **Link Repository GitHub:** https://github.com/mhmdaryaqadi/project-uas-dw-a-teori.git
* **Link Website Live:** https://mhmdaryaqadi.github.io/project-uas-dw-a-teori/
