// Animasi sederhana saat scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
        nav.style.padding = '0.7rem 5%';
    } else {
        nav.style.background = '#2c3e50';
        nav.style.padding = '1rem 5%';
    }
});

// Pesan saat tombol beli diklik
const buyButtons = document.querySelectorAll('.btn-buy');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Mengarahkan ke halaman kontak...");
    });
});
