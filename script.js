// update WhatsApp booking function
console.log("Script MyAdventure Siap");

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