# 🔐 KriptoAsik

**KriptoAsik** adalah aplikasi web edukasi interaktif yang dibuat untuk mempelajari dan memahami konsep **algoritma kriptografi** melalui simulasi enkripsi, dekripsi, serta proses perhitungan langkah demi langkah.

Project ini dirancang agar konsep kriptografi yang cukup abstrak dapat dipelajari secara lebih visual dan interaktif, mulai dari algoritma klasik hingga algoritma yang menggunakan operasi bit dan pembangkitan keystream.

## 🌐 Live Demo

🚀 **Coba langsung aplikasi KriptoAsik:**

👉 https://kriptoasyk.netlify.app

---

## 📚 Algoritma yang Tersedia

KriptoAsik memiliki **5 menu utama**:

### 1. 🔄 Caesar Cipher

Implementasi algoritma substitusi sederhana dengan cara menggeser posisi setiap huruf pada alfabet berdasarkan nilai `shift`.

**Rumus:**

```text
C = (P + K) mod 26
```

Fitur:

* Enkripsi
* Dekripsi
* Caesar Cipher Wheel interaktif
* Perhitungan setiap karakter
* Detail proses per huruf

---

### 2. 🔑 Vigenère Cipher

Vigenère Cipher merupakan pengembangan dari konsep Caesar Cipher dengan menggunakan **kata kunci** untuk menentukan perubahan pergeseran pada setiap karakter.

**Rumus enkripsi:**

```text
C = (P + K) mod 26
```

**Rumus dekripsi:**

```text
P = (C - K) mod 26
```

Fitur:

* Enkripsi
* Dekripsi
* Penggunaan keyword
* Kunci diulang secara periodik
* Detail perhitungan setiap karakter

---

### 3. ⚡ XOR

Menu XOR memperkenalkan operasi **bitwise XOR** yang banyak digunakan dalam konsep kriptografi modern.

Aturan dasar XOR:

```text
0 ⊕ 0 = 0
0 ⊕ 1 = 1
1 ⊕ 0 = 1
1 ⊕ 1 = 0
```

**Rumus:**

```text
C = P ⊕ K
```

Karena XOR bersifat simetris:

```text
P = C ⊕ K
```

Fitur:

* Enkripsi
* Dekripsi
* Konversi teks menjadi byte
* Representasi biner
* Representasi hexadecimal
* Perhitungan XOR bit demi bit

---

### 4. 🔢 LFSR Stream Cipher

LFSR (**Linear Feedback Shift Register**) digunakan untuk membangkitkan **keystream** yang kemudian digunakan dalam proses XOR terhadap data.

Project ini menggunakan contoh **LFSR 4-bit** dengan fungsi feedback:

```text
b₄ = b₁ ⊕ b₄
```

Dengan seed 4-bit dan seed `0000` tidak diperbolehkan.

Fitur:

* Enkripsi
* Dekripsi
* Seed 4-bit
* Visualisasi state register
* Bit keluaran
* Feedback
* Keystream
* Perhitungan XOR
* Informasi periode `2⁴ − 1 = 15`

---

### 5. 🔐 Super Enkripsi

Menu Super Enkripsi menggabungkan beberapa algoritma menjadi satu rangkaian proses.

Urutan enkripsi:

```text
Caesar
   ↓
Vigenère
   ↓
XOR
   ↓
LFSR
```

Atau secara lengkap:

```text
Plaintext
   ↓
Caesar
   ↓
Vigenère
   ↓
XOR
   ↓
LFSR
   ↓
Ciphertext
```

Sedangkan proses dekripsi dilakukan dengan urutan terbalik:

```text
Ciphertext
   ↓
LFSR
   ↓
XOR
   ↓
Vigenère
   ↓
Caesar
   ↓
Plaintext
```

Fitur:

* Caesar Key
* Vigenère Key
* XOR Key
* LFSR Seed
* Enkripsi multi-layer
* Dekripsi multi-layer
* Tampilan hasil setiap tahap
* Detail proses setiap lapisan

---

## ✨ Fitur Utama

