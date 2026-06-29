import React from "react";

// --- Medical Tech Icons ---
const PiezosurgeryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-9 h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const ScopeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-9 h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ExpertiseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-9 h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    />
  </svg>
);

export default function ClinicalDossierWhyUs() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[var(--background)] overflow-hidden"
    >
      {/* Background Precision Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--primary)]"></span>
            The Standard of Care
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-none mb-8">
            Precision Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Surgical Mastery.
            </span>
          </h3>
          <p className="text-xl text-[var(--foreground-muted)] max-w-2xl font-light">
            We don't just provide treatments; we define the clinical protocols
            for ENT and Rhinoplasty excellence in Rawalpindi & Islamabad.
          </p>
        </div>

        {/* --- Structural Masonry Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Tech Block (Large) */}
          <div className="md:col-span-8 bg-[var(--card-bg)] border border-[var(--border-color)] p-10 rounded-[2rem] flex flex-col justify-between group hover:border-[var(--primary)] transition-all duration-500 min-h-[400px]">
            <div className="flex justify-between items-start">
              <div className="text-[var(--primary)] bg-[var(--background)] p-4 rounded-2xl shadow-inner border border-[var(--border-color)] group-hover:scale-110 transition-transform duration-500">
                <PiezosurgeryIcon />
              </div>
              <span className="text-4xl font-black text-[var(--foreground)] opacity-10 group-hover:opacity-100 group-hover:text-[var(--primary)] transition-all">
                01
              </span>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                Ultrasonic Piezosurgery
              </h4>
              <p className="text-[var(--foreground-muted)] text-lg max-w-xl leading-relaxed">
                As the leading{" "}
                <span className="text-[var(--foreground)] font-bold">
                  Rhinoplasty Hub
                </span>
                , we utilize high-frequency ultrasonic vibrations to sculpt
                nasal bones without damaging soft tissue or blood vessels. This
                means zero bone breaking, minimal bruising, and a drastically
                shorter recovery.
              </p>
            </div>
          </div>

          {/* Stat Box (Small) */}
          <div className="md:col-span-4 bg-[var(--secondary)] p-10 rounded-[2rem] flex flex-col justify-center items-center text-center text-white shadow-2xl">
            <p className="text-6xl font-black mb-2">99%</p>
            <p className="text-sm uppercase tracking-widest font-bold opacity-80">
              Patient Satisfaction
            </p>
            <div className="w-12 h-[1px] bg-white/30 my-6"></div>
            <p className="text-xs leading-relaxed italic opacity-70">
              "Based on 5,000+ specialized surgical procedures performed since
              2014."
            </p>
          </div>

          {/* Detail Box (Medium) */}
          <div className="md:col-span-4 bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-[2rem] hover:bg-[var(--background)] transition-all group">
            <div className="text-[var(--primary)] mb-6 group-hover:-translate-y-1 transition-transform">
              <ScopeIcon />
            </div>
            <h4 className="text-xl font-bold text-[var(--foreground)] mb-3">
              Diagnostic Accuracy
            </h4>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              Every surgery starts with high-definition endoscopic assessments.
              Whether it's a septorhinoplasty or any other endonasal procedure,
              our diagnostic precision ensures we treat the root cause, not just
              the symptom.
            </p>
          </div>

          {/* Detailed Box (Wide) */}
          <div className="md:col-span-8 bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center hover:border-[var(--primary)] transition-all">
            <div className="text-[var(--primary)] bg-[var(--background)] p-6 rounded-3xl border border-[var(--border-color)] shrink-0">
              <ExpertiseIcon />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">
                Board-Certified Surgical Team
              </h4>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                Our surgeons hold specialized certifications in both functional
                ENT and Aesthetic Plastic Surgery. This dual-competency is why
                patients choose the Hub for everything from life-changing
                Rhinoplasty to complex Thyroidectomies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
