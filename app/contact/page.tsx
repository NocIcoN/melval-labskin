"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BRANCHES, WHATSAPP_NUMBER } from "@/constants";
import { buildWhatsAppLink, cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-brand border border-brand-border bg-white px-4 py-3 font-inter text-sm text-brand-black placeholder:text-brand-gray/50 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";
const labelClasses = "mb-2 block font-inter text-sm font-medium text-brand-black";

// Google Maps embed URLs per branch (dummy - replace with real embed URLs)
const MAPS_EMBEDS: Record<string, string> = {
  jakarta:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8640511188205!2d106.81303217377894!3d-6.148953960271155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7005c06a311%3A0x47bbf340fca0b84d!2sMelval%20Labskin%20Jakarta%20-%20Klinik%20Kecantikan%20Specialis%20Infuse%20Whitening%20dan%20Sliming!5e0!3m2!1sid!2sid!4v1783393214788!5m2!1sid!2sid",
  malang:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2971676988777!2d112.62489007380849!3d-7.96820957941997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629925e05aae7%3A0x2ffaa1f1b769ce48!2sMelVal%20Labskin%20Malang%20-%20Klinik%20Kecantikan%20Malang%20Spesialis%20Infus%20Whitening!5e0!3m2!1sid!2sid!4v1783393001468!5m2!1sid!2sid",
  surabaya:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.676884294444!2d112.68694227379665!3d-7.2775582715150895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fd5534464445%3A0xa21843e56ac168b２！２sMelVal%２０Labskin%２０Surabaya%２０-%２０Klinik%２０Kecantikan%２０Surabaya%２０Spesialis%２０Infus%２０Whitening!5e0!3m₂!₁sid!₂sid!₄v₁₇₈₃₃₉₃₁₄₄₈₀₅!₅m₂!₁sid!₂sid",
  bali:
    "Comming soon...",
};

export default function ContactPage() {
  const [activeBranch, setActiveBranch] = useState<"jakarta" | "malang" | "surabaya" | "bali">("malang");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Redirect to WhatsApp with form data as message
    const msg = `Halo Melval Labskin!\n\nNama: ${form.name}\nNo. HP: ${form.phone}\nEmail: ${form.email}\n\nPesan:\n${form.message}`;
    window.open(buildWhatsAppLink(msg), "_blank");
    setTimeout(() => setStatus("success"), 500);
  };

  const currentBranch = BRANCHES.find((b) => b.id === activeBranch)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Hubungi Kami
          </span>
          <h1 className="mt-4 font-playfair text-display-md text-brand-black sm:text-display-lg">
            Kami Siap Membantu Kamu
          </h1>
          <p className="mt-4 font-inter text-lg text-brand-gray">
            Ada pertanyaan tentang treatment atau produk? Tim kami siap memberikan
            informasi dan konsultasi terbaik untuk kamu.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-brand-lg bg-[#25D366] p-6 text-white transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <MessageCircle size={28} />
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-wide text-white/70">WhatsApp</p>
                <p className="font-playfair text-lg">Chat Sekarang</p>
              </div>
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-4 rounded-brand-lg bg-brand-black p-6 text-white transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Phone size={28} />
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-wide text-white/70">Telepon</p>
                <p className="font-playfair text-lg">+{WHATSAPP_NUMBER}</p>
              </div>
            </a>
            <a
              href="mailto:hello@melvallabskin.org"
              className="flex items-center gap-4 rounded-brand-lg bg-coral p-6 text-white transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Mail size={28} />
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-wide text-white/70">Email</p>
                <p className="font-playfair text-lg">hello@melvallabskin.org</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Branch Info */}
      <section className="pb-section-sm sm:pb-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Form */}
            <div className="rounded-brand-xl bg-white p-8 shadow-card sm:p-10">
              <h2 className="font-playfair text-display-xs text-brand-black">
                Kirim Pesan
              </h2>
              <p className="mt-2 font-inter text-sm text-brand-gray">
                Isi form berikut dan kami akan membalas via WhatsApp.
              </p>

              {status === "success" ? (
                <div className="mt-8 flex flex-col items-center rounded-brand-lg bg-coral-50 py-12 text-center">
                  <CheckCircle2 size={40} className="text-coral" />
                  <p className="mt-3 font-playfair text-xl text-brand-black">Pesan Terkirim!</p>
                  <p className="mt-1 font-inter text-sm text-brand-gray">
                    Kamu telah diarahkan ke WhatsApp. Tim kami akan segera membalas.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="mt-4 font-inter text-sm text-coral underline"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClasses}>Nama Lengkap <span className="text-coral">*</span></label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Nama kamu" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>Nomor WhatsApp <span className="text-coral">*</span></label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="08xxxxxxxxxx" className={inputClasses} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email <span className="text-brand-gray/60">(opsional)</span></label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="nama@email.com" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClasses}>Pesan <span className="text-coral">*</span></label>
                    <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Tuliskan pertanyaan atau kebutuhanmu di sini..." className={cn(inputClasses, "resize-none")} />
                  </div>
                  <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"} className="w-full">
                    {status === "submitting" ? (
                      <><Loader2 size={18} className="animate-spin" /> Mengirim...</>
                    ) : "Kirim via WhatsApp"}
                  </Button>
                </form>
              )}
            </div>

            {/* Branch selector + info */}
            <div className="space-y-6">
              <div className="rounded-brand-lg bg-white p-6 shadow-card">
                <h3 className="font-playfair text-xl text-brand-black">Pilih Cabang</h3>
                <div className="mt-4 flex gap-2">
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setActiveBranch(b.id)}
                      className={cn(
                        "flex-1 rounded-full py-2 font-inter text-sm font-medium transition-all",
                        activeBranch === b.id
                          ? "bg-coral text-white"
                          : "bg-brand-gray-light text-brand-gray hover:bg-coral/10"
                      )}
                    >
                      {b.city}
                    </button>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-coral" />
                    <p className="font-inter text-sm text-brand-gray">{currentBranch.address}, {currentBranch.city}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-coral" />
                    <a href={`tel:${currentBranch.phone.replace(/\s/g, "")}`} className="font-inter text-sm text-brand-gray hover:text-coral">
                      {currentBranch.phone}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={16} className="mt-0.5 shrink-0 text-coral" />
                    <div>
                      {currentBranch.operatingHours.map((h) => (
                        <p key={h.days} className="font-inter text-sm text-brand-gray">
                          {h.days}: <span className="font-medium text-brand-black">{h.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="overflow-hidden rounded-brand-lg shadow-card">
                <iframe
                  src={MAPS_EMBEDS[activeBranch]}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Lokasi ${currentBranch.name}`}
                  className="block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Nudge */}
      <section className="bg-cream py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-playfair text-display-xs text-brand-black">
            Punya pertanyaan umum?
          </h2>
          <p className="mt-3 font-inter text-sm text-brand-gray">
            Lihat halaman FAQ kami untuk jawaban pertanyaan yang paling sering ditanyakan.
          </p>
          <a
            href="/faq"
            className="mt-4 inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-coral hover:underline"
          >
            Lihat FAQ →
          </a>
        </div>
      </section>
    </>
  );
}
