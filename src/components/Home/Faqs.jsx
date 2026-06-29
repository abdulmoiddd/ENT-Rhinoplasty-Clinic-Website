"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. What is rhinoplasty?",
      answer:
        'Rhinoplasty, often called a "nose job," is a surgical procedure that reshapes the nose. It can be performed for cosmetic reasons (changing the size, shape, or proportion of the nose), functional reasons (correcting breathing problems such as a deviated septum), or both at the same time.',
    },
    {
      question: "2. Am I a good candidate for rhinoplasty?",
      answer:
        "Good candidates are generally in good overall health, have realistic expectations about results, and have finished facial growth (typically mid-to-late teens or older, depending on individual development). The best way to know if you're a candidate is a consultation, where the surgeon examines your nasal structure and discusses your goals.",
    },
    {
      question:
        "3. What is the difference between cosmetic and functional rhinoplasty?",
      answer:
        "Cosmetic rhinoplasty focuses on the external appearance of the nose — its shape, size, or symmetry. Functional rhinoplasty addresses breathing problems, often caused by a deviated septum or structural narrowing. Many patients have both concerns addressed in a single combined procedure.",
    },
    {
      question: "4. Is rhinoplasty painful?",
      answer:
        "Most patients describe post-surgical discomfort as mild to moderate rather than severe, and it's generally well managed with prescribed pain medication during the first few days. Swelling and a feeling of nasal congestion are usually more noticeable than sharp pain.",
    },
    {
      question: "5. How long does the procedure take?",
      answer:
        "Rhinoplasty typically takes between 1.5 and 3 hours, depending on the complexity of the case — whether it's a first-time (primary) procedure or a more complex revision surgery.",
    },
    {
      question:
        "6. What is the difference between open and closed rhinoplasty?",
      answer:
        "Closed rhinoplasty is performed entirely through incisions inside the nose, leaving no visible external scar. Open rhinoplasty involves one small additional incision on the columella (the strip of tissue between the nostrils), giving the surgeon direct visibility for more complex reshaping or revision cases. The right technique depends on your specific anatomy and goals.",
    },
    {
      question: "7. How long is the recovery period?",
      answer:
        "Most patients return to normal daily activities within 7 to 10 days, once the external splint is removed and major bruising has faded. However, subtle swelling — particularly at the nasal tip — can take up to a year to fully settle into the final result.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 md:py-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
      id="FAQS"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)]">
            Everything you need to know about the procedure, recovery, and
            expected outcomes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[var(--card-bg)] border-[var(--primary)]/50 shadow-sm"
                    : "bg-[var(--card-bg)]/50 border-[var(--border-color)] hover:border-[var(--foreground-muted)]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 text-left font-semibold flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg text-[var(--foreground)] pr-2">
                    {faq.question}
                  </span>

                  {/* Plus / Minus toggle icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[var(--primary)] text-white rotate-180"
                        : "bg-[var(--background)] text-[var(--foreground)]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {isOpen ? (
                        /* Minus Icon */
                        <rect x="3" y="7" width="10" height="2" rx="1" />
                      ) : (
                        /* Plus Icon */
                        <path d="M9 7h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 2 0v4z" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Answer container with smooth Grid collapse */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Funnel Callout */}
        <div className="mt-12 text-center bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-bold text-lg mb-1">
              Have a specific question about your nose?
            </h4>
            <p className="text-sm text-[var(--foreground-muted)]">
              Get a personalized anatomical assessment from our lead surgeon.
            </p>
          </div>

          <a
            href="https://wa.me/923005843974"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-bold text-sm hover:opacity-90 transition-opacity shrink-0 text-center"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
