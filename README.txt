QURBANDONG FARM - APLIKASI HP (PWA) UNTUK GITHUB PAGES
=======================================================

Isi folder ini = aplikasi yang dipasang di HP. Data tetap di Google Sheets; Apps Script (WebApp.gs) jadi servernya.
Halaman aplikasi dilayani dari GitHub Pages, jadi banner biru "Aplikasi ini dibuat oleh pengguna Google Apps Script" tidak muncul.

A. SIAPKAN SERVER (sekali saja, di Apps Script)
   1. Tempel WebApp.gs, Qurbandong_Script.gs, Index.html terbaru di proyek Apps Script yang menempel di spreadsheet QDF.
   2. Deploy > Manage deployments > Edit (ikon pensil) > Version: New version > Deploy.
      (Execute as: Me, Who has access: Anyone.)
   3. Salin link yang berakhiran /exec  -> inilah ALAMAT SERVER.

B. UNGGAH KE GITHUB (lewat browser, tanpa program apa pun)
   1. Buka https://github.com/new . Repository name: qurbandong-app . Pilih Public . Klik Create repository.
   2. Di halaman repo kosong klik "uploading an existing file".
   3. Ekstrak zip ini dulu di HP/komputer, lalu seret SEMUA isinya (index.html, sw.js, manifest.webmanifest, config.js,
      4 file .png, README.txt) ke kotak unggah. Jangan unggah file .zip-nya.
   4. Klik Commit changes.
   5. Settings > Pages > Build and deployment > Source: "Deploy from a branch" > Branch: main, folder: / (root) > Save.
   6. Tunggu 1-2 menit. Alamat aplikasi: https://NAMA-GITHUB-ANDA.github.io/qurbandong-app/

C. HUBUNGKAN KE SERVER
   Cara termudah (tanpa edit file): bagikan link ini ke staf dan buka sekali di HP:
      https://NAMA-GITHUB-ANDA.github.io/qurbandong-app/index.html?api=ALAMAT_SERVER_EXEC
   Alamat server tersimpan otomatis di HP. Atau isi apiUrl di config.js (ikon pensil di GitHub) lalu Commit.

D. PASANG DI HP
   Android (Chrome): menu titik tiga > Instal aplikasi / Tambahkan ke layar utama. iPhone (Safari): Bagikan > Tambahkan ke Layar Utama.
   Hapus pintasan lama dari script.google.com agar tidak tertukar. Masuk dengan PIN pengelola / staf / investor.

E. UPDATE
   Setelah ada Index.html baru: unggah ulang file dari paket baru (index.html + sw.js) ke repo. Versi cache sekarang qf-v19;
   tutup lalu buka aplikasi dua kali agar HP memuat versi baru.

CATATAN
   - Repo Public berarti kode aplikasi terlihat orang lain. Data tidak terlihat; setiap akses butuh PIN. Pakai PIN yang kuat.
   - GitHub Pages untuk repo privat butuh paket berbayar.
