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
title: Mengenal Algoritma Breadth-First Search (BFS)
description: BFS adalah algoritma penelusuran graf yang menjelajahi simpul
  tingkat demi tingkat, memastikan semua tetangga pada tingkat saat ini
  dikunjungi sebelum pindah ke tingkat berikutnya.
image: /articles/4.jpeg
---

# BREADTH FIRTS SEARCH

```md
# Apa itu Algoritma Breadth-First Search (BFS)?

**Breadth-First Search (BFS)** adalah algoritma pencarian dan penelusuran pada struktur data **grafik** atau **pohon**. BFS menjelajahi simpul (node) grafik dengan memulai dari node awal, lalu mengunjungi semua tetangga terdekat terlebih dahulu sebelum bergerak ke level berikutnya.

> 🔍 BFS menelusuri secara **melebar**, bukan menyelam seperti DFS.

---

## Aplikasi BFS

BFS banyak digunakan dalam berbagai masalah komputer, antara lain:

- 🔁 **Menemukan jalur terpendek** dalam graf tak berbobot.
- 🔍 **Pencarian elemen** dalam pohon atau graf.
- 🌐 **Analisis jaringan**: Menentukan jarak antar simpul.
- 🔧 **Pemecahan puzzle** seperti Rubik, Sudoku, atau pencarian labirin.
- 📶 **Broadcasting**: Menyebarkan informasi dari satu node ke semua node.

---

## Cara Kerja BFS

### Struktur Pendukung:
- **Queue (antrian)**: Untuk mengatur urutan simpul yang akan dieksplorasi.
- **Visited[]**: Untuk menandai simpul yang sudah dikunjungi agar tidak dikunjungi dua kali.

### Langkah-langkah BFS:

1. Masukkan `start node` ke queue dan tandai sebagai dikunjungi.
2. Selama queue tidak kosong:
   - Ambil node dari depan queue (dequeue).
   - Proses node (misalnya cetak atau simpan hasil).
   - Tambahkan semua tetangga **yang belum dikunjungi** ke queue dan tandai sebagai dikunjungi.

---

## Contoh Kasus

Grafik:
```

```js
A
```

/ B C / \ D E F

````md

**Tujuan**: Lakukan penelusuran BFS dari node `A`.

### Urutan Penjelajahan:
`A → B → C → D → E → F`

**Langkah BFS**:
1. Mulai dari A → `visited[A] = true`, queue: `[A]`
2. Dequeue A → tetangga B, C → queue: `[B, C]`
3. Dequeue B → tetangga D, E → queue: `[C, D, E]`
4. Dequeue C → tetangga F → queue: `[D, E, F]`
5. Dequeue D → tidak ada tetangga baru
6. Dequeue E → tidak ada tetangga baru
7. Dequeue F → selesai

---

## Implementasi BFS dalam C++

```cpp
#include <iostream>
#include <vector>
#include <queue>

std::vector<std::vector<int>> adj;
std::vector<bool> visited;

void bfs(int startNode) {
    std::queue<int> q;
    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int u = q.front();
        q.pop();
        std::cout << u << " ";

        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}

int main() {
    int numNodes = 6; // A=0, B=1, C=2, D=3, E=4, F=5
    adj.resize(numNodes);
    visited.resize(numNodes, false);

    // Membangun graf (tidak berarah)
    adj[0] = {1, 2};     // A → B, C
    adj[1] = {0, 3, 4};  // B → A, D, E
    adj[2] = {0, 5};     // C → A, F
    adj[3] = {1};        // D → B
    adj[4] = {1};        // E → B
    adj[5] = {2};        // F → C

    std::cout << "BFS dari node A (0): ";
    bfs(0); // Start dari A (index 0)
    std::cout << "\n";

    return 0;
}
````

## Kelebihan dan Kekurangan

### ✅ Kelebihan BFS:

- **Menemukan jalur terpendek** dalam graf tak berbobot.
- **Bekerja baik pada graf level-wise**, misalnya puzzle, pohon.
- Efektif untuk menjelajahi semua node dalam urutan terstruktur.

### ❌ Kekurangan BFS:

- Memakan **memori besar** jika graf memiliki banyak node di level yang sama.
- Kurang cocok untuk graf sangat dalam (deep tree) dibanding DFS.
- **Lebih lambat** dari DFS pada graf dengan solusi dalam jalur panjang tunggal.

> Kompleksitas waktu BFS adalah **O(V + E)**, di mana `V` = simpul, `E` = sisi.

## Kesimpulan

**Breadth-First Search (BFS)** adalah algoritma fundamental yang sangat berguna dalam berbagai aplikasi komputer, terutama ketika kita ingin mengeksplorasi data secara level-by-level atau mencari solusi tercepat.

> BFS sangat cocok untuk pencarian jalur terpendek dan eksplorasi yang merata, menjadikannya pelengkap ideal dari DFS.
