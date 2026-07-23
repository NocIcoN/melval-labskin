"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import { useBookingStore } from "@/lib/booking-store";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

const PAYMENT_METHODS = [
  {
    id: "qris",
    label: "QRIS",
    description: "Scan QR Code dari aplikasi apapun",
    icon: "📱",
    tag: "Semua E-Wallet",
  },
  {
    id: "bca",
    label: "Virtual Account BCA",
    description: "Transfer via ATM, M-Banking, atau Internet Banking BCA",
    icon: "🏦",
    tag: "Bank BCA",
  },
  {
    id: "mandiri",
    label: "Virtual Account Mandiri",
    description: "Transfer via ATM, Livin by Mandiri, atau Internet Banking",
    icon: "🏦",
    tag: "Bank Mandiri",
  },
  {
    id: "transfer",
    label: "Transfer Bank",
    description: "Transfer manual ke rekening Melval Labskin",
    icon: "💳",
    tag: "Semua Bank",
  },
  {
    id: "ewallet",
    label: "E-Wallet",
    description: "GoPay, OVO, DANA, ShopeePay",
    icon: "👛",
    tag: "E-Wallet",
  },
];

type PaymentStatus = "idle" | "processing" | "success";

export default function PaymentPage() {
  const router = useRouter();
  const { booking, setPaymentMethod } = useBookingStore();
  const [selected, setSelected] = useState<string>("");
  const [status, setStatus] = useState<PaymentStatus>("idle");

  useEffect(() => {
    if (!booking.treatmentName) {
      router.replace("/booking-payment");
    }
  }, [booking, router]);

  if (!booking.treatmentName) return null;

  const handlePay = () => {
    if (!selected) return;
    setPaymentMethod(selected);
    setStatus("processing");

    // Simulasi proses pembayaran 2.5 detik
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        router.push("/booking-payment/success");
      }, 800);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-luxury pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Booking Online
          </span>
          <h1 className="mt-3 font-playfair text-display-sm text-brand-black">
            Pembayaran
          </h1>
          <p className="mt-2 font-inter text-sm text-brand-gray">
            Silakan pilih metode pembayaran yang kamu inginkan.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {["Isi Form", "Review", "Pembayaran", "Selesai"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full font-inter text-sm font-semibold ${
                i < 3 ? "bg-coral text-white" : "bg-brand-border text-brand-gray"
              }`}>
                {i + 1}
              </div>
              <span className={`hidden font-inter text-sm sm:block ${
                i === 2 ? "font-medium text-coral" : i < 2 ? "text-coral" : "text-brand-gray"
              }`}>
                {step}
              </span>
              {i < 3 && <ChevronRight size={16} className="text-brand-border" />}
            </div>
          ))}
        </div>

        {/* Order summary mini */}
        <div className="mb-6 flex items-center justify-between rounded-brand-lg bg-white px-5 py-4 shadow-card">
          <div>
            <p className="font-inter text-xs text-brand-gray">Treatment</p>
            <p className="font-inter text-sm font-semibold text-brand-black line-clamp-1">
              {booking.treatmentName}
            </p>
          </div>
          <div className="text-right">
            <p className="font-inter text-xs text-brand-gray">Total</p>
            <p className="font-playfair text-lg font-bold text-coral">
              {booking.treatmentPrice ? formatCurrency(booking.treatmentPrice) : "-"}
            </p>
          </div>
        </div>

        {/* Payment methods */}
        <div className="space-y-3">
          {PAYMENT_METHODS.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelected(method.id)}
              disabled={status === "processing"}
              className={cn(
                "w-full rounded-brand-lg border-2 p-4 text-left transition-all duration-200",
                selected === method.id
                  ? "border-coral bg-coral-50 shadow-brand-sm"
                  : "border-brand-border bg-white hover:border-coral/40 hover:bg-coral-50/30"
              )}
            >
              <div className="flex items-center gap-4">
                {/* Radio indicator */}
                <div className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                  selected === method.id ? "border-coral" : "border-brand-gray/40"
                )}>
                  {selected === method.id && (
                    <div className="h-2.5 w-2.5 rounded-full bg-coral" />
                  )}
                </div>

                {/* Icon */}
                <span className="text-2xl">{method.icon}</span>

                {/* Label */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-inter text-sm font-semibold text-brand-black">
                      {method.label}
                    </span>
                    <span className="rounded-full bg-brand-gray-light px-2 py-0.5 font-inter text-[10px] text-brand-gray">
                      {method.tag}
                    </span>
                  </div>
                  <p className="mt-0.5 font-inter text-xs text-brand-gray">
                    {method.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Security note */}
        <div className="mt-5 flex items-center gap-2 rounded-brand-lg bg-white p-4 shadow-card">
          <ShieldCheck size={18} className="shrink-0 text-green-500" />
          <p className="font-inter text-xs text-brand-gray">
            Pembayaran dijamin aman dan terenkripsi. Data kamu tidak akan disimpan.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => router.back()}
            disabled={status === "processing"}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-border py-4 font-inter text-sm font-medium text-brand-gray transition-all hover:border-coral hover:text-coral disabled:opacity-50 sm:flex-1"
          >
            <ArrowLeft size={16} />
            Kembali
          </button>
          <button
            onClick={handlePay}
            disabled={!selected || status === "processing"}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-full py-4 font-inter text-base font-semibold text-white transition-all duration-300",
              selected && status === "idle"
                ? "bg-gradient-coral shadow-brand hover:-translate-y-0.5 hover:shadow-brand-lg"
                : status === "processing"
                ? "bg-coral/80 cursor-wait"
                : "bg-brand-border cursor-not-allowed"
            )}
          >
            {status === "processing" ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Memproses Pembayaran...
              </>
            ) : status === "success" ? (
              <>✓ Pembayaran Berhasil!</>
            ) : (
              "Bayar Sekarang"
            )}
          </button>
        </div>

        {/* Demo disclaimer */}
        <p className="mt-6 text-center font-inter text-xs text-brand-gray/60">
          * Ini adalah simulasi pembayaran untuk demonstrasi. Tidak ada transaksi yang terjadi.
        </p>
      </div>
    </div>
  );
}
