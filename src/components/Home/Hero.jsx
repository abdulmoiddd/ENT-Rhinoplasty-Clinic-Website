import React from "react";
import Link from "next/link";
import Image from "next/image";

// --- Custom Icons ---
const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.438-5.239-3.787-6.677-6.677l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

export default function EditorialHero() {
  return (
    <section className="relative bg-[var(--background)] pt-24 pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 w-px h-full bg-[var(--border-color)]"></div>
        <div className="absolute left-[50%] top-0 w-px h-full bg-[var(--border-color)] hidden md:block"></div>
        <div className="absolute left-[90%] top-0 w-px h-full bg-[var(--border-color)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* --- LEFT COLUMN: Typography & Content --- */}
          <div className="max-w-xl xl:max-w-2xl relative z-20 mx-auto lg:mx-0 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-px w-8 sm:w-12 bg-[var(--primary)]"></div>
              <p className="text-[var(--primary)] font-bold tracking-widest uppercase text-xs sm:text-sm">
                Rawalpindi & Islamabad
              </p>
              <div className="h-px w-8 sm:w-12 bg-[var(--primary)] lg:hidden"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[var(--foreground)] leading-[1.1] mb-6">
              Refining Health. <br className="hidden sm:block" />
              <span className="text-[var(--secondary)]">Restoring Form.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              The premier ENT & Rhinoplasty Hub. We specialize in ultrasonic
              rhinoplasty, complex ear & throat surgeries,Dealt with Head & Neck
              tumors surgeries and advanced facial trauma reconstruction.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 lg:mb-12">
              <a
                href="https://wa.me/923005843974"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--primary)] text-white px-6 sm:px-8 py-4 rounded-none font-semibold text-base sm:text-lg hover:bg-[var(--secondary)] transition-colors duration-300"
              >
                <CalendarIcon /> Schedule Consultation
              </a>
              <Link
                href="tel:+923005843974"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-[var(--border-color)] text-[var(--foreground)] px-6 sm:px-8 py-4 rounded-none font-semibold text-base sm:text-lg hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-300"
              >
                <PhoneIcon /> 0300 584 3974
              </Link>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                "Ultrasonic Rhinoplasty",
                "Tonsillectomy",
                "MicroscopicThyroidectomy",
                "Hearing Restoration",
              ].map((service, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground-muted)] text-xs sm:text-sm font-medium rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Image & Floating Elements --- */}
          <div className="relative z-10 w-full h-[450px] sm:h-[550px] lg:h-[700px] flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative w-full sm:w-[90%] md:w-[85%] h-full bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden rounded-t-[6rem] sm:rounded-t-[10rem] shadow-2xl">
              <Image
                src="/doc.png"
                fill
                className="object-cover"
                alt="ENT Clinic"
                priority
              />
              {/* Lowered, softer gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent"></div>
              {/* Placeholder Icon (Remove if your image is clear enough) */}
              <div className="absolute inset-0 flex items-center justify-center text-[var(--foreground-muted)] flex-col gap-2 pointer-events-none">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-12 h-12 opacity-30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Trust Card */}
            {/* Responsive positioning: Centered on mobile, offset on desktop */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-auto sm:-bottom-8 md:bottom-10 md:-left-8 lg:-left-12 bg-[var(--card-bg)] border border-[var(--border-color)] p-4 sm:p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-md w-[calc(100%-2rem)] sm:w-auto sm:max-w-[300px] mx-auto z-30">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-[var(--foreground)] font-bold text-base sm:text-lg mb-2 leading-snug">
                Dr. Haitham Akaash – ENT, Head & Neck & Rhinoplasty Surgeon
              </p>
              <p className="text-[var(--foreground-muted)] text-xs sm:text-sm line-clamp-4 sm:line-clamp-none">
                "B.S.Ed, B.S.C(Hons), M.B.B.S, MRCS(EdinBurgh), FCPS, PGD
                (Hearing Sciences), Vestibular Diploma, CHPE, HCQM Certificate,
                Clinical Attachment In Advanced Otology (Universal College
                London) "
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
