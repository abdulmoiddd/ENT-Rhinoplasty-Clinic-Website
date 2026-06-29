"use client";

import React, { useState } from "react";
import Link from "next/link";

// --- Custom ENT & Facial Icons ---
const icons = {
  nose: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v6c0 2.5-1.5 4.5-3.5 5.5A4.5 4.5 0 0 0 6 17.5V22h12v-4.5a4.5 4.5 0 0 0-2.5-4c-2-1-3.5-3-3.5-5.5V2"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6" />
    </svg>
  ),
  ear: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 0 0 9-9c0-4.5-3-8.5-7.5-8.5S6 7.5 6 12a4.5 4.5 0 0 0 4.5 4.5c1.5 0 3-1 3-2.5v-1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
    </svg>
  ),
  throat: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18M8 8l4-5 4 5M8 16l4 5 4-5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  ),
  scalpel: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
      />
    </svg>
  ),
};

// --- Categorized Services Data ---
const categoriesData = [
  {
    id: "nose",
    title: "Nose Procedures",
    shortName: "Nose",
    description:
      "Advanced surgical and aesthetic procedures to enhance nasal function and facial harmony.",
    icon: icons.nose,
    procedures: [
      "Ultrasonic Rhinoplasty",
      "Pituitary Adenoma Removal",
      "CSF Leak Repair",

      "Septorhinoplasty",
      "FESS (Functional Endoscopic Sinus Surgery)",
      "TIP Plasty",
    ],
  },
  {
    id: "ear",
    title: "Surgeries for Chronic Ear",
    shortName: "Chronic Ear Surgeries",
    description:
      "Comprehensive microscopic and surgical treatments for chronic ear conditions and hearing restoration.",
    icon: icons.ear,
    procedures: [
      "Mastoidectomy",
      "Myringoplasty",
      "Hearing Restoration",
      "Stapedotomy",
      "Tympanoplasty",
      "Ossiculoplasty",
      "Myringotomy",
      "Grommets",
    ],
  },
  {
    id: "head-neck",
    title: "Head & Neck Surgeries",
    shortName: "Head & Neck",
    description:
      "Specialized, highly precise surgical interventions for complex head, neck, and throat conditions.",
    icon: icons.throat,
    procedures: [
      "Microscopic Thyroidectomy",
      "Microscopic Parotidectomy",
      "Tonsillectomy",
      "Submandibular Gland Excisions",
      "Neck Dissection for Head and Neck Tumors",
    ],
  },
  {
    id: "other",
    title: "Other Procedures",
    shortName: "Other Procedures",
    description:
      "A wide range of specialized minor to major clinical extractions, removals, and reconstructions.",
    icon: icons.scalpel,
    procedures: [
      "Ear Wax Removal",
      "Salivary Stone Removal",
      "Facial Trauma Reconstruction",
      "Carotid Tumor Excision",
      "Branchial Cyst Excision",
      "Dimple Creation",
      "Ankyloglossia (Tongue-Tie)",
      "Ranula Cyst Removal",
    ],
  },
];

const ServicesCompact = () => {
  const [activeTab, setActiveTab] = useState(categoriesData[0].id);
  const activeCategory = categoriesData.find((c) => c.id === activeTab);

  return (
    <section
      className="relative py-20 bg-[var(--background)] transition-colors duration-300"
      id="services"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
            Our{" "}
            <span className="text-[var(--primary)]">Surgical & Medical</span>{" "}
            Services
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
            Explore our specialized categories below to learn more about the
            extensive treatments and procedures we offer at the Hub.
          </p>
        </div>

        {/* --- Category Navigation Pills --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categoriesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border-2 
                ${
                  activeTab === category.id
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-[0_4px_20px_rgba(171,38,43,0.4)] scale-105"
                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50"
                }`}
            >
              {category.shortName}
            </button>
          ))}
        </div>

        {/* --- Active Category Content Card --- */}
        <div className="relative rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl p-8 md:p-12 overflow-hidden transition-all duration-300">
          {/* Faint Background Logo/Icon */}
          <div className="absolute -right-8 -bottom-8 text-[var(--primary)] opacity-[0.05] w-72 h-72 pointer-events-none transition-opacity duration-300">
            {activeCategory.icon}
          </div>

          <div
            key={activeTab}
            className="relative z-10 animate-[fadeSlideUp_0.4s_ease-out]"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left mb-10">
              <div className="w-20 h-20 shrink-0 flex items-center justify-center rounded-2xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--primary)] shadow-inner">
                {activeCategory.icon}
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-3 tracking-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed max-w-3xl">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            {/* Sub-procedures Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {activeCategory.procedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] shadow-sm hover:border-[var(--primary)]/50 transition-colors"
                >
                  <span className="text-[var(--primary)] shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-[var(--foreground)] font-semibold text-sm md:text-base">
                    {proc}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={`/book?category=${activeCategory.id}`}
                className="hidden md:inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-bold text-lg transition-all hover:bg-[var(--primary)] hover:text-white"
              >
                Book Consult
              </Link>

              {/* Mobile Booking Button (WhatsApp) */}
              <a
                href="https://wa.me/923005843974"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-[var(--primary)] text-white font-bold text-lg shadow-lg"
              >
                Book Consult
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Note --- */}
        {/* --- Bottom Note --- */}
        <div className="mt-16 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
            ...Or any other{" "}
            <span className="text-[var(--primary)]">Endo-Nasal</span> Procedure
          </h3>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full opacity-50"></div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </section>
  );
};

export default ServicesCompact;
