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
image: /articles/2.jpeg
title: Memahami Algoritma Kahn
description: Selami dunia pengurutan topologis dengan salah satu algoritma
  paling fundamental.
---

# KHANS' Algorithm

```md
# Apa itu Algoritma Kahn?

**Algoritma Kahn** adalah salah satu dari dua algoritma utama yang digunakan untuk melakukan **pengurutan topologis** (*topological sort*) pada sebuah **Grafik Asiklik Terarah** (*Directed Acyclic Graph - DAG*). Pengurutan topologis adalah susunan linier dari node-node sedemikian rupa sehingga untuk setiap sisi terarah (u → v), node `u` selalu muncul sebelum node `v`.

> ⚠️ Pengurutan topologis hanya bisa dilakukan jika graf tersebut adalah DAG (tidak mengandung siklus).

## Kegunaan Algoritma Kahn

Algoritma ini sangat berguna dalam berbagai skenario yang melibatkan **ketergantungan antar tugas**, seperti:

- 📋 **Perencanaan Tugas**: Menyusun urutan pekerjaan (misalnya, fondasi rumah harus selesai sebelum membangun dinding).
- 📦 **Manajemen Dependensi Paket**: Menentukan urutan instalasi paket perangkat lunak.
- 🎓 **Penyelesaian Kursus**: Menentukan urutan mata kuliah berdasarkan prasyarat.
- 🛠️ **Kompilasi Kode**: Menentukan urutan file sumber yang harus dikompilasi.

---

## Konsep Kunci: In-degree

**In-degree** (derajat masuk) dari sebuah node adalah jumlah sisi yang **masuk** ke node tersebut.

**Contoh**:
Jika ada sisi `A → B` dan `C → B`, maka **in-degree B = 2**.

Node dengan **in-degree 0** tidak memiliki prasyarat, sehingga bisa menjadi **titik awal** dalam urutan topologis.

---

## Cara Kerja Algoritma Kahn

1. **Inisialisasi**:
   - Hitung in-degree untuk setiap node.
   - Masukkan semua node dengan in-degree 0 ke dalam queue.

2. **Proses Iteratif**:
   - Selama queue tidak kosong:
     - Ambil (dequeue) node dari queue, tambahkan ke hasil.
     - Kurangi in-degree semua tetangga-nya.
     - Jika in-degree tetangga menjadi 0, tambahkan ke queue.

3. **Verifikasi (Opsional tapi Penting)**:
   - Jika jumlah node di hasil ≠ total node, maka graf memiliki **siklus**.

---

## Contoh Masalah: Urutan Mata Kuliah

**Mata Kuliah dan Prasyarat**:

- A: -
- B: A
- C: A
- D: B, C
- E: D

**Grafik Terarah**:
```

A → B → D → E ↓ ↑ → C ──┘

````md

**Urutan Eksekusi**:

1. In-degree:
   - A: 0, B: 1, C: 1, D: 2, E: 1
2. Queue awal: `[A]`
3. Urutan Topologis:
   - A → [B, C] → D → E
4. Hasil akhir: `[A, B, C, D, E]` *(atau alternatif: `[A, C, B, D, E]`)*

---

## Implementasi Algoritma Kahn (C++)

```cpp
#include <iostream>
#include <vector>
#include <queue>

std::vector<int> kahnTopologicalSort(int numNodes, const std::vector<std::vector<int>>& adj, std::vector<int>& inDegree) {
    std::queue<int> q;
    std::vector<int> result;

    for (int i = 0; i < numNodes; ++i) {
        if (inDegree[i] == 0) q.push(i);
    }

    int visitedNodes = 0;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        result.push_back(u);
        visitedNodes++;

        for (int v : adj[u]) {
            if (--inDegree[v] == 0) q.push(v);
        }
    }

    if (visitedNodes != numNodes) {
        std::cout << "Grafik mengandung siklus!\n";
        return {};
    }

    return result;
}

int main() {
    int numNodes = 5;
    std::vector<std::vector<int>> adj(numNodes);
    std::vector<int> inDegree(numNodes, 0);

    adj[0] = {1, 2}; inDegree[1]++; inDegree[2]++;
    adj[1] = {3}; inDegree[3]++;
    adj[2] = {3}; inDegree[3]++;
    adj[3] = {4}; inDegree[4]++;

    auto order = kahnTopologicalSort(numNodes, adj, inDegree);
    for (int n : order) std::cout << n << " ";
    std::cout << "\n";
}
````

## Kelebihan dan Kekurangan

### ✅ Kelebihan:

- Menjamin hasil urutan topologis (jika DAG).
- Dapat mendeteksi siklus.
- Intuitif & mudah dipahami.
- Kompleksitas waktu **O(V + E)**, efisien untuk graf besar.

### ❌ Kekurangan:

- Hanya untuk **grafik tanpa siklus**.
- Tidak menemukan **jalur terpendek**.
- Bisa ada banyak urutan yang valid.

## Kesimpulan

Algoritma Kahn adalah metode yang elegan dan efisien untuk menyusun urutan topologis pada DAG. Dengan memanfaatkan **in-degree** dan struktur antrian, ia cocok untuk berbagai kasus yang melibatkan dependensi dan penjadwalan.

> Pemahaman konsep dasar seperti in-degree dan traversal node adalah kunci untuk menguasai algoritma ini secara menyeluruh.
