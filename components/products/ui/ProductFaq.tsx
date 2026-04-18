"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ProductFaqProps {
  faqs?: FaqItem[];
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "Is this a physical disk or a digital download?",
    answer: "This is a digital product. You will receive the product key and download links instantly via email after purchase.",
  },
  {
    question: "How quickly will I receive my key?",
    answer: "Delivery is instant. Your key is displayed on screen and sent to your email immediately after payment is confirmed.",
  },
  {
    question: "Is this key region-locked?",
    answer: "Unless otherwise stated, all keys are Global and can be activated from any country. Region-specific products are clearly labeled.",
  },
  {
    question: "How do I activate my key?",
    answer: "Follow the instructions provided with your key. For most products, you simply copy the key and enter it in the platform's 'Redeem Code' section.",
  },
  {
    question: "What if my key doesn't work?",
    answer: "We offer 24/7 customer support. If you have any issues activating your key, please contact us immediately and we will resolve it promptly.",
  },
  {
    question: "Can I get a refund?",
    answer: "Due to the digital nature of our products, we cannot issue refunds once a key has been revealed. Please contact support if you have any activation issues.",
  },
  {
    question: "Is this a lifetime license?",
    answer: "Licenses vary by product. Please check the product description for specific license duration details (e.g., 1 Month, 1 Year, Lifetime).",
  },
];

export default function ProductFaq({ faqs }: ProductFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = faqs || DEFAULT_FAQS;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 font-headline text-foreground">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqItems.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-card rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                isOpen ? "border-primary/40 shadow-sm" : "border-border hover:border-primary/20"
              }`}
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center p-5 md:p-6">
                <h4 className="font-bold text-foreground pr-4 text-sm md:text-base">{faq.question}</h4>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
