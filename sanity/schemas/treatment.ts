import { defineType, defineField } from "sanity";

export const treatmentSchema = defineType({
  name: "treatment",
  title: "Treatment",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama Treatment", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug URL", type: "slug", options: { source: "name" }, validation: (R) => R.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 4 }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Whitening", value: "whitening" },
          { title: "Slimming", value: "slimming" },
          { title: "Facial", value: "facial" },
          { title: "Body", value: "body" },
          { title: "Aesthetic", value: "aesthetic" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "image", title: "Foto Treatment", type: "image", options: { hotspot: true } }),
    defineField({ name: "duration", title: "Durasi (contoh: 60 menit)", type: "string" }),
    defineField({ name: "targetAge", title: "Target Usia", type: "string" }),
    defineField({
      name: "benefits",
      title: "Manfaat",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ingredients",
      title: "Kandungan Aktif",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "packages",
      title: "Paket & Harga",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Nama Paket", type: "string" },
            { name: "price", title: "Harga (Rp)", type: "number" },
            { name: "description", title: "Deskripsi", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "isBestSeller", title: "Best Seller?", type: "boolean", initialValue: false }),
    defineField({ name: "isFeatured", title: "Tampilkan di Beranda?", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number" }),
  ],
  orderings: [{ title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
