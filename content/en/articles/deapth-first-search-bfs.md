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
description: Selami dunia penjelajahan grafik secara mendalam.
title: Memahami Algoritma Depth-First Search (DFS)
image: /articles/3.jpeg
---

# DEAPTH FIRST SEARCH (BFS)

```markdown
# Apa itu Algoritma Depth-First Search (DFS)?

**Depth-First Search (DFS)** adalah algoritma untuk melintasi atau mencari elemen dalam struktur data seperti **pohon** atau **grafik**. DFS memulai penelusuran dari node akar (atau node yang dipilih) dan menjelajah sejauh mungkin di sepanjang setiap cabang sebelum melakukan *backtrack*.

> 🎯 Analoginya seperti menjelajah labirin: ikuti satu jalan hingga mentok, lalu kembali ke percabangan sebelumnya dan coba jalur lain.

---

## Aplikasi DFS

DFS digunakan dalam berbagai bidang ilmu komputer, di antaranya:

- 🔍 **Pencarian jalur**: Menemukan rute antara dua simpul dalam graf.
- 🔁 **Deteksi siklus**: Mengidentifikasi apakah graf mengandung siklus.
- 📊 **Pengurutan topologis**: Alternatif untuk Algoritma Kahn.
- 🔗 **Menemukan komponen terhubung** dalam graf tak berarah.
- 🧩 **Penyelesaian puzzle**: Contohnya Sudoku atau labirin.
- 🌐 **Analisis jaringan**: Menjelajahi struktur koneksi.

---

## Cara Kerja Algoritma DFS

DFS dapat diimplementasikan secara **rekursif** atau **iteratif menggunakan stack**.

### 1. Inisialisasi:

- Buat `visited[]` untuk menandai node yang sudah dikunjungi.
- Mulai dari `start node`.
- Tandai node sebagai dikunjungi.

### 2. Penjelajahan:

- Ambil node dari stack atau parameter rekursif.
- Proses node (misalnya: cetak, simpan).
- Untuk setiap tetangga yang belum dikunjungi:
  - Tandai sebagai dikunjungi.
  - Tambahkan ke stack atau panggil DFS secara rekursif.

### 3. Backtracking:

- Jika semua tetangga sudah dikunjungi, kembali ke node sebelumnya.

---

## Contoh Kasus

Grafik:
```

```js
A
```

/ B C / \ D E F

````js

**Tujuan**: Jelajahi graf menggunakan DFS dari node A.

**Urutan Penjelajahan (Output)**: `A, B, D, E, C, F`

Langkah-langkah DFS:
1. DFS(A) → `A`
2. DFS(B) → `B`
3. DFS(D) → `D` → backtrack ke B
4. DFS(E) → `E` → backtrack ke B → backtrack ke A
5. DFS(C) → `C`
6. DFS(F) → `F`

---

## Implementasi DFS dalam C++

```cpp
#include <iostream>
#include <vector>
#include <stack>

std::vector<std::vector<int>> adj;
std::vector<bool> visited;

// DFS Rekursif
void dfsRecursive(int u) {
    visited[u] = true;
    std::cout << u << " ";

    for (int v : adj[u]) {
        if (!visited[v]) dfsRecursive(v);
    }
}

// DFS Iteratif
void dfsIterative(int startNode) {
    std::vector<bool> localVisited(adj.size(), false);
    std::stack<int> s;

    s.push(startNode);
    localVisited[startNode] = true;

    while (!s.empty()) {
        int u = s.top();
        s.pop();

        std::cout << u << " ";

        for (int i = adj[u].size() - 1; i >= 0; --i) {
            int v = adj[u][i];
            if (!localVisited[v]) {
                localVisited[v] = true;
                s.push(v);
            }
        }
    }
}

int main() {
    int numNodes = 6; // A=0, B=1, C=2, D=3, E=4, F=5
    adj.resize(numNodes);
    visited.resize(numNodes, false);

    // Menyusun graf tidak berarah
    adj[0] = {1, 2}; // A → B, C
    adj[1] = {0, 3, 4}; // B → A, D, E
    adj[2] = {0, 5}; // C → A, F
    adj[3] = {1}; // D → B
    adj[4] = {1}; // E → B
    adj[5] = {2}; // F → C

    std::cout << "DFS Rekursif: ";
    dfsRecursive(0);
    std::cout << "\n";

    std::cout << "DFS Iteratif: ";
    dfsIterative(0);
    std::cout << "\n";

    return 0;
}
````

## Kelebihan dan Kekurangan

### ✅ Kelebihan DFS:

- **Sederhana & Efisien**: Mudah diimplementasikan.
- **Memori rendah** untuk graf luas dan dangkal.
- Cocok untuk:
  - Deteksi siklus
  - Pengurutan topologis
  - Komponen terhubung
- Dapat menemukan **salah satu jalur** antara dua node.

### ❌ Kekurangan DFS:

- ❌ **Tidak optimal** untuk jalur terpendek.
- ❌ Bisa masuk **loop tak terbatas** jika tidak ada `visited`.
- ❌ Tidak cocok untuk graf berbobot negatif.

> Kompleksitas waktu DFS adalah **O(V + E)**.

## Kesimpulan

Algoritma DFS adalah salah satu teknik dasar namun sangat powerful dalam pemrosesan graf. Cocok untuk berbagai aplikasi dari penelusuran, analisis struktur, hingga penyelesaian puzzle.

> ⚙️ Meskipun tidak cocok untuk semua jenis masalah (seperti jalur terpendek), DFS wajib dikuasai oleh siapa pun yang mempelajari algoritma dan struktur data.
