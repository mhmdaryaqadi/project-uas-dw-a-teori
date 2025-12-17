console.log("Script MyAdventure Siap!");

const video = document.getElementById('bg-video');

function filter(kategori) {
    const items = document.querySelectorAll('.card'); 
    
    const btns = document.querySelectorAll('.btn-filter');
    btns.forEach(btn => {
        if(btn.innerText.toLowerCase() === kategori || (kategori === 'all' && btn.innerText === 'Semua')) {
        }
    });

    items.forEach(item => {
        const kat = item.getAttribute('data-kat');
        if (kat) {
            if (kategori === 'all' || kat === kategori) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        }
    });
}

function pesanWA(nama, harga) {
    kirimWA(nama, harga);
}

function filterGunung(kategori, tombol) {
    document.querySelectorAll('.btn-group > .btn').forEach(btn => btn.classList.remove('active'));
    if (!tombol.classList.contains('dropdown-item')) {
        tombol.classList.add('active');
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

function kirimWA(produk, harga) {
    const nomorHP = "+628999254059"; 
    const pesan = `Halo Admin MyAdventure, saya mau booking *${produk}* dengan harga *${harga}*. Masih ada slot?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

const btnTop = document.getElementById("btn-top");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if(btnTop) btnTop.style.display = "block";
    } else {
        if(btnTop) btnTop.style.display = "none";
    }
};

function keAtas() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.5s ease-in-out; }
`;
document.head.appendChild(style);

function filterAlat(kategori, tombol) {
    const buttons = tombol.parentElement.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    tombol.classList.add('active');

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
    const pesan = `Halo Admin MyAdventure, saya berencana menyewa *${namaAlat}* (${harga}/hari). Apakah tersedia untuk tanggal ... ?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}

function sewaWA(namaAlat, harga) {
    const nomorHP = "+628999254059"; 
    const pesan = `Halo Admin MyAdventure, saya berencana menyewa *${namaAlat}* (${harga}/hari). Apakah tersedia untuk tanggal ... ?`;
    window.open(`https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`, '_blank');
}