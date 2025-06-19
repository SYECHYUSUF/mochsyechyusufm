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
description: "Teka-teki backtracking klasik: Menempatkan N ratu pada papan catur
  N×N tanpa saling menyerang"
title: Masalah N-Queen
image: /articles/7.jpeg
---

# N QUEENS PROBLEM

```md
# Apa itu Masalah N-Queen?

**Masalah N-Queen** adalah sebuah teka-teki klasik dalam ilmu komputer yang menanyakan:

> "Bagaimana cara menempatkan **N ratu** pada papan catur **N×N** sehingga **tidak ada dua ratu yang saling menyerang**?"

Artinya, tidak ada dua ratu yang berada dalam **baris**, **kolom**, atau **diagonal** yang sama.

---

## Sejarah Singkat

Masalah ini pertama kali diperkenalkan oleh **Max Bezzel** pada tahun **1848** dan telah menjadi:
- 🔄 Contoh klasik untuk **algoritma backtracking**
- 🧠 Pertanyaan umum dalam **wawancara teknis**
- 🎓 Materi pengajaran **rekursi dan constraint solving**
- 🔬 Topik riset dalam **AI dan optimisasi kombinatorial**

---

## Aturan & Kendala

### 🔁 Pergerakan Ratu Catur
Ratu dapat menyerang:
- Secara **horizontal** (baris)
- Secara **vertikal** (kolom)
- Secara **diagonal** (↘ dan ↙)

### ✅ Syarat Solusi:
- Tepat **N ratu** ditempatkan di papan **N×N**
- Tidak ada dua ratu yang berada:
  - Pada baris yang sama
  - Pada kolom yang sama
  - Pada diagonal yang sama

---

## Contoh Masalah: 4-Queen

Salah satu solusi untuk **N=4**:

```

. Q . . . . . Q Q . . . . . Q .

````md

Ada **2 solusi fundamental** untuk N=4 (tanpa rotasi dan refleksi).

---

## Pendekatan Penyelesaian: Backtracking

Langkah-langkah:
1. Tempatkan ratu **satu per satu** di **setiap kolom**.
2. Coba semua baris di kolom saat ini.
3. Untuk setiap posisi:
   - ✅ Periksa apakah aman (tidak diserang ratu lain).
   - Jika aman, lanjut ke kolom berikutnya.
   - Jika tidak, **backtrack** (kembali ke langkah sebelumnya).

### 💡 Optimalisasi
Saat memeriksa posisi `(row, col)`:
- Hanya perlu memeriksa ratu yang **sudah ditempatkan di kolom-kolom kiri**.

---

## Implementasi Python

```python
def solve_n_queens(n):
    def is_safe(board, row, col):
        for i in range(col):
            if board[row][i] == 1:
                return False
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False
        for i, j in zip(range(row, n), range(col, -1, -1)):
            if board[i][j] == 1:
                return False
        return True

    def solve_util(board, col):
        if col >= n:
            solutions.append([row[:] for row in board])
            return True
        res = False
        for i in range(n):
            if is_safe(board, i, col):
                board[i][col] = 1
                res = solve_util(board, col + 1) or res
                board[i][col] = 0
        return res

    solutions = []
    board = [[0] * n for _ in range(n)]
    solve_util(board, 0)
    return solutions

# Contoh
n = 4
solutions = solve_n_queens(n)
print(f"Jumlah solusi untuk {n}-Queen:", len(solutions))
for sol in solutions:
    for row in sol:
        print(' '.join('Q' if cell else '.' for cell in row))
    print()
````

## Implementasi JavaScript

```md
function solveNQueens(n) {
    const solutions = [];

    function isSafe(board, row, col) {
        for (let i = 0; i < col; i++) {
            if (board[row][i] === 1) return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 1) return false;
        }
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 1) return false;
        }
        return true;
    }

    function solveUtil(board, col) {
        if (col === n) {
            solutions.push(board.map(row => [...row]));
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;
                solveUtil(board, col + 1);
                board[i][col] = 0;
            }
        }
    }

    const board = Array(n).fill().map(() => Array(n).fill(0));
    solveUtil(board, 0);
    return solutions;
}

// Contoh
const solutions = solveNQueens(4);
console.log("Jumlah solusi:", solutions.length);
solutions.forEach((sol, idx) => {
    console.log(`Solusi ${idx + 1}:`);
    console.log(sol.map(row => row.map(c => c ? "Q" : ".").join(" ")).join("\n"));
});
```

## Kompleksitas Algoritma

### ⏱ Waktu:

- **O(N!)** pada kasus terburuk (karena percobaan kombinasi posisi)
- Dapat dioptimalkan menggunakan bitmask dan pruning

### 🧠 Ruang:

- **O(N²)** untuk menyimpan papan
- Dapat dikurangi menjadi **O(N)** hanya dengan array posisi per kolom

## Optimisasi & Variasi

### 🔧 Optimisasi:

- **Bitmasking**: Representasi baris, kolom, dan diagonal dalam bentuk bit
- **Symmetry Breaking**: Kurangi solusi duplikat dengan membatasi pilihan awal
- **Heuristik MRV (Minimum Remaining Value)**: Prioritaskan baris dengan pilihan terbatas

### 🔁 Variasi:

- **N-Bishop** atau **N-Rook**: Hanya pergerakan tertentu yang diperbolehkan
- **Superqueen**: Gabungan ratu dan kuda
- **3D N-Queen**: Penempatan ratu di papan kubus 3D

## Aplikasi Dunia Nyata

- ✈️ **Penjadwalan bandara**: Menempatkan pesawat agar tidak terjadi konflik landasan
- 🔍 **Constraint satisfaction problems (CSP)**: Dalam AI dan optimasi
- 🔩 **Pengujian VLSI**: Untuk merancang sirkuit terintegrasi
- 🧮 **Pengajaran algoritma**: Materi dasar dalam pemrograman kompetitif dan rekursi

## Kesimpulan

Masalah **N-Queen** adalah contoh klasik yang indah dari **backtracking** dan **constraint solving**. Ia sederhana untuk dipahami, namun cukup kompleks untuk dijadikan latihan pemrograman yang menantang. Banyak algoritma lanjutan lahir dari pendekatan dasar yang digunakan dalam menyelesaikan N-Queen.

> 🧠 **Tip**: Latih dengan N kecil (mis. N=4 atau 5) sebelum mencoba optimisasi untuk N besar (N > 10).
