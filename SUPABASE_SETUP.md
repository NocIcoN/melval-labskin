# Setup Supabase untuk Melval Labskin Website

Panduan ini akan membantu kamu setup Supabase dari nol sampai form booking di website berfungsi. Total waktu: ±10 menit.

---

## 1. Buat Project Baru

1. Login ke [supabase.com/dashboard](https://supabase.com/dashboard)
2. Klik **New Project**
3. Isi:
   - **Name:** `melval-labskin` (atau bebas)
   - **Database Password:** buat password yang kuat — **simpan baik-baik**, ini bukan password login kamu, hanya untuk akses database langsung
   - **Region:** pilih `Southeast Asia (Singapore)` agar paling cepat diakses dari Indonesia
   - **Pricing Plan:** Free tier sudah lebih dari cukup untuk trial ini
4. Klik **Create new project** — tunggu ±2 menit sampai project selesai di-provision

---

## 2. Buat Tabel `bookings`

Setelah project siap:

1. Di sidebar kiri, klik **SQL Editor**
2. Klik **New query**
3. Paste SQL berikut, lalu klik **Run**:

```sql
-- Tabel untuk menyimpan booking konsultasi dari website
create table bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  branch text not null,
  treatment text not null,
  preferred_date date not null,
  preferred_time time not null,
  message text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- Aktifkan Row Level Security
alter table bookings enable row level security;

-- Izinkan siapa saja (pengunjung website) untuk INSERT booking baru
create policy "Anyone can submit a booking"
  on bookings for insert
  to anon
  with check (true);

-- (Opsional, untuk nanti) Hanya user yang sudah login (admin) yang bisa membaca semua booking
create policy "Authenticated users can view bookings"
  on bookings for select
  to authenticated
  using (true);
```

Penjelasan singkat:
- `status` defaultnya `pending` — nanti bisa kamu ubah jadi `confirmed`/`cancelled` lewat Table Editor
- RLS (Row Level Security) aktif agar pengunjung website **hanya bisa kirim data**, tidak bisa membaca booking orang lain
- Policy `select` untuk `authenticated` disiapkan untuk fitur admin dashboard nanti

4. Cek tabelnya: klik **Table Editor** di sidebar → harus muncul tabel `bookings` dengan semua kolom di atas

---

## 3. Ambil API Keys

1. Di sidebar kiri, klik **Project Settings** (ikon gear) → **API**
2. Kamu akan lihat dua nilai yang dibutuhkan:
   - **Project URL** → contoh: `https://xxxxxxxxxxxx.supabase.co`
   - **anon public key** → string panjang di bagian "Project API keys"

> ⚠️ Gunakan **anon public key**, BUKAN `service_role key`. Kunci `service_role` punya akses penuh ke database dan tidak boleh dipakai di kode frontend.

---

## 4. Isi `.env.local`

Di dalam folder project, copy file `.env.example` jadi `.env.local`:

```bash
cp .env.example .env.local
```

Buka `.env.local`, isi dengan nilai dari langkah 3:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

(`NEXT_PUBLIC_GA_ID` boleh dikosongkan dulu, belum dipakai di trial ini)

---

## 5. Jalankan & Tes

```bash
npm install
npm run dev
```

1. Buka [http://localhost:3000/booking](http://localhost:3000/booking)
2. Isi form booking, klik **Kirim Booking**
3. Kalau berhasil → muncul pesan "Booking Berhasil Dikirim!"
4. Cek hasilnya: balik ke Supabase Dashboard → **Table Editor** → `bookings` → data barumu harus muncul di situ

---

## Troubleshooting

| Masalah | Penyebab | Solusi |
|---|---|---|
| Form error "Failed to fetch" | `.env.local` belum diisi / salah | Cek ulang Project URL & anon key, restart `npm run dev` setelah edit `.env.local` |
| "new row violates row-level security policy" | Policy `insert` belum dibuat / salah | Jalankan ulang SQL di langkah 2, pastikan policy `to anon` ada |
| Perubahan `.env.local` tidak terasa | Next.js cache env saat start | Stop server (Ctrl+C), jalankan `npm run dev` lagi |
| Data tidak muncul di Table Editor | Salah lihat tabel/project | Pastikan kamu melihat project yang sama dengan yang ada di `.env.local` |

---

## Catatan untuk Production (Vercel)

Saat deploy ke Vercel nanti, tambahkan environment variables yang sama di:
**Vercel Dashboard → Project → Settings → Environment Variables**

Gunakan key/value yang sama persis seperti di `.env.local` kamu.
