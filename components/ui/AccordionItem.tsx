"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

/**
 * Single accordion item used by the FAQ section.
 * Marked "use client" since it needs local open/close state —
 * kept as small and isolated as possible so the parent FAQ list
 * can stay a Server Component.
 */
export default function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-border last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-inter text-base font-medium text-brand-black sm:text-lg">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-gold-600 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="font-inter text-sm leading-relaxed text-brand-gray sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
