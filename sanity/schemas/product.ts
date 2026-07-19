import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Produk",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama Produk", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug URL", type: "slug", options: { source: "name" }, validation: (R) => R.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 4 }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Serum", value: "serum" },
          { title: "Moisturizer", value: "moisturizer" },
          { title: "Cleanser", value: "cleanser" },
          { title: "Sunscreen", value: "sunscreen" },
          { title: "Toner", value: "toner" },
          { title: "Mask", value: "mask" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "image", title: "Foto Produk", type: "image", options: { hotspot: true } }),
    defineField({ name: "price", title: "Harga (Rp)", type: "number", validation: (R) => R.required().min(0) }),
    defineField({ name: "volume", title: "Volume / Berat (contoh: 30ml)", type: "string" }),
    defineField({ name: "benefits", title: "Manfaat", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "skinType", title: "Cocok untuk Jenis Kulit", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "isBestSeller", title: "Best Seller?", type: "boolean", initialValue: false }),
    defineField({ name: "isNew", title: "Produk Baru?", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
