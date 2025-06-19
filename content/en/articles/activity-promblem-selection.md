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
  lastmod: 2025-06-14T00:00:00.000Z
title: Memahami Activity Selection Problem
description: Pelajari bagaimana memilih aktivitas maksimum yang tidak saling
  tumpang tindih menggunakan pendekatan greedy.
image: /articles/10.jpeg
---

# ACTIVITY PROMBLEM SELECTION

````md
# 🗓️ Apa itu Activity Selection Problem?

**Activity Selection Problem** adalah masalah optimisasi klasik dalam ilmu komputer. Tujuannya adalah untuk **memilih sebanyak mungkin aktivitas** dari himpunan yang diberikan **tanpa ada yang saling tumpang tindih**, dengan setiap aktivitas memiliki waktu mulai dan selesai.

🧠 Masalah ini diselesaikan menggunakan pendekatan **greedy**, yang memilih aktivitas dengan **waktu selesai paling awal** terlebih dahulu.

---

## 📌 Aplikasi Nyata

- 📅 Penjadwalan rapat atau kelas dalam satu ruangan
- 🧑‍💼 Manajemen tugas dalam satu waktu kerja
- 🖥️ Penjadwalan proses di CPU
- 🌐 Alokasi bandwidth di jaringan

---

## 🔧 Cara Kerja Algoritma Greedy

1. **Urutkan aktivitas** berdasarkan waktu selesai secara ascending.
2. **Pilih aktivitas pertama** (dengan waktu selesai paling awal).
3. Tandai waktu selesai aktivitas ini sebagai batas terakhir.
4. Untuk setiap aktivitas berikutnya:
   - Jika waktu mulai ≥ batas terakhir → pilih aktivitas
   - Perbarui batas terakhir menjadi waktu selesai aktivitas tersebut.

📈 Algoritma ini **menjamin jumlah maksimal aktivitas** yang dapat dipilih **tanpa konflik**.

---

## 🧮 Contoh Permasalahan

### Daftar Aktivitas

| Aktivitas | Mulai | Selesai |
|-----------|--------|---------|
| A1        | 1      | 4       |
| A2        | 3      | 5       |
| A3        | 5      | 7       |
| A4        | 3      | 8       |
| A5        | 8      | 9       |

### Langkah Solusi:

1. Urutkan: A1(4), A2(5), A3(7), A4(8), A5(9)
2. Pilih A1 (selesai jam 4)
3. Lewati A2 & A4 (karena mulai < 4)
4. Pilih A3 (mulai jam 5)
5. Pilih A5 (mulai jam 8)

✅ **Solusi:** A1, A3, A5

---

## 🐍 Implementasi Python

```python
def activity_selection(start, finish):
    activities = sorted(zip(start, finish), key=lambda x: x[1])
    result = []
    last_finish_time = -1

    for s, f in activities:
        if s >= last_finish_time:
            result.append((s, f))
            last_finish_time = f

    return result

# Contoh penggunaan
start = [1, 3, 5, 3, 8]
finish = [4, 5, 7, 8, 9]
selected = activity_selection(start, finish)
print("Aktivitas yang dipilih:", selected)
````

## 🖥️ Implementasi JavaScript

```md
function activitySelection(start, finish) {
    const activities = start.map((s, i) => ({ start: s, finish: finish[i] }));
    activities.sort((a, b) => a.finish - b.finish);

    const result = [];
    let lastFinish = -1;

    for (let act of activities) {
        if (act.start >= lastFinish) {
            result.push(act);
            lastFinish = act.finish;
        }
    }

    return result;
}

// Contoh penggunaan
const start = [1, 3, 5, 3, 8];
const finish = [4, 5, 7, 8, 9];
console.log("Aktivitas yang dipilih:", activitySelection(start, finish));
```

## ⏱️ Kompleksitas & Optimasi

### ⏳ Waktu: `O(n log n)`

- Karena proses pengurutan berdasarkan waktu selesai

### 💾 Ruang: `O(n)`

- Untuk menyimpan aktivitas yang diurutkan dan hasil

### ⚡ Optimasi:

- Pre-sorting jika data sudah urut → `O(n)`
- In-place sorting → hemat memori
- Penggunaan struktur data efisien untuk jumlah besar aktivitas

## ✅ Kelebihan

- 🧠 **Sederhana & intuitif**
- 🚀 **Cepat & efisien**
- 📚 Cocok untuk pembelajaran algoritma greedy

## ❌ Kekurangan

- Tidak mendukung **aktivitas yang overlap sebagian**
- Tidak optimal jika kriteria bukan waktu selesai
- Memerlukan **pengurutan awal**

## 🎯 Kesimpulan

**Activity Selection Problem** adalah contoh klasik dari algoritma **greedy** yang bekerja sangat baik pada masalah **penjadwalan**. Dengan memilih aktivitas berdasarkan waktu selesai paling cepat, kita dapat menjadwalkan aktivitas sebanyak mungkin **tanpa konflik**.

> 🔎 *Greedy works when local optimum leads to global optimum—Activity Selection is a perfect case for that!*
