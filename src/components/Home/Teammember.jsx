import React from "react";
import Link from "next/link";

// --- Placeholder Icon for Portraits ---
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    className="w-20 h-20 text-[var(--foreground-muted)] opacity-50"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

// --- LinkedIn Icon for Doctors ---
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- Team Data ---
const teamMembers = [
  {
    id: "dr-ahmed",
    name: "Dr. Ahmed Khan",
    position: "Senior Physiotherapist & Rehab Specialist",
    bio: "Dr. Ahmed Khan specializes in orthopedic rehabilitation, sports injuries, and chronic pain management. With years of clinical experience, he focuses on personalized treatment plans that help patients recover safely and effectively.",
    specialties: [
      "Sports Rehabilitation",
      "Back Pain Treatment",
      "Post-Surgery Recovery",
      "Manual Therapy",
    ],
    image: null, // Replace with "/images/dr-ahmed.jpg" when available
  },
  {
    id: "dr-sarah",
    name: "Dr. Sarah Ali",
    position: "Neurological Physiotherapist",
    bio: "Dr. Sarah Ali works with stroke rehabilitation, mobility disorders, and neurological conditions. She is dedicated to improving patient independence and quality of life through compassionate therapy.",
    specialties: [
      "Stroke Rehabilitation",
      "Balance Training",
      "Neurological Therapy",
      "Mobility Improvement",
    ],
    image: null,
  },
  {
    id: "dr-hassan",
    name: "Dr. Hassan Raza",
    position: "Sports Physiotherapist",
    bio: "Dr. Hassan Raza helps athletes and active individuals recover from sports injuries and improve physical performance through advanced rehabilitation programs.",
    specialties: [
      "Sports Injuries",
      "Muscle Rehabilitation",
      "Strength Training",
      "Injury Prevention",
    ],
    image: null,
  },
  {
    id: "dr-ayesha",
    name: "Dr. Ayesha Malik",
    position: "Pediatric Physiotherapist",
    bio: "Dr. Ayesha Malik provides specialized physiotherapy care for children with movement, posture, and developmental challenges.",
    specialties: [
      "Pediatric Therapy",
      "Developmental Support",
      "Posture Correction",
      "Pediatric Rehabilitation",
    ],
    image: null,
  },
];

const TeamSection = () => {
  return (
    <section
      className="relative py-24 bg-[var(--background)] transition-colors duration-300"
      id="team"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[var(--card-bg)] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold uppercase tracking-widest border border-[var(--primary)]/20 mb-6">
            Our Medical Team
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight leading-[1.1] mb-6">
            Meet Our Physiotherapy <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Experts
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Our certified specialists combine years of clinical experience with
            a passion for helping you live a pain-free, active life.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group flex flex-col bg-[var(--background)] border border-[var(--border-color)] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)]/50"
            >
              {/* --- Portrait Container --- */}
              <div className="relative w-full aspect-square bg-[var(--card-bg)] overflow-hidden">
                {/* Dynamic background glow behind the photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent-blue)]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // Placeholder if no image is provided
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <UserIcon />
                    <span className="text-xs font-mono text-[var(--foreground-muted)] mt-2 uppercase tracking-widest px-3 py-1 border border-[var(--border-color)] rounded-full">
                      Photo Required
                    </span>
                  </div>
                )}

                {/* Subtle gradient overlay at the bottom of the photo to blend into the card body */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
              </div>

              {/* --- Content Body --- */}
              <div className="flex flex-col flex-grow p-6 pt-4">
                <div className="mb-4">
                  <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold text-[var(--primary)] uppercase tracking-wide leading-snug">
                    {member.position}
                  </p>
                </div>

                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>

                {/* Specialties Tags */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-[var(--foreground)] uppercase tracking-widest mb-3">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-medium text-[var(--foreground-muted)]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action & Social */}
                <div className="flex items-center justify-between pt-5 border-t border-[var(--border-color)] mt-auto">
                  <Link
                    href={`/book?doctor=${member.id}`}
                    className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors flex items-center gap-1"
                  >
                    Book Consult
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  <a
                    href="#"
                    className="p-2 text-[var(--foreground-muted)] hover:text-[#0077b5] transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
