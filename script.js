function kirimWA() {
    // Nomor HP tujuan
    const nomor = "6285856638523"; // Menggunakan format internasional 62
    
    // Pesan yang ingin dikirim
    const pesan = "Halo POSTECH AJA!\n\nYeay! Terima kasih sudah checkout desain digitalnya 🛒💫\nSemoga cocok dan bikin makin kece yaa 😆💕";
    
    // Encode pesan agar bisa dibaca URL
    const url = "https://api.whatsapp.com/send?phone=" + nomor + "&text=" + encodeURIComponent(pesan);
    
    // Buka tab baru ke WhatsApp
    window.open(url, '_blank');
}

// Efek scroll halus untuk navigasi (Opsional, sudah ada di CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
