import { defineType, defineField } from "sanity";

export const doctorSchema = defineType({
  name: "doctor",
  title: "Dokter",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama Lengkap", type: "string", validation: (R) => R.required() }),
    defineField({ name: "title", title: "Gelar (contoh: dr.)", type: "string" }),
    defineField({ name: "specialty", title: "Spesialisasi", type: "string", validation: (R) => R.required() }),
    defineField({ name: "photo", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Biografi", type: "text", rows: 4 }),
    defineField({ name: "education", title: "Pendidikan", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "certifications", title: "Sertifikasi", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "branch",
      title: "Cabang Praktik",
      type: "string",
      options: {
        list: [
          { title: "Jakarta", value: "jakarta" },
          { title: "Malang", value: "malang" },
          { title: "Surabaya", value: "surabaya" },
        ],
      },
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "specialty", media: "photo" },
  },
});
