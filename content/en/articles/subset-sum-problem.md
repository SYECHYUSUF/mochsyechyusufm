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
title: Masalah Subset Sum
description: "Masalah klasik dalam ilmu komputer: Menentukan apakah ada subset
  dari himpunan bilangan yang jumlahnya sama dengan nilai target tertentu"
image: /articles/6.jpeg
---

# SUBSET SUM PROBLEM

````markdown
# Masalah Subset Sum: Apakah Ada Subset yang Jumlahnya Sama dengan Target?

Masalah **Subset Sum** adalah salah satu masalah klasik dalam **ilmu komputer dan teori algoritma**, khususnya dalam kategori **NP-Complete Problem**. Tujuan dari masalah ini adalah untuk menentukan apakah terdapat **subset dari suatu himpunan bilangan bulat** yang **jumlah elemennya sama dengan nilai target tertentu**.

---

## Contoh Masalah

**Input**:
- Himpunan: `{3, 34, 4, 12, 5, 2}`
- Target: `9`

**Pertanyaan**:
Apakah ada subset dari elemen-elemen di atas yang jika dijumlahkan menghasilkan `9`?

**Jawaban**:
✅ Ya, subset `{4, 5}` menghasilkan jumlah `9`.

---

## Aplikasi Nyata

Masalah ini muncul dalam berbagai konteks praktis:

- 💳 **Pemilihan kombinasi item** agar sesuai dengan kapasitas maksimum (misalnya dalam masalah knapsack).
- 💵 **Pengalokasian sumber daya** untuk mencapai target anggaran.
- 🧩 **Permainan dan puzzle logika**.
- 🔐 **Kriptografi**, terutama dalam konstruk algoritma knapsack cryptosystem.

---

## Pendekatan Penyelesaian

### 1. **Rekursi Brute-Force**
Coba semua kemungkinan subset. Kompleksitas waktu: `O(2^n)`.

### 2. **Memoization / Top-down Dynamic Programming**
Gunakan cache untuk menyimpan hasil submasalah. Kompleksitas waktu: `O(n * target)`.

### 3. **Tabulasi / Bottom-up DP**
Gunakan tabel boolean `dp[i][j]` yang menyatakan apakah mungkin mendapatkan jumlah `j` dari elemen `0...i`.

---

## Implementasi C++: Dynamic Programming

```cpp
#include <iostream>
#include <vector>

bool isSubsetSum(const std::vector<int>& nums, int target) {
    int n = nums.size();
    std::vector<std::vector<bool>> dp(n + 1, std::vector<bool>(target + 1, false));

    // Inisialisasi: target 0 bisa dicapai tanpa memilih elemen
    for (int i = 0; i <= n; i++) dp[i][0] = true;

    // Mengisi tabel DP
    for (int i = 1; i <= n; i++) {
        for (int sum = 1; sum <= target; sum++) {
            if (nums[i - 1] <= sum) {
                dp[i][sum] = dp[i - 1][sum] || dp[i - 1][sum - nums[i - 1]];
            } else {
                dp[i][sum] = dp[i - 1][sum];
            }
        }
    }

    return dp[n][target];
}

int main() {
    std::vector<int> set = {3, 34, 4, 12, 5, 2};
    int target = 9;

    if (isSubsetSum(set, target)) {
        std::cout << "Ada subset dengan jumlah sama dengan target.\n";
    } else {
        std::cout << "Tidak ada subset yang cocok.\n";
    }

    return 0;
}
````

## Visualisasi Tabel DP (Contoh)

Elemen → 0 3 34 4 12 5 2 Target 0 T T T T T T T Target 1 F F F F F F T Target 2 F F F F F F T Target 3 F T T T T T T ...

## Kelebihan dan Kekurangan

### ✅ Kelebihan:

- Memberi solusi pasti untuk masalah subset.
- Dapat dimodifikasi untuk menghitung jumlah kombinasi, mencetak subset, dsb.
- Cocok untuk **pendekatan dinamis** dan pembelajaran dasar DP.

### ❌ Kekurangan:

- Waktu eksekusi bisa **eksponensial** untuk input besar jika menggunakan brute-force.
- Memori besar jika target besar (meskipun bisa dioptimalkan ke 1D array).

## Kesimpulan

Masalah **Subset Sum** adalah dasar dari banyak algoritma optimasi dan kombinatorial. Ini juga menjadi contoh klasik dari **Dynamic Programming**, yang mengajarkan kita cara menyelesaikan masalah besar dengan memecahnya menjadi submasalah kecil.
