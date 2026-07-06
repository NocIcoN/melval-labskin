import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQS } from "@/constants";

/**
 * FAQ section — reduces booking friction by answering common objections
 * before the user reaches the booking form.
 */
export default function FAQSection() {
  return (
    <section className="bg-cream py-section-sm sm:py-section">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Pertanyaan Umum"
          title="Yang Sering Ditanyakan"
          description="Masih ragu? Berikut jawaban atas pertanyaan yang paling sering kami terima."
        />

        <div className="mt-10 rounded-brand-lg bg-white px-6 shadow-card sm:px-8">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
