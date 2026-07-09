import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

/**
 * Global 404 page. Shown when any route is not found.
 * Keeps the user in the funnel by offering clear navigation options.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-luxury px-6 text-center">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-3xl" />

      <span className="relative font-playfair text-[8rem] font-bold leading-none text-coral/20 sm:text-[12rem]">
        404
      </span>

      <h1 className="relative -mt-4 font-playfair text-display-sm text-brand-black sm:text-display-md">
        Halaman Tidak Ditemukan
      </h1>
      <p className="relative mt-4 max-w-md font-inter text-base text-brand-gray">
        Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
        Yuk kembali dan temukan perawatan terbaik untukmu.
      </p>

      <div className="relative mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <ButtonLink href="/" variant="primary" size="lg">
          Kembali ke Beranda
        </ButtonLink>
        <ButtonLink href="/treatments" variant="outline" size="lg">
          Lihat Treatment
        </ButtonLink>
      </div>

      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4 font-inter text-sm text-brand-gray">
        <Link href="/about" className="hover:text-coral">Tentang Kami</Link>
        <span>·</span>
        <Link href="/contact" className="hover:text-coral">Kontak</Link>
        <span>·</span>
        <Link href="/faq" className="hover:text-coral">FAQ</Link>
        <span>·</span>
        <Link href="/booking" className="hover:text-coral">Booking</Link>
      </div>
    </div>
  );
}
