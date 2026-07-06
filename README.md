# Melval Labskin — Website Redesign

Premium, modern, high-converting website redesign for Melval Labskin beauty clinic, built with Next.js 15 + React 19.

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, TailwindCSS, Framer Motion, Lucide Icons
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **SEO:** Native Next.js Metadata API, dynamic sitemap.xml & robots.txt, Schema.org JSON-LD
- **Deployment target:** Vercel

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/              Routes (App Router) — each folder is a page
components/
  ui/             Atomic, reusable primitives (Button, Card, Badge...)
  layout/         Navbar, Footer, Logo, WhatsApp button
  features/       Domain components (TreatmentCard, BookingForm...)
  sections/       Page-level sections composed from features/ui
constants/        Dummy data (treatments, doctors, products, etc.)
types/            TypeScript interfaces shared across the app
lib/              Utilities + Supabase client/server setup
services/         Data-layer functions (e.g. booking submission)
```

## What's Included in This Trial Build

- Fully responsive Home page with 10 sections (Hero → Stats → Treatments →
  Promo Countdown → Before/After → Doctors → Products → Testimonials →
  Articles → FAQ → CTA)
- Booking page with a working form (writes to Supabase `bookings` table)
- Reusable component library following atomic design principles
- Dummy data for treatments, doctors, products, articles, testimonials,
  branches, FAQs, and promos — ready to swap for a real CMS (Sanity /
  Contentful / Payload) later
- SEO: metadata, Open Graph, Twitter Card, Schema.org MedicalClinic,
  sitemap.xml, robots.txt
- WhatsApp floating button + WhatsApp deep links throughout

## Still To Be Built (Next Steps)

The following pages are scaffolded in the folder structure but not yet
implemented with content — happy to continue with these next:

- `/about`, `/treatments` (listing + detail), `/products` (listing + detail),
  `/doctors`, `/testimonials`, `/articles` (listing + detail), `/gallery`,
  `/promo`, `/faq`, `/contact`
- Supabase `bookings` table schema (SQL migration)
- CMS integration (Sanity/Contentful/Payload) to replace dummy `constants/`
- Admin dashboard (Supabase Auth protected)
- Google Analytics + Search Console wiring

## Design System

| Token | Value |
|---|---|
| Primary (Gold) | `#D4AF37` |
| Secondary (Cream) | `#FFF8F4` |
| Accent (Copper) | `#C68B59` |
| Text | `#222222` |
| Heading Font | Playfair Display |
| Body Font | Inter |

## Performance Targets

Lighthouse: Performance, Accessibility, SEO, Best Practices all ≥ 95.
Achieved via: Server Components by default, `next/image` optimization,
font subsetting with `next/font`, minimal client-side JS (interactivity
isolated to small leaf components only).
