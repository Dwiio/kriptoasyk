# KriptoAsik

Aplikasi pembelajaran kriptografi interaktif berbasis **HTML + CSS + JavaScript ES Modules**, tanpa framework dan tanpa build step.

## Menu
1. **Caesar Cipher** — Caesar Wheel interaktif, enkripsi/dekripsi, formula, dan log tiap huruf.
2. **Vigenère Cipher** — enkripsi/dekripsi berbasis kata kunci dengan log per karakter.
3. **XOR Bitwise** — operasi XOR pada byte, tampilan biner/hexadecimal, dan langkah bit.
4. **LFSR Stream Cipher** — LFSR 4-bit sesuai contoh materi, enkripsi/dekripsi berbasis keystream, visualisasi state dan feedback.
5. **Super Encryption** — gabungan empat algoritma: Caesar → Vigenère → XOR → LFSR, dengan dekripsi urutan terbalik.

## Implementasi LFSR
Menu 4 mengikuti contoh pada materi:
- Seed 4-bit, contoh `1111`
- Fungsi feedback: `b4 = b1 XOR b4`
- Bit keluaran diambil dari bit paling kanan
- Feedback dimasukkan kembali ke sisi kiri setelah shift
- Seed `0000` ditolak karena menghasilkan aliran nol
- Untuk seed `1111`, 15 bit awal yang dihasilkan adalah:
  `111101011001000`
- Periode teoritis LFSR 4-bit pada contoh adalah `2^4 - 1 = 15`

## Dasar XOR
Implementasi mengikuti rumus:
- Enkripsi: `C = P XOR K`
- Dekripsi: `P = C XOR K`

Teks diproses sebagai byte UTF-8. Hasil XOR ditampilkan sebagai hexadecimal agar dapat dipindahkan kembali sebagai teks.

## Super Encryption
Urutan enkripsi:
`Caesar → Vigenère → XOR → LFSR`

Urutan dekripsi:
`LFSR → XOR → Vigenère → Caesar`

LFSR bekerja pada byte hasil XOR sehingga keempat lapisan benar-benar ikut digunakan dan dapat dibalik secara tepat.

## Menjalankan
Buka `index.html` melalui server lokal sederhana atau deploy folder `KriptoAsik` ke Vercel. Tidak membutuhkan npm maupun proses build.

## Struktur
- `index.html` — Caesar Wheel
- `vigenere.html` — Vigenère
- `xor.html` — XOR Bitwise
- `lfsr.html` — LFSR Stream Cipher
- `super.html` — Super Encryption
- `shared/theme.css` — design system cream/navy dan layout
- `shared/nav.js` — navigasi
- `shared/process-log.js` — log proses
- `shared/byte-utils.js` — utilitas byte
- `ciphers/*.js` — implementasi algoritma
