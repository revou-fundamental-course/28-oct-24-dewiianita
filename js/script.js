console.log("Body Mass Index")
function hitungBMI() {
    // Mengambil nilai berat dan tinggi dari input
    const berat = parseFloat(document.getElementById(`berat-badan`).value);
    const tinggi = parseFloat(document.getElementById(`tinggi-badan`).value)   
   / 100; // Konversi ke meter
    // Menghitung BMI
    const bmi = berat / (tinggi * tinggi);
    // Menampilkan hasil
    const hasilElement = document.getElementById(`hasil`);
    hasilElement.textContent = `BMI Anda adalah: ${bmi.toFixed(2)}`;
      // Membuat elemen paragraf untuk setiap bagian hasil
    const hasilP = document.createElement(`p`);
    hasilElement.appendChild(hasilP);
  
  
    // Menampilkan kategori BMI
    if (bmi < 18.5) {
        hasilP.textContent += `. Underweight (di bawah 18,5). Tingkatkan asupan kalori: Konsumsi makanan yang kaya akan nutrisi seperti protein, karbohidrat kompleks, dan lemak sehat untuk menaikkan berat badan secara sehat.`;
    } else if (bmi < 25) {
        hasilP.textContent += `. Normal (18,5 - 24,9). Pertahankan gaya hidup sehat: Teruslah menjaga pola makan seimbang, olahraga teratur, dan istirahat yang cukup untuk mempertahankan berat badan ideal.`;
    } else if (bmi < 30) {
        hasilP.textContent += `. Overweight (25 - 29,9). Kurangi konsumsi makanan tinggi kalori, gula, dan lemak jenuh. Perbanyak konsumsi buah, sayur, dan serat. Lakukan olahraga secara teratur, minimal 30 menit setiap hari.`;
    } else {
        hasilP.textContent += `. Obesity (di atas 30). Konsultasi dengan dokter: Obesitas memerlukan penanganan yang lebih serius, termasuk perubahan gaya hidup yang signifikan dan mungkin pengobatan medis. Ikuti program penurunan berat badan yang diawasi oleh tenaga medis.`;
    }
  }