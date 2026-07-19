# Setup Sanity CMS untuk Melval Labskin

Total waktu: ±15 menit.

---

## 1. Buat Akun & Project Sanity

1. Buka [sanity.io](https://sanity.io) → **Start for free** → login dengan Google/GitHub
2. Klik **Create project**
3. Isi:
   - **Project name:** `Melval Labskin`
   - **Dataset:** `production` (default)
   - **Plan:** Free (lebih dari cukup)
4. Klik **Create project** → catat **Project ID** yang muncul (format: `xxxxxxxxxxxx`)

---

## 2. Isi `.env.local`

Tambahkan 3 variabel baru ke file `.env.local` kamu:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
```

`SANITY_API_TOKEN` boleh kosong dulu untuk development. Nanti diisi untuk fitur draft preview.

---

## 3. Install Dependencies & Jalankan

```bash
npm install --legacy-peer-deps
npm run dev
```

Buka [http://localhost:3000/studio](http://localhost:3000/studio) — Sanity Studio akan muncul.

---

## 4. Tambahkan CORS Origin di Sanity

Agar Studio bisa akses API Sanity dari localhost:

1. Buka [sanity.io/manage](https://sanity.io/manage)
2. Pilih project **Melval Labskin**
3. **API** → **CORS Origins** → **Add CORS origin**
4. Tambahkan:
   - `http://localhost:3000` (development)
   - `https://melval-labskin.vercel.app` (production — sesuaikan dengan URL Vercel kamu)
5. Centang **Allow credentials**

---

## 5. Input Konten di Studio

Buka [http://localhost:3000/studio](http://localhost:3000/studio) dan mulai isi konten:

Urutan yang disarankan:
1. **Cabang** — isi 3 cabang (Jakarta, Malang, Surabaya)
2. **Dokter** — upload foto + isi data dokter
3. **Treatment** — isi semua treatment + upload foto
4. **Produk** — isi produk skincare + upload foto
5. **Testimoni** — isi ulasan + foto before/after
6. **FAQ** — isi pertanyaan dan jawaban
7. **Promo** — isi promo aktif
8. **Artikel** — tulis artikel Beauty Hack

---

## 6. Verifikasi Data Tampil di Website

Setelah input konten di Studio:

1. Buka [http://localhost:3000](http://localhost:3000)
2. Data dari Sanity otomatis menggantikan dummy data
3. Tidak ada perubahan kode yang diperlukan — fetchers sudah otomatis fallback ke dummy data jika Sanity belum dikonfigurasi

---

## 7. Deploy ke Vercel

Tambahkan 3 environment variable di Vercel Dashboard → **Settings** → **Environment Variables**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = xxxxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET    = production
SANITY_API_TOKEN              = (bisa kosong dulu)
```

Lalu tambahkan URL Vercel ke CORS origins Sanity (langkah 4).

---

## Catatan Penting

- **Gambar di Sanity** otomatis di-optimize dan di-serve dari CDN Sanity (`cdn.sanity.io`) — tidak perlu upload ke tempat lain
- **Dummy data** di `constants/index.ts` tetap ada sebagai fallback — jika Sanity belum dikonfigurasi atau konten belum diisi, website tetap tampil normal dengan data dummy
- **Studio di production** akan dapat diakses di `https://melvallabskin.org/studio` — amankan dengan menambahkan autentikasi Supabase Auth nanti (Fase 4)