* 🔐 Enkripsi dan dekripsi interaktif
* 📊 Menampilkan proses perhitungan algoritma
* 🧮 Perhitungan karakter, byte, bit, dan hexadecimal
* 🔄 Caesar Cipher Wheel
* 🔑 Dukungan keyword Vigenère
* ⚡ Visualisasi operasi XOR
* 🔢 Simulasi LFSR 4-bit
* 🔐 Super Enkripsi dengan 4 lapisan algoritma
* 📱 Responsive untuk berbagai ukuran layar
* 🎓 Cocok untuk pembelajaran dan demonstrasi kriptografi
* 🌐 Dapat dijalankan langsung melalui browser tanpa backend

---

## 🛠️ Teknologi yang Digunakan

Project ini dibuat menggunakan teknologi web sederhana sehingga dapat dijalankan langsung di browser.

* **HTML5**
* **CSS3**
* **JavaScript ES Modules**
* **Web API**
* **Netlify**

Tidak membutuhkan database maupun backend server.

---

## 📁 Struktur Project

```text
KriptoAsyk/
│
├── index.html
├── vigenere.html
├── xor.html
├── lfsr.html
├── super.html
├── netlify.toml
│
├── ciphers/
│   ├── caesar.js
│   ├── vigenere.js
│   ├── xor.js
│   ├── lfsr.js
│   └── super.js
│
└── shared/
    ├── theme.css
    ├── nav.js
    ├── process-log.js
    └── byte-utils.js
```

### Penjelasan Folder

**`ciphers/`**

Berisi implementasi algoritma kriptografi:

* `caesar.js` → Caesar Cipher
* `vigenere.js` → Vigenère Cipher
* `xor.js` → XOR
* `lfsr.js` → LFSR
* `super.js` → Super Enkripsi

**`shared/`**

Berisi komponen yang digunakan bersama oleh beberapa halaman:

* `theme.css` → styling dan tampilan aplikasi
* `nav.js` → navigasi antar menu
* `process-log.js` → menampilkan langkah-langkah proses
* `byte-utils.js` → konversi byte, bit, teks, dan hexadecimal

---

## 🚀 Menjalankan Project Secara Lokal

Clone repository:

```bash
git clone https://github.com/USERNAME/KriptoAsyk.git
```

Masuk ke folder project:

```bash
cd KriptoAsyk
```

Karena project menggunakan **JavaScript ES Modules**, disarankan menjalankannya menggunakan local server.

Contohnya menggunakan VS Code dengan extension **Live Server**.

Kemudian buka:

```text
index.html
```

di browser melalui local server.

---

## 🌐 Deployment

Project ini dapat di-deploy menggunakan **Netlify**.

Konfigurasi deployment terdapat pada:

```text
netlify.toml
```

dengan konfigurasi:

```toml
[build]
  publish = "."
```

### Live Website

🚀 **https://kriptoasyk.netlify.app**

---

## 🎯 Tujuan Project

KriptoAsik dibuat sebagai media pembelajaran untuk membantu memahami bagaimana sebuah pesan dapat mengalami transformasi melalui algoritma kriptografi.

Tidak hanya menampilkan hasil akhir, aplikasi juga menampilkan **proses perhitungan**, sehingga pengguna dapat melihat bagaimana:

```text
Plaintext
    ↓
Transformasi
    ↓
Perhitungan
    ↓
Ciphertext
```

Hal ini terutama digunakan untuk membantu memahami perbedaan antara:

* Substitusi karakter
* Pergeseran alfabet
* Penggunaan key
* Operasi XOR
* Representasi bit dan byte
* Keystream
* LFSR
* Kombinasi beberapa algoritma


---

## 👨‍💻 Developer

**SudahTapiBelum**

> Interactive Cryptography Lab

Project ini dibuat sebagai media pembelajaran dan demonstrasi konsep **algoritma kriptografi** berbasis web.

---

## 🔗 Link

🌐 **Live Demo:**
https://kriptoasyk.netlify.app

---

<p align="center">
  🔐 <strong>KriptoAsik</strong> — Learn Cryptography Interactively
</p>
