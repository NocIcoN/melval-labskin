import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import type { StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas";

export default defineConfig({
  name: "melval-labskin",
  title: "Melval Labskin CMS",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title("Konten Website")
          .items([
            S.listItem().title("🏥 Treatment").schemaType("treatment").child(S.documentTypeList("treatment")),
            S.listItem().title("🛍️ Produk").schemaType("product").child(S.documentTypeList("product")),
            S.listItem().title("👨‍⚕️ Dokter").schemaType("doctor").child(S.documentTypeList("doctor")),
            S.listItem().title("💬 Testimoni").schemaType("testimonial").child(S.documentTypeList("testimonial")),
            S.listItem().title("📝 Artikel").schemaType("article").child(S.documentTypeList("article")),
            S.listItem().title("🎁 Promo").schemaType("promo").child(S.documentTypeList("promo")),
            S.listItem().title("❓ FAQ").schemaType("faq").child(S.documentTypeList("faq")),
            S.listItem().title("🏢 Cabang").schemaType("branch").child(S.documentTypeList("branch")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});