"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Calendar, Clock, MapPin, User, Stethoscope } from "lucide-react";
import { useBookingStore } from "@/lib/booking-store";
import { cn } from "@/lib/utils";

// ─── Data dummy treatment & dokter ───────────────────────────
const TREATMENTS_LIST = [
  { name: "Infus Whitening Snow White", price: 500000, category: "Whitening" },
  { name: "Infus Whitening Double Cell", price: 750000, category: "Whitening" },
  { name: "Infus Whitening Chromosome Cell", price: 1000000, category: "Whitening" },
  { name: "Infus Whitening Princess Sirivana", price: 1750000, category: "Whitening" },
  { name: "Chromosome VVIP Premium", price: 3000000, category: "Whitening" },
  { name: "Fat Freezing Cryolipolysis", price: 1000000, category: "Slimming" },
  { name: "Face Lipolysis Regular", price: 1900000, category: "Facial" },
  { name: "Stem Cell Miss V", price: 2500000, category: "Body" },
];

const BRANCHES_LIST = [
  { id: "jakarta", name: "Jakarta Barat" },
  { id: "malang", name: "Kota Malang" },
  { id: "surabaya", name: "Surabaya" },
  { id: "bali", name: "Bali (Coming Soon)" },
];

const DOCTORS_BY_BRANCH: Record<string, string[]> = {
  jakarta: ["dr. Sarah Amelia", "dr. Rizky Pratama"],
  malang: ["dr. Anisa Putri", "dr. Budi Santoso"],
  surabaya: ["dr. Rizky Fahmi", "dr. Dewi Kartika"],
  bali: [],
};

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const inputClasses =
  "w-full rounded-brand border border-brand-border bg-white px-4 py-3 font-inter text-sm text-brand-black placeholder:text-brand-gray/50 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";
const labelClasses = "mb-2 block font-inter text-sm font-medium text-brand-black";
const selectClasses = cn(inputClasses, "appearance-none cursor-pointer");

