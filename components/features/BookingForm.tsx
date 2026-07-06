"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { submitBooking } from "@/services/booking.service";
import { TREATMENTS, BRANCHES } from "@/constants";
import { cn } from "@/lib/utils";
import type { BookingFormData } from "@/types";

const initialFormState: BookingFormData = {
  fullName: "",
  phone: "",
  email: "",
  branch: "jakarta",
  treatment: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

const inputClasses =
  "w-full rounded-brand border border-brand-border bg-white px-4 py-3 font-inter text-sm text-brand-black placeholder:text-brand-gray/50 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

const labelClasses = "mb-2 block font-inter text-sm font-medium text-brand-black";

/**
 * Booking / consultation request form. The core conversion mechanism
 * for the "Easy Booking" and "Increase booking consultation" goals.
 * Client Component — manages controlled form state and submission status.
 */
export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitBooking(formData);

    if (result.success) {
      setStatus("success");
      setFormData(initialFormState);
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Gagal mengirim booking. Silakan coba lagi.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-brand-lg bg-gold-50 px-6 py-16 text-center">
        <CheckCircle2 size={48} className="text-gold-600" />
        <h3 className="mt-4 font-playfair text-2xl text-brand-black">
          Booking Berhasil Dikirim!
        </h3>
        <p className="mt-2 max-w-sm font-inter text-sm text-brand-gray">
          Tim kami akan menghubungi kamu dalam 1x24 jam untuk konfirmasi jadwal konsultasi.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6">
          Buat Booking Lain
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Nama Lengkap <span className="text-coral">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Nomor WhatsApp <span className="text-coral">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-brand-gray/60">(opsional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@email.com"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="branch" className={labelClasses}>
            Pilih Cabang <span className="text-coral">*</span>
          </label>
          <select
            id="branch"
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            className={cn(inputClasses, "appearance-none bg-white")}
          >
            {BRANCHES.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="treatment" className={labelClasses}>
            Treatment yang Diminati <span className="text-coral">*</span>
          </label>
          <select
            id="treatment"
            name="treatment"
            required
            value={formData.treatment}
            onChange={handleChange}
            className={cn(inputClasses, "appearance-none bg-white")}
          >
            <option value="" disabled>
              Pilih treatment
            </option>
            {TREATMENTS.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelClasses}>
            Tanggal Diinginkan <span className="text-coral">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClasses}>
            Waktu Diinginkan <span className="text-coral">*</span>
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Pesan Tambahan <span className="text-brand-gray/60">(opsional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Ceritakan kebutuhan atau pertanyaan kamu..."
          className={cn(inputClasses, "resize-none")}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-brand bg-coral/10 px-4 py-3 font-inter text-sm text-coral">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          "Kirim Booking"
        )}
      </Button>

      <p className="text-center font-inter text-xs text-brand-gray">
        Dengan mengirim form ini, kamu menyetujui{" "}
        <a href="/privacy" className="underline hover:text-gold-700">
          Kebijakan Privasi
        </a>{" "}
        kami.
      </p>
    </form>
  );
}
