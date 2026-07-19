import { treatmentSchema } from "./treatment";
import { productSchema } from "./product";
import { doctorSchema } from "./doctor";
import { articleSchema } from "./article";
import { testimonialSchema, promoSchema, faqSchema, branchSchema } from "./other";

/**
 * All Sanity schemas exported as an array.
 * Import this into sanity.config.ts.
 */
export const schemas = [
  treatmentSchema,
  productSchema,
  doctorSchema,
  articleSchema,
  testimonialSchema,
  promoSchema,
  faqSchema,
  branchSchema,
];
