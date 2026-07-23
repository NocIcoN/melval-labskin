import { defineType, defineField } from "sanity";

export const gallerySchema = defineType({
  name: "gallery",
  title: "Galeri",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "alt",
      title: "Deskripsi Foto (Alt Text)",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Klinik", value: "Klinik" },
          { title: "Treatment", value: "Treatment" },
          { title: "Produk", value: "Produk" },
          { title: "Tim", value: "Tim" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "caption",
      title: "Keterangan (opsional)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Urutan Tampil",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Terbaru", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "alt", subtitle: "category", media: "image" },
  },
});