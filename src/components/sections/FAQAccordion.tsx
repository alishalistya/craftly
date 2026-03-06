"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <FadeUp key={index}>
            <div
              className={`bg-white rounded-xl mb-3 border border-border overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full bg-transparent border-none px-7 py-5.5 flex justify-between items-center cursor-pointer text-base font-semibold text-text-primary text-left"
              >
                {item.question}
                <Icon
                  name="fa-chevron-down"
                  className={`text-sm text-text-light transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: isOpen ? "300px" : "0" }}
              >
                <div className="px-7 pb-5.5 text-text-muted text-[0.95rem] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
