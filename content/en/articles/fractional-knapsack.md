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
description: Pelajari bagaimana memaksimalkan nilai dalam knapsack dengan
  kapasitas terbatas menggunakan pendekatan greedy.
image: /articles/9.jpeg
title: Memahami Fractional Knapsack Problem
---

# FRACTIONAL KNAPSACK

````md
# 🎒 Apa itu Fractional Knapsack Problem?

**Fractional Knapsack Problem** adalah masalah optimisasi klasik yang menggunakan **algoritma greedy** untuk memilih item dengan **nilai maksimum** yang dapat dimasukkan ke dalam tas (knapsack) dengan kapasitas terbatas.

🔄 **Berbeda dengan 0/1 Knapsack**, dalam masalah ini **item dapat diambil sebagian (fraksional)**.

---

## 💡 Aplikasi Fractional Knapsack

- 💰 Manajemen anggaran dan sumber daya terbatas
- 📈 Pemilihan investasi dalam portofolio
- 🚛 Logistik dan distribusi barang
- 🧮 Pengolahan data berdasarkan prioritas

---

## ⚙️ Cara Kerja Algoritma

1. **Hitung rasio nilai/berat (value/weight)** untuk setiap item
2. **Urutkan item** berdasarkan rasio tersebut secara menurun (descending)
3. **Pilih item secara greedy**:
   - Jika seluruh berat item ≤ kapasitas sisa → ambil penuh
   - Jika berat item > kapasitas sisa → ambil sebagian (fraksi)
4. **Akumulasikan nilai** dan kurangi kapasitas

---

## 📊 Contoh Masalah

Kita punya knapsack dengan kapasitas **50 unit**, dan 3 item berikut:

| Item | Nilai | Berat | Rasio Nilai/Berat |
|------|-------|--------|-------------------|
| I1   | 60    | 10     | 6.0               |
| I2   | 100   | 20     | 5.0               |
| I3   | 120   | 30     | 4.0               |

### 🔢 Langkah-langkah:
- Urutkan: I1 (6), I2 (5), I3 (4)
- Ambil I1 penuh (10): nilai += 60, kapasitas = 40
- Ambil I2 penuh (20): nilai += 100, kapasitas = 20
- Ambil 2/3 dari I3 (20 dari 30): nilai += 80
- ✅ **Total nilai: 60 + 100 + 80 = 240**

---

## 🐍 Implementasi Python

```python
def fractional_knapsack(values, weights, capacity):
    items = [(v / w, v, w) for v, w in zip(values, weights)]
    items.sort(reverse=True)  # Urutkan berdasarkan rasio
    
    total_value = 0
    for ratio, value, weight in items:
        if capacity >= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += value * (capacity / weight)
            break
    return total_value

# Contoh penggunaan
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50
print("Nilai maksimum:", fractional_knapsack(values, weights, capacity))
````

## 🖥️ Implementasi JavaScript

```md
function fractionalKnapsack(values, weights, capacity) {
    const items = values.map((v, i) => ({
        ratio: v / weights[i],
        value: v,
        weight: weights[i],
    }));

    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;

    for (let item of items) {
        if (capacity >= item.weight) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += item.value * (capacity / item.weight);
            break;
        }
    }

    return totalValue;
}

// Contoh penggunaan
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log("Nilai maksimum:", fractionalKnapsack(values, weights, capacity));
```

## ⏱️ Kompleksitas & Optimasi

### ⏳ Waktu: **O(n log n)**

- Karena pengurutan berdasarkan rasio

### 💾 Ruang: **O(n)**

- Untuk menyimpan daftar item dan hasil

### ⚡ Optimasi:

- **In-place sorting** → hemat memori
- **Parallel sort** → untuk skala besar
- **Pre-sorting** → jika data sudah terurut

## ✅ Kelebihan

- Greedy, efisien, dan mudah diimplementasikan
- Menjamin **solusi optimal**
- Mendukung **pengambilan fraksional**

## ❌ Kekurangan

- Tidak cocok untuk item yang harus diambil utuh (gunakan 0/1 Knapsack)
- Perlu sorting terlebih dahulu
- Hanya mengoptimalkan berdasarkan rasio, tidak mempertimbangkan kombinasi

## 🎯 Kesimpulan

**Fractional Knapsack Problem** adalah contoh sempurna penggunaan algoritma greedy untuk **masalah optimisasi nilai maksimum** dalam batasan kapasitas. Dengan memilih berdasarkan rasio nilai per berat, algoritma ini menawarkan efisiensi tinggi dan solusi optimal untuk berbagai aplikasi dunia nyata.

> 🚀 *Simple yet powerful. Fractional Knapsack shows how greedy choice leads to global optimum when conditions are right.*
