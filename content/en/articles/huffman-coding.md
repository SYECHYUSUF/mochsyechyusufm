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
title: Memahami Algoritma Huffman Coding
description: Pelajari bagaimana Huffman Coding digunakan untuk kompresi data dengan efisien.
image: /articles/8.jpeg
---

# HUFFMAN CODING

````md
# Apa itu Huffman Coding?

**Huffman Coding** adalah algoritma kompresi data yang menggunakan pendekatan **greedy** untuk membuat **kode biner dengan panjang variabel**. Karakter yang lebih sering muncul diberi kode yang lebih pendek, dan karakter yang lebih jarang diberi kode yang lebih panjang.

---

## 🔧 Aplikasi Huffman Coding
- 📦 Kompresi file (ZIP, JPEG)
- 📡 Komunikasi data (pengurangan bandwidth)
- 💾 Penyimpanan data (penghematan ruang)
- 🔐 Kriptografi (penyandian berbasis frekuensi)

---

## 🔄 Cara Kerja Huffman Coding

### 1. **Hitung Frekuensi**
- Hitung kemunculan setiap karakter.

### 2. **Bangun Huffman Tree**
- Buat node daun untuk tiap karakter.
- Masukkan node ke dalam **min-heap** berdasarkan frekuensi.
- Gabungkan dua node dengan frekuensi terkecil.
- Ulangi hingga hanya tersisa satu node (akar pohon).

### 3. **Hasilkan Kode**
- Telusuri pohon dari akar ke tiap daun.
- Tetapkan `0` ke cabang kiri dan `1` ke cabang kanan.
- Karakter disandikan dengan jalur dari akar ke daunnya.

---

## 📌 Contoh Masalah

**Input:** `"AABBCC"`

### Langkah-langkah:
- Frekuensi: `A=2`, `B=2`, `C=2`
- Min-heap awal: `[A:2, B:2, C:2]`
- Gabung A dan B → `AB:4`
- Gabung AB dan C → `ABC:6`
- Hasil kode (contoh):
  - A: `00`
  - B: `01`
  - C: `1`
- Hasil encoding: `AABBCC` → `000001011`

**Efisiensi:**
- ASCII: `6 × 8 = 48 bit`
- Huffman: `9 bit` → Hemat ruang signifikan!

---

## 🧪 Implementasi Python

```python
import heapq
from collections import Counter

class Node:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None
    
    def __lt__(self, other):
        return self.freq < other.freq

def build_huffman_tree(data):
    freq = Counter(data)
    heap = [Node(char, f) for char, f in freq.items()]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        parent = Node(None, left.freq + right.freq)
        parent.left = left
        parent.right = right
        heapq.heappush(heap, parent)
    
    return heap[0]

def generate_codes(root, code="", codes={}):
    if root:
        if root.char is not None:
            codes[root.char] = code or "0"
        generate_codes(root.left, code + "0", codes)
        generate_codes(root.right, code + "1", codes)
    return codes

def huffman_coding(data):
    if not data:
        return "", {}
    root = build_huffman_tree(data)
    codes = generate_codes(root)
    encoded = ''.join(codes[char] for char in data)
    return encoded, codes

# Contoh penggunaan
data = "AABBCC"
encoded, codes = huffman_coding(data)
print("Kode Huffman:", codes)
print("Data tersandi:", encoded)
````

## 💻 Implementasi JavaScript

```md
class Node {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function huffmanCoding(data) {
    if (!data) return { encoded: "", codes: {} };

    // Frekuensi karakter
    const freq = {};
    for (let char of data) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Buat min-heap
    const heap = Object.entries(freq).map(([char, freq]) => new Node(char, freq));
    heap.sort((a, b) => a.freq - b.freq);

    // Bangun pohon
    while (heap.length > 1) {
        const left = heap.shift();
        const right = heap.shift();
        const parent = new Node(null, left.freq + right.freq);
        parent.left = left;
        parent.right = right;
        heap.push(parent);
        heap.sort((a, b) => a.freq - b.freq);
    }

    // Generate kode
    const codes = {};
    function generateCodes(node, code = "") {
        if (!node) return;
        if (node.char !== null) {
            codes[node.char] = code || "0";
        }
        generateCodes(node.left, code + "0");
        generateCodes(node.right, code + "1");
    }

    generateCodes(heap[0]);

    // Encode data
    const encoded = data.split("").map(char => codes[char]).join("");
    return { encoded, codes };
}

// Contoh penggunaan
const data = "AABBCC";
const { encoded, codes } = huffmanCoding(data);
console.log("Kode Huffman:", codes);
console.log("Data tersandi:", encoded);
```

## ⚙️ Kompleksitas & Optimasi

### ⏱ Kompleksitas Waktu:

- **O(n log n)** untuk n karakter unik (karena operasi heap)

### 🧠 Kompleksitas Ruang:

- **O(n)** untuk menyimpan:
  - Pohon Huffman
  - Tabel kode

### 🚀 Optimasi:

- Gunakan **heap efisien** (binary heap)
- Cache frekuensi untuk input berulang
- **Bit-level encoding** untuk kompresi maksimal
- Gunakan **bitmask/buffer** untuk implementasi skala besar

## ✅ Kelebihan Huffman Coding

- 💡 **Optimal** untuk frekuensi karakter tak merata
- 🔄 **Prefiks kode** → tidak ambigu tanpa pemisah
- 🔧 **Dapat disesuaikan** untuk berbagai format dan kasus

## ❌ Kekurangan

- 📦 Perlu menyimpan **pohon kode**
- 📊 Kurang efisien untuk data kecil/seragam
- 📚 Implementasi lebih rumit dibanding RLE atau metode sederhana lainnya

## 🎯 Kesimpulan

**Huffman Coding** adalah algoritma inti dalam kompresi data. Dengan membangun **pohon Huffman** dan menghasilkan **kode biner optimal**, ia memberikan cara efisien untuk mengurangi ukuran data tanpa kehilangan informasi.

Meskipun memiliki keterbatasan, keunggulan dalam efisiensi dan fleksibilitas menjadikannya pilihan utama dalam banyak sistem kompresi modern.

> 🧠 *Belajar Huffman Coding bukan hanya belajar kompresi — tapi juga belajar bagaimana greedy strategy digunakan untuk mencapai efisiensi optimal.*
