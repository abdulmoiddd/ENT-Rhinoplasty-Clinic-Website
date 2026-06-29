import React from "react";

// --- Custom ENT & Rhinoplasty Icons ---
const SurgeonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.008H12V12Z" />
  </svg>
);

const UltrasonicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Z"
    />
  </svg>
);

const AestheticIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

const ClinicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
    />
  </svg>
);

const PrecisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.25-1.591 1.591M5.25 12H3m4.25-4.773L5.659 5.659M12 12l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532-3.29-3.29"
    />
  </svg>
);

const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.854-1.106-2.23 0-3.085 1.147-.88 2.911-.88 4.058 0L15 9"
    />
  </svg>
);

// --- ENT Hub Data ---
const features = [
  {
    title: "Specialized Surgeons",
    description:
      "Our board-certified ENT specialists bring years of surgical experience in complex rhinoplasty and head and neck procedures.",
    icon: <SurgeonIcon />,
  },
  {
    title: "Ultrasonic Technology",
    description:
      "We utilize advanced Piezosurgery for ultrasonic rhinoplasty, ensuring bone precision with significantly less bruising and faster healing.",
    icon: <UltrasonicIcon />,
  },
  {
    title: "Functional Aesthetics",
    description:
      "Our philosophy combines cosmetic enhancement with physiological restoration—improving how you look while ensuring you breathe perfectly.",
    icon: <AestheticIcon />,
  },
  {
    title: "Modern Surgical Suite",
    description:
      "A fully equipped, sterile clinical environment designed for specialized ENT procedures, from polyp removal to thyroidectomies.",
    icon: <ClinicIcon />,
  },
  {
    title: "Surgical Precision",
    description:
      "High-definition endoscopic tools and micro-surgical instruments allow for minimally invasive treatments with maximum accuracy.",
    icon: <PrecisionIcon />,
  },
  {
    title: "Dedicated Aftercare",
    description:
      "Our recovery protocols provide continuous post-operative support, ensuring long-term success and patient satisfaction.",
    icon: <SupportIcon />,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-24 bg-[var(--background)] transition-colors duration-300 overflow-hidden"
      id="why-us"
    >
      {/* --- Ambient Background Elements --- */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-bl from-[var(--primary)]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[40vw] h-[40vw] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Massive Faint Background Text */}
      <div className="absolute top-32 left-0 right-0 flex justify-center items-center opacity-[0.02] pointer-events-none overflow-hidden select-none">
        <h2 className="text-[15vw] font-black text-[var(--foreground)] whitespace-nowrap">
          ENT HUB
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold uppercase tracking-widest border border-[var(--primary)]/20 mb-6 shadow-sm">
            The Hub Advantage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight leading-[1.1] mb-6">
            Why Trust the <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              ENT & Rhinoplasty Hub?
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)]">
            We redefine specialized medical care by merging surgical artistry
            with the most advanced clinical technologies in Pakistan.
          </p>
        </div>

        {/* --- Focus-Reveal Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 group/grid relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] transition-all duration-500 overflow-hidden group/card
                         hover:!opacity-100 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(171,38,43,0.2)] hover:border-[var(--primary)]/50
                         group-hover/grid:opacity-40"
            >
              {/* Animated Background Glow on Hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary)] opacity-0 group-hover/card:opacity-20 blur-[50px] transition-opacity duration-500 rounded-full" />

              {/* Number Watermark */}
              <div className="absolute top-4 right-8 text-[var(--foreground-muted)] opacity-10 font-black text-6xl tracking-tighter transition-all duration-500 group-hover/card:text-[var(--primary)] group-hover/card:opacity-20">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--primary)] flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 group-hover/card:bg-[var(--primary)] group-hover/card:text-white group-hover/card:border-[var(--primary)]">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Animated Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[var(--primary)] transition-all duration-500 group-hover/card:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