export default function BookingPaymentPage() {
  const router = useRouter();
  const { setBooking } = useBookingStore();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    notes: "",
    treatmentIndex: "",
    branch: "",
    doctorName: "",
    date: "",
    time: "",
  });

  const [availableDoctors, setAvailableDoctors] = useState<string[]>([]);

  useEffect(() => {
    if (form.branch) {
      setAvailableDoctors(DOCTORS_BY_BRANCH[form.branch] ?? []);
      setForm((prev) => ({ ...prev, doctorName: "" }));
    }
  }, [form.branch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectedTreatment = form.treatmentIndex !== ""
    ? TREATMENTS_LIST[Number(form.treatmentIndex)]
    : null;

  const selectedBranch = BRANCHES_LIST.find((b) => b.id === form.branch);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedTreatment || !selectedBranch) return;

    setBooking({
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      notes: form.notes,
      treatmentName: selectedTreatment.name,
      treatmentPrice: selectedTreatment.price,
      packageName: selectedTreatment.category,
      branch: form.branch,
      branchName: selectedBranch.name,
      doctorName: form.doctorName,
      date: form.date,
      time: form.time,
    });

    router.push("/booking-payment/review");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gradient-luxury pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Booking Online
          </span>
          <h1 className="mt-3 font-playfair text-display-sm text-brand-black sm:text-display-md">
            Buat Booking Treatment
          </h1>
          <p className="mt-3 font-inter text-base text-brand-gray">
            Isi form berikut untuk memesan treatment. Pembayaran dilakukan setelah konfirmasi jadwal.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {["Isi Form", "Review", "Pembayaran", "Selesai"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full font-inter text-sm font-semibold",
                i === 0 ? "bg-coral text-white" : "bg-brand-border text-brand-gray"
              )}>
                {i + 1}
              </div>
              <span className={cn(
                "hidden font-inter text-sm sm:block",
                i === 0 ? "text-coral font-medium" : "text-brand-gray"
              )}>
                {step}
              </span>
              {i < 3 && <ChevronRight size={16} className="text-brand-border" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1 — Data Diri */}
          <div className="rounded-brand-xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="flex items-center gap-2 font-playfair text-xl text-brand-black">
              <User size={20} className="text-coral" />
              Data Diri
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Nama Lengkap <span className="text-coral">*</span>
                </label>
                <input
                  id="fullName" name="fullName" type="text" required
                  value={form.fullName} onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Nomor WhatsApp <span className="text-coral">*</span>
                </label>
                <input
                  id="phone" name="phone" type="tel" required
                  value={form.phone} onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="text-coral">*</span>
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="nama@email.com"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* Section 2 — Pilih Treatment */}
          <div className="rounded-brand-xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="flex items-center gap-2 font-playfair text-xl text-brand-black">
              <Stethoscope size={20} className="text-coral" />
              Pilih Treatment
            </h2>
            <div className="mt-6">
              <label htmlFor="treatmentIndex" className={labelClasses}>
                Treatment <span className="text-coral">*</span>
              </label>
              <select
                id="treatmentIndex" name="treatmentIndex" required
                value={form.treatmentIndex} onChange={handleChange}
                className={selectClasses}
              >
                <option value="" disabled>Pilih treatment</option>
                {TREATMENTS_LIST.map((t, i) => (
                  <option key={i} value={i}>
                    {t.name} — Rp{t.price.toLocaleString("id-ID")}
                  </option>
                ))}
              </select>

              {selectedTreatment && (
                <div className="mt-4 flex items-center justify-between rounded-brand bg-coral-50 px-5 py-4">
                  <span className="font-inter text-sm font-medium text-brand-black">
                    {selectedTreatment.name}
                  </span>
                  <span className="font-playfair text-lg font-semibold text-coral">
                    Rp{selectedTreatment.price.toLocaleString("id-ID")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Section 3 — Pilih Cabang & Dokter */}
          <div className="rounded-brand-xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="flex items-center gap-2 font-playfair text-xl text-brand-black">
              <MapPin size={20} className="text-coral" />
              Cabang & Dokter
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="branch" className={labelClasses}>
                  Pilih Cabang <span className="text-coral">*</span>
                </label>
                <select
                  id="branch" name="branch" required
                  value={form.branch} onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" disabled>Pilih cabang</option>
                  {BRANCHES_LIST.map((b) => (
                    <option key={b.id} value={b.id} disabled={b.id === "bali"}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="doctorName" className={labelClasses}>
                  Pilih Dokter <span className="text-coral">*</span>
                </label>
                <select
                  id="doctorName" name="doctorName" required
                  value={form.doctorName} onChange={handleChange}
                  disabled={!form.branch || availableDoctors.length === 0}
                  className={cn(selectClasses, (!form.branch || availableDoctors.length === 0) && "opacity-50 cursor-not-allowed")}
                >
                  <option value="" disabled>
                    {!form.branch ? "Pilih cabang dulu" : "Pilih dokter"}
                  </option>
                  {availableDoctors.map((doc) => (
                    <option key={doc} value={doc}>{doc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 4 — Pilih Jadwal */}
          <div className="rounded-brand-xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="flex items-center gap-2 font-playfair text-xl text-brand-black">
              <Calendar size={20} className="text-coral" />
              Pilih Jadwal
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className={labelClasses}>
                  Tanggal <span className="text-coral">*</span>
                </label>
                <input
                  id="date" name="date" type="date" required
                  value={form.date} onChange={handleChange}
                  min={today}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Jam <span className="text-coral">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, time: slot }))}
                      className={cn(
                        "rounded-brand py-2 font-inter text-sm font-medium transition-all",
                        form.time === slot
                          ? "bg-coral text-white shadow-brand-sm"
                          : "bg-brand-gray-light text-brand-gray hover:bg-coral/10 hover:text-coral"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {/* Hidden required input for time validation */}
                <input
                  type="text" required
                  value={form.time}
                  onChange={() => {}}
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Section 5 — Catatan */}
          <div className="rounded-brand-xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="flex items-center gap-2 font-playfair text-xl text-brand-black">
              <Clock size={20} className="text-coral" />
              Catatan Tambahan
            </h2>
            <div className="mt-6">
              <label htmlFor="notes" className={labelClasses}>
                Catatan <span className="text-brand-gray/60">(opsional)</span>
              </label>
              <textarea
                id="notes" name="notes" rows={3}
                value={form.notes} onChange={handleChange}
                placeholder="Informasi tambahan yang perlu diketahui dokter..."
                className={cn(inputClasses, "resize-none")}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!form.time}
            className={cn(
              "w-full rounded-full py-4 font-inter text-base font-semibold transition-all duration-300",
              form.time
                ? "bg-gradient-coral text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5"
                : "bg-brand-border text-brand-gray cursor-not-allowed"
            )}
          >
            Lanjut ke Review Booking →
          </button>
        </form>
      </div>
    </div>
  );
}
