// Fungsi untuk mengarahkan ke WhatsApp dengan pesan otomatis
function kirimWA() {
    const nomorWA = "6285856638523"; // Format internasional tanpa simbol +
    const pesan = encodeURIComponent("Halo POSTECH AJA, saya ingin checkout desain digitalnya 🛒.");
    
    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    
    // Membuka link WhatsApp di tab baru
    window.open(url, '_blank');
}

// Logika sederhana untuk console (opsional)
console.log("Website POSTECH AJA berhasil dimuat.");
