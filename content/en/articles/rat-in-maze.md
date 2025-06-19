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
description: Pelajari bagaimana menemukan jalur keluar untuk tikus dalam labirin
  menggunakan backtracking.
title: Memahami Algoritma Rat in Maze
image: /articles/5.jpeg
---

# RAT IN MAZE

```markdown
# Apa itu Algoritma Rat in a Maze?

**Rat in a Maze** adalah salah satu masalah klasik dalam pemrograman dan algoritma pencarian jalur. Tujuan dari algoritma ini adalah untuk menemukan **semua jalur** yang memungkinkan dari **titik awal (biasanya kiri atas)** ke **tujuan akhir (biasanya kanan bawah)** dalam sebuah labirin dua dimensi yang diwakili oleh **matriks**.

Setiap sel dalam matriks bisa:
- `1` → jalan (bisa dilewati)
- `0` → dinding (tidak bisa dilewati)

> 🐭 **Tikus** memulai dari `(0, 0)` dan ingin mencapai `(N-1, N-1)` hanya dengan bergerak ke **atas (U), bawah (D), kiri (L), atau kanan (R)** dan tidak boleh melewati sel yang sudah dilewati.

---

## Contoh Matriks (Maze)

```

maze = \[ \[1, 0, 0, 0], \[1, 1, 0, 1], \[0, 1, 0, 0], \[1, 1, 1, 1] ]

````js

**Tujuan**: Temukan semua jalur dari `(0, 0)` ke `(3, 3)`. Dalam contoh ini, salah satu solusi bisa berupa jalur `DDRDRR`.

---

## Strategi Penyelesaian

- Gunakan algoritma **Backtracking** untuk menjelajahi semua kemungkinan jalur.
- Hanya lanjutkan ke sel jika:
  - Berada dalam batas matriks.
  - Nilainya `1` (jalan).
  - Belum dikunjungi.
- Simpan **jalur saat ini** sebagai string (misalnya "DDR").

---

## Langkah-langkah Algoritma

1. Buat matriks `visited[][]` untuk menandai sel yang telah dikunjungi.
2. Buat fungsi `solveMaze(x, y, path)`:
   - Jika mencapai tujuan `(N-1, N-1)`, simpan `path`.
   - Lanjutkan ke arah: Down (D), Left (L), Right (R), Up (U).
   - Setelah mencoba satu arah, *backtrack* (reset visited).

---

## Implementasi (C++)

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

void solve(int x, int y, std::vector<std::vector<int>>& maze, int n,
           std::vector<std::vector<bool>>& visited, std::string path,
           std::vector<std::string>& result) {
    // Jika tujuan tercapai
    if (x == n - 1 && y == n - 1) {
        result.push_back(path);
        return;
    }

    // Arah: D, L, R, U
    int dx[] = {1, 0, 0, -1};
    int dy[] = {0, -1, 1, 0};
    char dir[] = {'D', 'L', 'R', 'U'};

    for (int i = 0; i < 4; ++i) {
        int newX = x + dx[i], newY = y + dy[i];

        if (newX >= 0 && newY >= 0 && newX < n && newY < n &&
            maze[newX][newY] == 1 && !visited[newX][newY]) {
            visited[newX][newY] = true;
            solve(newX, newY, maze, n, visited, path + dir[i], result);
            visited[newX][newY] = false; // Backtrack
        }
    }
}

std::vector<std::string> findPaths(std::vector<std::vector<int>>& maze, int n) {
    std::vector<std::string> result;
    std::vector<std::vector<bool>> visited(n, std::vector<bool>(n, false));

    if (maze[0][0] == 1) {
        visited[0][0] = true;
        solve(0, 0, maze, n, visited, "", result);
    }

    std::sort(result.begin(), result.end()); // opsional: urutkan hasil
    return result;
}

int main() {
    std::vector<std::vector<int>> maze = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {0, 1, 0, 0},
        {1, 1, 1, 1}
    };

    int n = maze.size();
    std::vector<std::string> paths = findPaths(maze, n);

    std::cout << "Semua jalur yang mungkin:\n";
    for (const std::string& path : paths) {
        std::cout << path << "\n";
    }

    return 0;
}
````

## Kelebihan dan Kekurangan

### ✅ Kelebihan:

- Menemukan **semua solusi** yang mungkin dari start ke goal.
- Cocok untuk belajar backtracking dan logika rekursi.
- Bisa dimodifikasi untuk menemukan **jalur terpendek** (dengan BFS) atau **jumlah total jalur**.

### ❌ Kekurangan:

- Tidak efisien untuk maze besar: **O(4^N²)** kemungkinan.
- Tidak otomatis memilih jalur terpendek.
- Bisa memakan banyak memori (rekursi dalam).

## Kesimpulan

Algoritma **Rat in a Maze** adalah latihan penting dalam pemrograman rekursif dan backtracking. Ia memperkenalkan cara berpikir **eksplorasi semua kemungkinan** dengan penelusuran sistematis dan *backtrack* untuk kembali ke titik sebelumnya saat buntu.

> 🧠 Sangat cocok untuk mengembangkan pemahaman tentang DFS, backtracking, dan pengambilan keputusan bertahap dalam pemrograman.
