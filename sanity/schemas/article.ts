import { defineType, defineField } from "sanity";

export const articleSchema = defineType({
  name: "article",
  title: "Artikel",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug URL", type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ name: "excerpt", title: "Ringkasan", type: "text", rows: 3, validation: (R) => R.required() }),
    defineField({
      name: "body",
      title: "Isi Artikel",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
      ],
    }),
    defineField({ name: "coverImage", title: "Foto Cover", type: "image", options: { hotspot: true } }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Beauty Hack", value: "Beauty Hack" },
          { title: "Skincare Tips", value: "Skincare Tips" },
          { title: "Body Treatment", value: "Body Treatment" },
          { title: "Beauty Science", value: "Beauty Science" },
        ],
      },
    }),
    defineField({ name: "author", title: "Penulis", type: "string" }),
    defineField({ name: "publishedAt", title: "Tanggal Terbit", type: "datetime" }),
    defineField({ name: "readingTime", title: "Estimasi Waktu Baca (menit)", type: "number" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
  ],
  orderings: [{ title: "Terbaru", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
