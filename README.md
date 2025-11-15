Nama: Sarah Nur Amalia

NIM: 24090129

Link GitHub Repository: https://github.com/SarahNurAmalia/uts-sarah-24090129.git

Link GitHub Pages: https://sarahnuramalia.github.io/uts-sarah-24090129/

Deskripsi singkat project:
Project ini adalah implementasi Panel Administrasi (Admin Panel) sederhana yang sepenuhnya dibangun menggunakan HTML, CSS, dan JavaScript
murni dengan tampilan menyerupai desain figma.
Tujuan utamanya adalah menyediakan antarmuka client-side untuk kontrol akses, pemantauan ringkas data bisnis, dan pengelolaan daftar produk,
dengan memanfaatkan konsep array of objects dan manipulasi DOM.
1. Halaman Login (index.html)
Halaman Login bertindak sebagai kontrol akses utama ke sistem. Fungsinya adalah memvalidasi kredensial pengguna yang dimasukkan (Email dan Password)
menggunakan logika JavaScript client-side murni. Jika input cocok dengan data yang valid (seperti sarahnuramaliaa@gmail.com dan 24090129), sistem akan
menyimpan status otentikasi (isLoggedIn) di localStorage dan secara otomatis mengalihkan pengguna ke Dashboard. Sebaliknya, jika otentikasi gagal, halaman
akan menampilkan pesan kesalahan tanpa melakukan redirect.

2. Halaman Dashboard (dashboard.html)
Dashboard berfungsi sebagai ringkasan eksekutif dan pusat navigasi setelah pengguna berhasil login. Fungsi utamanya adalah memastikan pengguna
terotentikasi (Auth Check menggunakan localStorage) sebelum menampilkan konten. Dashboard menggunakan JavaScript untuk menghitung dan menampilkan statistik
kunci dalam kartu Grid, seperti Total Products, Total Sales, dan Total Revenue, yang datanya diambil dari array dan object data yang sudah didefinisikan.
Halaman ini juga memiliki Sidebar yang konsisten untuk navigasi cepat ke halaman lain, termasuk tombol redirect ke List Produk.

3. Halaman List Data Produk (products.html)
Halaman ini didedikasikan untuk manajemen dan tampilan detail data produk. Fungsinya adalah mengambil array of objects yang berisi data produk dan menggunakan
Manipulasi DOM untuk merender setiap item sebagai baris dalam tabel HTML. Tampilan tabel mencakup detail seperti Nama Produk, Harga, dan Stok. Fitur inti dari
halaman ini adalah kolom Aksi yang menyediakan tombol Edit dan Delete, yang dihubungkan dengan Event Listeners JavaScript, memungkinkan interaksi sederhana seperti
menampilkan alert konfirmasi, yang menunjukkan kesiapan fungsionalitas CRUD di masa mendatang.
