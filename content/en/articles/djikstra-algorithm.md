---
tags: []
ogImage:
  props: {}
schemaOrg: {}
head:
  script: []
sitemap:
  videos: []
  images: []
  lastmod: 2025-06-13T00:00:00.000Z
description: Selami dunia pencarian jalur terpendek dengan salah satu algoritma
  paling fundamental.
title: Memahami Algoritma Dijkstra
image: /articles/1.jpeg
date: 19/06/2025
readingTime: "10"
---

Algoritma Dijkstra, yang dinamai dari penemunya Edsger W. Dijkstra, adalah salah satu algoritma **pencarian jalur terpendek (shortest path algorithm)** yang paling terkenal dan banyak digunakan. Algoritma ini dirancang untuk menemukan jalur terpendek antara satu titik awal (disebut "sumber") ke semua titik lainnya dalam sebuah graf berbobot (weighted graph).

### Apa itu Graf Berbobot?

Sebelum masuk lebih dalam, penting untuk memahami apa itu **graf berbobot**. Dalam konteks algoritma Dijkstra:

- **Node (Titik/Simpul)**: Merepresentasikan lokasi atau entitas. Misalnya, kota-kota dalam peta, atau server dalam jaringan komputer.
- **Edge (Sisi/Tepi)**: Merepresentasikan koneksi atau hubungan antara dua node.
- **Bobot (Weight)**: Nilai numerik yang terkait dengan setiap *edge*. Bobot ini bisa berupa jarak, waktu, biaya, atau hambatan. Algoritma Dijkstra mencari jalur di mana total bobot *edge* yang dilalui adalah yang terkecil.

**Contoh Sederhana:** Bayangkan peta jalan. Kota adalah *node*, jalan adalah *edge*, dan jarak antar kota adalah *bobot*. Algoritma Dijkstra bisa membantumu menemukan rute terpendek dari rumahmu ke semua tempat tujuan lain di peta.

### Bagaimana Cara Kerja Algoritma Dijkstra?

Algoritma Dijkstra bekerja secara **rakus (greedy)**, artinya pada setiap langkah, ia membuat pilihan yang tampak terbaik saat itu dengan harapan akan membawa ke solusi optimal secara keseluruhan. Berikut adalah langkah-langkah intinya:

1. **Inisialisasi**:
   - Setiap *node* diberikan **jarak sementara (tentative distance)**. Jarak ke *node* sumber diatur ke 0, dan semua *node* lainnya diatur ke tak hingga (∞).
   - Sebuah set *node* yang belum dikunjungi (atau belum "diselesaikan") dibuat dan awalnya berisi semua *node* dalam graf.
2. **Pemilihan** ***Node*** **Saat Ini**:
   - Dari set *node* yang belum dikunjungi, pilih *node* dengan jarak sementara terkecil. Ini akan menjadi **current node** atau *node* yang sedang "diperiksa".
3. **Pembaruan Jarak Tetangga**:
   - Untuk setiap **tetangga** dari *current node*:
     - Hitung jarak baru dari *node* sumber ke tetangga tersebut melalui *current node*. Caranya adalah **jarak** ***current node*** **(dari sumber) + bobot** ***edge*** **dari** ***current node*** **ke tetangga**.
     - Jika jarak baru ini lebih kecil dari jarak sementara yang sudah ada untuk tetangga tersebut, **perbarui jarak sementara tetangga** dan catat *current node* sebagai **pendahulu (predecessor)** dari tetangga tersebut. Ini penting untuk merekonstruksi jalur nantinya.
4. **Tandai** ***Node*** **Sebagai Telah Dikunjungi**:
   - Setelah semua tetangga *current node* diperiksa dan jaraknya diperbarui jika perlu, *current node* dihapus dari set *node* yang belum dikunjungi. Ini berarti jalur terpendek ke *node* tersebut telah "ditemukan" dan "final".
5. **Ulangi**:
   - Langkah 2 sampai 4 diulang sampai set *node* yang belum dikunjungi kosong, atau sampai *node* tujuan yang spesifik telah "diselesaikan" (jika kamu hanya mencari jalur ke satu *node* tertentu).

### Ilustrasi Sederhana:

Misalkan kita punya graf ini:

```js
A --(1)--> B --(3)--> D
|           ^          ^
(4)         |          |
|           (1)        (2)
v           |          |
C --(1)-----+          E
```

Dan kita ingin mencari jalur terpendek dari **A** ke semua *node* lainnya.

- **Inisialisasi**:
  - A: 0
  - B: ∞
  - C: ∞
  - D: ∞
  - E: ∞
  - Belum Dikunjungi: {A, B, C, D, E}
- **Langkah 1**: Pilih A (jarak 0).
  - Perbarui B: dist(A) + w(A,B) = 0 + 1 = 1. dist(B) = 1. Pendahulu B = A.
  - Perbarui C: dist(A) + w(A,C) = 0 + 4 = 4. dist(C) = 4. Pendahulu C = A.
  - A selesai. Belum Dikunjungi: {B, C, D, E}
- **Langkah 2**: Pilih B (jarak 1).
  - Perbarui D: dist(B) + w(B,D) = 1 + 3 = 4. dist(D) = 4. Pendahulu D = B.
  - Perbarui C: dist(B) + w(B,C) = 1 + 1 = 2. dist(C) saat ini 4. Karena 2 < 4, perbarui dist(C) = 2. Pendahulu C = B.
  - B selesai. Belum Dikunjungi: {C, D, E}
- **Langkah 3**: Pilih C (jarak 2).
  - C tidak punya tetangga yang belum dikunjungi.
  - C selesai. Belum Dikunjungi: {D, E}
- **Langkah 4**: Pilih D (jarak 4).
  - Perbarui E: dist(D) + w(D,E) = 4 + 2 = 6. dist(E) = 6. Pendahulu E = D.
  - D selesai. Belum Dikunjungi: {E}
- **Langkah 5**: Pilih E (jarak 6).
  - E tidak punya tetangga yang belum dikunjungi.
  - E selesai. Belum Dikunjungi: {}

**Hasil Akhir (Jarak Terpendek dari A):**

- A: 0
- B: 1 (A -> B)
- C: 2 (A -> B -> C)
- D: 4 (A -> B -> D)
- E: 6 (A -> B -> D -> E)

### Kapan Menggunakan Dijkstra?

Algoritma Dijkstra sangat berguna dalam berbagai skenario:

- **Pencarian Rute GPS**: Menemukan jalur terpendek atau tercepat antar lokasi.
- **Jaringan Komputer**: Menemukan jalur terbaik untuk paket data.
- **Logistik dan Pengiriman**: Mengoptimalkan rute pengiriman barang.
- **Game Development**: Menemukan jalur untuk AI (Artificial Intelligence) musuh atau karakter.

### Batasan Algoritma Dijkstra

Penting untuk dicatat bahwa Dijkstra **tidak dapat bekerja dengan** ***edge*** **yang memiliki bobot negatif**. Jika grafmu memiliki bobot negatif, kamu perlu menggunakan algoritma lain seperti **Bellman-Ford**. Hal ini karena bobot negatif dapat mengacaukan logika "rakus" Dijkstra, di mana jalur yang awalnya terlihat lebih panjang bisa menjadi lebih pendek setelah melewati *edge* berbobot negatif.

Semoga penjelasan ini cukup jelas dan informatif untuk artikelmu! Apakah ada bagian lain yang ingin kamu tambahkan atau jelaskan lebih lanjut?
