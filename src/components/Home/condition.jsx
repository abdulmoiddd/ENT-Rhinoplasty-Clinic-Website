import React from "react";
import Link from "next/link";

// --- The 15 Specialized ENT & Rhinoplasty Conditions ---
const conditionsList = [
  "Ear Surgeries",
  "Tonsillectomy",
  "Salivary Stone Removal",
  "Thyroidectomy",
  "Facial Trauma Reconstruction",
  "Carotid Tumor Excision",
  "Ultrasonic Rhinoplasty",
  "Ear Wax Removal",
  "Tip Plasty",
  "Rhinoplasty",
  "Branchial Cyst Excision",
  "Ankyloglossia (Tongue-Tie)",
  "Nasal Polyp Removal",
  "Ranula Cyst Removal",
  "Myringotomy",
];

// --- Custom Check Icon ---
const CheckIcon = () => (
  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const Conditions = () => {
  return (
    <section
      className="relative py-24 bg-[var(--background)] transition-colors duration-300"
      id="conditions"
    >
      {/* Background Styling */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[var(--primary)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold uppercase tracking-widest border border-[var(--primary)]/20 mb-6">
            Surgical Specialties
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight mb-6">
            Procedures We <span className="text-[var(--primary)]">Perform</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Our clinic offers a comprehensive range of specialized ENT and
            aesthetic procedures performed with precision and expert care.
          </p>
        </div>

        {/* --- The Diagnostic Board --- */}
        <div className="relative rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl overflow-hidden p-8 md:p-12">
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-4">
            {conditionsList.map((condition, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-[var(--background)] hover:border-[var(--border-color)] border border-transparent"
              >
                <CheckIcon />
                <span className="text-base md:text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {condition}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="relative z-10 mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[var(--foreground)] font-bold text-lg">
                Need more information on a procedure?
              </p>
              <p className="text-[var(--foreground-muted)] text-sm mt-1">
                Our surgical team is available to discuss your specific needs.
              </p>
            </div>

            <a
              href="https://wa.me/923005843974"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-[var(--primary)] text-[var(--foreground)] font-bold transition-all hover:bg-[var(--primary)] hover:text-white"
            >
              Book Your Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
