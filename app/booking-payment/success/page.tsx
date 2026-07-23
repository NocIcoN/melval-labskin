"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Calendar, Clock, MapPin, User, Stethoscope, MessageCircle, FileText } from "lucide-react";
import { useBookingStore } from "@/lib/booking-store";
import { formatCurrency, buildWhatsAppLink } from "@/lib/utils";

export default function SuccessPage() {
  const router = useRouter();
  const { booking, reset } = useBookingStore();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!booking.treatmentName) {
      router.replace("/booking-payment");
      return;
    }
    // Trigger confetti animation
    setShowConfetti(true);
    const t = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(t);
  }, [booking, router]);

  if (!booking.treatmentName) return null;

  const formattedDate = booking.date
    ? new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(booking.date))
    : "-";

  const waMessage = `Halo Admin Melval Labskin,

Saya telah melakukan booking treatment.

Nomor Booking:
${booking.bookingNumber}

Nama:
${booking.fullName}

Treatment:
${booking.treatmentName}

Cabang:
${booking.branchName}

Dokter:
${booking.doctorName}

Tanggal:
${formattedDate}

Jam:
${booking.time} WIB

Total Pembayaran:
${booking.treatmentPrice ? formatCurrency(booking.treatmentPrice) : "-"}

Mohon konfirmasi booking saya.

Terima kasih.`;

  const handleNewBooking = () => {
    reset();
    router.push("/booking-payment");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-luxury pb-20 pt-32 sm:pt-40">
      {/* Confetti dots */}
      {showConfetti && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                backgroundColor: i % 3 === 0 ? "#E8604C" : i % 3 === 1 ? "#C8A84B" : "#C68B59",
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative mx-auto max-w-2xl px-6">
        {/* Success icon */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 shadow-luxury">
            <CheckCircle2 size={52} className="text-green-500" />
          </div>
          <h1 className="mt-6 font-playfair text-display-sm text-brand-black sm:text-display-md">
            Pembayaran Berhasil! 🎉
          </h1>
          <p className="mt-3 font-inter text-base text-brand-gray">
            Booking kamu berhasil dibuat. Silakan datang sesuai jadwal yang telah dipilih.
          </p>
        </div>

        {/* Booking card */}
        <div className="overflow-hidden rounded-brand-xl bg-white shadow-luxury">
          {/* Booking number header */}
          <div className="bg-brand-black px-6 py-5 text-center">
            <p className="font-inter text-xs font-semibold uppercase tracking-wider text-white/50">
              Nomor Booking
            </p>
            <p className="mt-1 font-playfair text-3xl text-gold tracking-wide">
              {booking.bookingNumber}
            </p>
            <span className="mt-2 inline-block rounded-full bg-green-500/20 px-3 py-1 font-inter text-xs font-semibold text-green-400">
              ✓ PAID
            </span>
          </div>

          {/* Detail rows */}
          <div className="divide-y divide-brand-border">
            <DetailRow icon={<Stethoscope size={15} className="text-coral" />} label="Treatment" value={booking.treatmentName ?? "-"} />
            <DetailRow icon={<MapPin size={15} className="text-coral" />} label="Cabang" value={booking.branchName ?? "-"} />
            <DetailRow icon={<User size={15} className="text-coral" />} label="Dokter" value={booking.doctorName ?? "-"} />
            <DetailRow icon={<Calendar size={15} className="text-coral" />} label="Tanggal" value={formattedDate} />
            <DetailRow icon={<Clock size={15} className="text-coral" />} label="Jam" value={`${booking.time} WIB`} />
            <DetailRow
              icon={<span className="text-sm">💳</span>}
              label="Metode Bayar"
              value={booking.paymentMethod?.toUpperCase() ?? "-"}
            />
          </div>

          {/* Total */}
          <div className="flex items-center justify-between bg-green-50 px-6 py-5">
            <span className="font-inter text-base font-semibold text-brand-black">Total Dibayar</span>
            <span className="font-playfair text-2xl font-bold text-green-600">
              {booking.treatmentPrice ? formatCurrency(booking.treatmentPrice) : "-"}
            </span>
          </div>
        </div>

        {/* Customer info */}
        <div className="mt-4 rounded-brand-lg bg-white p-5 shadow-card">
          <p className="font-inter text-xs font-semibold uppercase tracking-wide text-brand-gray">
            Informasi Pelanggan
          </p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div>
              <p className="font-inter text-xs text-brand-gray">Nama</p>
              <p className="font-inter text-sm font-medium text-brand-black">{booking.fullName}</p>
            </div>
            <div>
              <p className="font-inter text-xs text-brand-gray">WhatsApp</p>
              <p className="font-inter text-sm font-medium text-brand-black">{booking.phone}</p>
            </div>
            <div>
              <p className="font-inter text-xs text-brand-gray">Email</p>
              <p className="font-inter text-sm font-medium text-brand-black">{booking.email}</p>
            </div>
          </div>
        </div>

        {/* Important notice */}
        <div className="mt-4 rounded-brand-lg border border-amber-200 bg-amber-50 p-4">
          <p className="font-inter text-sm font-semibold text-amber-800">📋 Yang Perlu Dipersiapkan</p>
          <ul className="mt-2 space-y-1">
            {[
              "Tunjukkan nomor booking saat tiba di klinik",
              "Datang 10 menit sebelum jadwal",
              "Bawa kartu identitas (KTP/SIM)",
              "Hindari riasan wajah untuk treatment facial",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 font-inter text-xs text-amber-700">
                <span className="mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 font-inter text-base font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            <MessageCircle size={20} />
            Konfirmasi via WhatsApp
          </a>
          <button
            onClick={handleNewBooking}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-border py-4 font-inter text-sm font-medium text-brand-gray transition-all hover:border-coral hover:text-coral sm:flex-1"
          >
            <FileText size={16} />
            Booking Lagi
          </button>
        </div>

        {/* Demo disclaimer */}
        <p className="mt-8 text-center font-inter text-xs text-brand-gray/50">
          * Ini adalah simulasi untuk demonstrasi. Tidak ada transaksi riil yang terjadi.
          Tim kami akan menghubungi kamu untuk konfirmasi jadwal.
        </p>
      </div>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-inter text-xs text-brand-gray">{label}</span>
      </div>
      <span className="font-inter text-sm font-medium text-brand-black">{value}</span>
    </div>
  );
}
