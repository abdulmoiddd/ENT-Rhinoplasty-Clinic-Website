import React from "react";

// --- Custom SVGs tailored for ENT & Rhinoplasty ---
const SurgeonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

const UltrasonicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>
);

const AestheticsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

// --- Content Data ---
const highlights = [
  {
    title: "Board-Certified Surgeons",
    description:
      "Our ENT specialists bring years of elite surgical experience in complex rhinoplasty and head & neck procedures.",
    icon: <SurgeonIcon />,
  },
  {
    title: "Ultrasonic Technology",
    description:
      "We utilize advanced Piezosurgery for precise bone sculpting, ensuring minimal bruising and faster recovery times.",
    icon: <UltrasonicIcon />,
  },
  {
    title: "Functional Aesthetics",
    description:
      "We focus on both cosmetic enhancement and physiological restoration—so you look great and breathe perfectly.",
    icon: <AestheticsIcon />,
  },
  {
    title: "Dedicated Aftercare",
    description:
      "From pre-op consultation to full recovery, we provide personalized, compassionate care every step of the way.",
    icon: <HeartIcon />,
  },
];

export default function TrustHighlights() {
  return (
    <section className="relative py-24 bg-[var(--background)] transition-colors duration-300 overflow-hidden">
      {/* Background ambient glow matching the theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[var(--primary)] opacity-5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold uppercase tracking-widest border border-[var(--primary)]/20 mb-6">
            The Hub Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight leading-tight">
            Excellence in Surgical Care &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Facial Aesthetics
            </span>
          </h2>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover background highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--primary)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--primary)] mb-6 group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 z-10">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
