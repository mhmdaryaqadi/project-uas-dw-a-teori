console.log("Script MyAdventure Siap!");

const video = document.getElementById('bg-video');

function filterGunung(kategori, tombol) {
    document.querySelectorAll('.btn-group .btn, .dropdown-item').forEach(btn => {
        btn.classList.remove('active');
    });

    tombol.classList.add('active');

    if (tombol.classList.contains('dropdown-item')) {
        const btnInduk = document.getElementById('btnLainnya');
        if(btnInduk) btnInduk.classList.add('active');
    }

    const items = document.querySelectorAll('.card-gunung');

    items.forEach(item => {
        const lokasi = item.getAttribute('data-lokasi');
        
        if (kategori === 'all' || lokasi === kategori) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
}

function daftarWA(gunung, harga) {
    kirimWA(gunung, harga);
}

function filterAlat(kategori, tombol) {
    document.querySelectorAll('.btn-group .btn, .dropdown-item').forEach(btn => {
        btn.classList.remove('active');
    });

    tombol.classList.add('active');

    if (tombol.classList.contains('dropdown-item')) {
        const btnInduk = document.getElementById('btnLainnya');
        if(btnInduk) btnInduk.classList.add('active');
    }

    const items = document.querySelectorAll('.card-alat'); 
    items.forEach(item => {
        const itemKat = item.getAttribute('data-kategori');
        
        if (kategori === 'all' || itemKat === kategori) {
            item.style.display = 'block'; 
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none'; 
            item.classList.remove('fade-in');
        }
    });
}

function sewaWA(namaAlat, harga) {
    const nomorHP = "+628999254059"; 
    const pesan = `Halo Admin, saya berencana menyewa *${namaAlat}* (${harga}/hari). Apakah tersedia untuk tanggal ... ?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

function kirimWA(produk, harga) {
    const nomorHP = "+628999254059"; 
    const pesan = `Halo Admin, saya mau booking *${produk}* dengan harga *${harga}*. Masih ada slot?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

const btnTop = document.getElementById("btn-top");
window.onscroll = function() {
    if (btnTop) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }
};

function keAtas() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}