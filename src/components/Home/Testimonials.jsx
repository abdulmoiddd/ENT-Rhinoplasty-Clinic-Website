"use client";

import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Nida Faitma",
      content:
        "We had a very good experience at this clinic for my daughter. Dr. Haitham Akaash was professional, patient, and explained everything clearly. The staff was courteous, and the clinic was well-organized. Highly satisfied with the care provided and would definitely recommend.",
      avatar: "NF",
    },
    {
      id: 2,
      name: "Junaid Mahar",
      content:
        "Dr. Haitham Akash is an exceptional ENT specialist with humble personality who combines deep clinical expertise with genuine patient care. He listens carefully, explains conditions clearly, and ensures patients feel comfortable throughout their treatment. His professionalism, accurate diagnosis, and compassionate approach truly set him apart. Highly recommended for anyone seeking expert ENT care.",
      avatar: "JM",
    },
    {
      id: 3,
      name: "Esha Jamshaid",
      content:
        "The doctor's treatment was highly effective in addressing my ear pain, and I appreciated the minimalist approach to medication. The charges were also very reasonable. Overall, I had a very positive experience and would highly recommend this doctor.",
      avatar: "EJ",
    },
    {
      id: 4,
      name: "Adnan Habib",
      content:
        "Great experience with Dr haitham akaash because his talking style with patients relief half from deseas. Highly recommend",
      avatar: "AH",
    },
    {
      id: 5,
      name: "Priya Sharma",
      content:
        "The transition to Aicyro’s intelligent lead capture boosted our conversion rate by 34% within the first month. The webhook routing to Make.com is lightning-fast and reliable.",
      avatar: "PS",
    },
    {
      id: 6,
      name: "Maria khalid",
      content:
        "Just had my daughter septoplasti and rhino from there.to be honest I was kind of scared of how will it be but it went very good no bruising.and results are amazing .highly trusted doctor.",
      avatar: "MK",
    },
    {
      id: 7,
      name: "Mr. Khan",
      content:
        "uch a nice doctor ....I am very impressed with his kind nature and I suggest to everyone please visit him once...",
      avatar: "MK",
    },
    {
      id: 8,
      name: "Asif Hayat",
      content:
        "Very satisfactory treatment!!. Never met such a competent doctor..Dr Hatim Akash is truly a brilliant doctor",
      avatar: "AH",
    },
  ];

  // Duplicate the array to achieve a completely seamless infinite loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      className="py-20 md:py-28 bg-[var(--background)] relative overflow-hidden transition-colors duration-300"
      id="reviews"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--primary)]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
          Client Impact
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4">
          Trusted by Innovators Worldwide
        </h2>
        <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
          See how forward-thinking businesses are scaling operations, automating
          workflows, and driving conversions with Aicyro.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Vignettes for Smooth Card Entry/Exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" />

        {/* Marquee Animated Flex Track */}
        <div className="flex w-max animate-marquee hover:animation-paused gap-6 py-4 px-3">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[380px] flex flex-col justify-between p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm hover:border-[var(--primary)]/50 hover:shadow-[0_0_25px_var(--lead-glow)] transition-all duration-300 shrink-0 group"
            >
              {/* Quote Content */}
              <div>
                {/* 5-Star SVGs */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[var(--foreground)] leading-relaxed mb-6 line-clamp-4">
                  "{item.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                {/* Fallback Initials Avatar */}
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] font-bold text-sm shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {item.avatar}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-[var(--foreground)] truncate">
                    {item.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal CSS for Infinite Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
