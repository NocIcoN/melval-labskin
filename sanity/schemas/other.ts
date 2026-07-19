import { defineType, defineField } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimoni",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama Pelanggan", type: "string", validation: (R) => R.required() }),
    defineField({ name: "avatar", title: "Foto Pelanggan", type: "image", options: { hotspot: true } }),
    defineField({ name: "treatment", title: "Treatment yang Dijalani", type: "string", validation: (R) => R.required() }),
    defineField({ name: "rating", title: "Rating (1-5)", type: "number", validation: (R) => R.required().min(1).max(5) }),
    defineField({ name: "review", title: "Ulasan", type: "text", rows: 4, validation: (R) => R.required() }),
    defineField({ name: "beforeImage", title: "Foto Sebelum", type: "image", options: { hotspot: true } }),
    defineField({ name: "afterImage", title: "Foto Sesudah", type: "image", options: { hotspot: true } }),
    defineField({
      name: "branch",
      title: "Cabang",
      type: "string",
      options: {
        list: [
          { title: "Jakarta", value: "jakarta" },
          { title: "Malang", value: "malang" },
          { title: "Surabaya", value: "surabaya" },
        ],
      },
    }),
    defineField({ name: "date", title: "Tanggal", type: "date" }),
    defineField({ name: "isFeatured", title: "Tampilkan di Beranda?", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "name", subtitle: "treatment", media: "avatar" },
  },
});

export const promoSchema = defineType({
  name: "promo",
  title: "Promo",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul Promo", type: "string", validation: (R) => R.required() }),
    defineField({ name: "subtitle", title: "Subjudul", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Gambar Promo", type: "image", options: { hotspot: true } }),
    defineField({ name: "badge", title: "Label Badge (contoh: FLASH SALE)", type: "string" }),
    defineField({ name: "originalPrice", title: "Harga Normal (Rp)", type: "number" }),
    defineField({ name: "discountedPrice", title: "Harga Promo (Rp)", type: "number" }),
    defineField({ name: "expiresAt", title: "Berlaku Hingga", type: "datetime" }),
    defineField({ name: "ctaLabel", title: "Teks Tombol", type: "string", initialValue: "Ambil Promo" }),
    defineField({ name: "ctaHref", title: "Link Tombol", type: "string", initialValue: "/booking" }),
    defineField({ name: "isFlashSale", title: "Flash Sale?", type: "boolean", initialValue: false }),
    defineField({ name: "isActive", title: "Aktif?", type: "boolean", initialValue: true }),
    defineField({ name: "treatment", title: "Treatment Terkait", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "subtitle", media: "image" },
  },
});

export const faqSchema = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Pertanyaan", type: "string", validation: (R) => R.required() }),
    defineField({ name: "answer", title: "Jawaban", type: "text", rows: 4, validation: (R) => R.required() }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Keamanan", value: "Keamanan" },
          { title: "Treatment", value: "Treatment" },
          { title: "Hasil", value: "Hasil" },
          { title: "Konsultasi", value: "Konsultasi" },
          { title: "Produk", value: "Produk" },
          { title: "Umum", value: "Umum" },
        ],
      },
      initialValue: "Umum",
    }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [{ title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});

export const branchSchema = defineType({
  name: "branch",
  title: "Cabang",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID Cabang",
      type: "string",
      options: { list: [{ title: "Jakarta", value: "jakarta" }, { title: "Malang", value: "malang" }, { title: "Surabaya", value: "surabaya" }] },
      validation: (R) => R.required(),
    }),
    defineField({ name: "name", title: "Nama Klinik", type: "string", validation: (R) => R.required() }),
    defineField({ name: "address", title: "Alamat", type: "text", rows: 2 }),
    defineField({ name: "city", title: "Kota", type: "string" }),
    defineField({ name: "phone", title: "Nomor Telepon", type: "string" }),
    defineField({ name: "whatsapp", title: "Nomor WhatsApp (tanpa +)", type: "string" }),
    defineField({ name: "maps", title: "Link Google Maps", type: "url" }),
    defineField({ name: "mapsEmbed", title: "URL Embed Google Maps", type: "string" }),
    defineField({ name: "image", title: "Foto Klinik", type: "image", options: { hotspot: true } }),
    defineField({
      name: "operatingHours",
      title: "Jam Operasional",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "days", title: "Hari", type: "string" },
            { name: "hours", title: "Jam", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "city", media: "image" },
  },
});
