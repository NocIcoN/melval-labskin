"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Calendar, Clock, MapPin, User, Stethoscope, ArrowLeft } from "lucide-react";
import { useBookingStore } from "@/lib/booking-store";
import { formatCurrency } from "@/lib/utils";

export default function ReviewBookingPage() {
  const router = useRouter();
  const { booking } = useBookingStore();

  // Guard — kalau tidak ada data booking, redirect balik ke form
  useEffect(() => {
    if (!booking.treatmentName) {
      router.replace("/booking-payment");
    }
  }, [booking, router]);

  if (!booking.treatmentName) return null;

  const formattedDate = booking.date
    ? new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(booking.date))
    : "-";

  return (
    <div className="min-h-screen bg-gradient-luxury pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Booking Online
          </span>
          <h1 className="mt-3 font-playfair text-display-sm text-brand-black">
            Review Booking
          </h1>
          <p className="mt-2 font-inter text-sm text-brand-gray">
            Periksa kembali detail booking sebelum melanjutkan ke pembayaran.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {["Isi Form", "Review", "Pembayaran", "Selesai"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full font-inter text-sm font-semibold ${
                i < 2 ? "bg-coral text-white" : "bg-brand-border text-brand-gray"
              }`}>
                {i + 1}
              </div>
              <span className={`hidden font-inter text-sm sm:block ${
                i === 1 ? "font-medium text-coral" : i < 1 ? "text-coral" : "text-brand-gray"
              }`}>
                {step}
              </span>
              {i < 3 && <ChevronRight size={16} className="text-brand-border" />}
            </div>
          ))}
        </div>

        {/* Booking Summary Card */}
        <div className="overflow-hidden rounded-brand-xl bg-white shadow-card">
          {/* Header card */}
          <div className="bg-brand-black px-6 py-5">
            <p className="font-inter text-xs font-semibold uppercase tracking-wide text-white/50">
              Nomor Booking
            </p>
            <p className="mt-1 font-playfair text-2xl text-gold">
              {booking.bookingNumber}
            </p>
          </div>

          {/* Detail */}
          <div className="divide-y divide-brand-border">
            <SummaryRow
              icon={<Stethoscope size={16} className="text-coral" />}
              label="Treatment"
              value={booking.treatmentName ?? "-"}
              highlight
            />
            <SummaryRow
              icon={<MapPin size={16} className="text-coral" />}
              label="Cabang"
              value={booking.branchName ?? "-"}
            />
            <SummaryRow
              icon={<User size={16} className="text-coral" />}
              label="Dokter"
              value={booking.doctorName ?? "-"}
            />
            <SummaryRow
              icon={<Calendar size={16} className="text-coral" />}
              label="Tanggal"
              value={formattedDate}
            />
            <SummaryRow
              icon={<Clock size={16} className="text-coral" />}
              label="Jam"
              value={`${booking.time} WIB`}
            />
            <SummaryRow
              icon={<User size={16} className="text-coral" />}
              label="Nama"
              value={booking.fullName ?? "-"}
            />
          </div>

          {/* Total */}
          <div className="flex items-center justify-between bg-coral-50 px-6 py-5">
            <span className="font-inter text-base font-semibold text-brand-black">
              Total Pembayaran
            </span>
            <span className="font-playfair text-2xl font-bold text-coral">
              {booking.treatmentPrice ? formatCurrency(booking.treatmentPrice) : "-"}
            </span>
          </div>
        </div>

        {/* Customer info */}
        <div className="mt-4 rounded-brand-lg bg-white p-5 shadow-card">
          <p className="font-inter text-xs font-semibold uppercase tracking-wide text-brand-gray">
            Data Pelanggan
          </p>
          <div className="mt-3 space-y-2">
            <p className="font-inter text-sm text-brand-black">
              📱 {booking.phone}
            </p>
            <p className="font-inter text-sm text-brand-black">
              ✉️ {booking.email}
            </p>
            {booking.notes && (
              <p className="font-inter text-sm text-brand-gray">
                📝 {booking.notes}
              </p>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 rounded-brand-lg border border-coral/20 bg-coral-50 p-4">
          <p className="font-inter text-xs text-coral-700">
            ⚠️ Pastikan semua data sudah benar sebelum melanjutkan ke pembayaran.
            Booking yang sudah dibayar tidak dapat diubah tanpa konfirmasi admin.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-border py-4 font-inter text-sm font-medium text-brand-gray transition-all hover:border-coral hover:text-coral sm:flex-1"
          >
            <ArrowLeft size={16} />
            Ubah Data
          </button>
          <button
            onClick={() => router.push("/booking-payment/payment")}
            className="flex-1 rounded-full bg-gradient-coral py-4 font-inter text-base font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-lg"
          >
            Lanjut ke Pembayaran →
          </button>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-inter text-sm text-brand-gray">{label}</span>
      </div>
      <span className={`font-inter text-sm ${highlight ? "font-semibold text-brand-black" : "text-brand-black"}`}>
        {value}
      </span>
    </div>
  );
}
