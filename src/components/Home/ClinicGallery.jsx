"use client";
import React from "react";
import Image from "next/image";

const clinicImages = [
  "/clinic/1.jpeg",
  "/clinic/2.jpeg",
  "/clinic/3.jpeg",
  "/clinic/4.jpeg",
  "/clinic/5.jpeg",
  "/clinic/6.jpeg",
  "/clinic/7.jpeg",
  "/clinic/8.jpeg",
  "/clinic/9.jpeg",
  "/clinic/10.jpeg",
  "/clinic/11.jpeg",
  "/clinic/12.jpeg",
  "/clinic/13.jpeg",
  "/clinic/14.jpeg",
  "/clinic/15.jpeg",
  "/clinic/16.jpeg",
  "/clinic/17.jpeg",
  "/clinic/18.jpeg",
  "/clinic/19.jpeg",
  "/clinic/20.jpeg",
  "/clinic/21.jpeg",
  "/clinic/22.jpeg",
  "/clinic/23.jpeg",
  "/clinic/24.jpeg",
  "/clinic/25.jpeg",
  "/clinic/26.jpeg",
  "/clinic/27.jpeg",
];

const ClinicGallery = () => {
  return (
    <section
      className="py-24 bg-[var(--background)] overflow-hidden"
      id="gallery"
    >
      {/* Container */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
          Visualizing <span className="text-[var(--primary)]">Excellence</span>
        </h2>
      </div>

      {/* Marquee Wall */}
      <div className="relative flex flex-col gap-8 w-full">
        {/* The Marquee Row */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...clinicImages, ...clinicImages].map((src, index) => (
            <div
              key={index}
              className="relative w-72 h-72 mx-4 rounded-3xl overflow-hidden bg-[var(--card-bg)] shadow-2xl border border-[var(--border-color)] group"
            >
              {/* Image with subtle overlay */}
              <Image
                src={src}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110"
                alt="Clinic Facility"
              />
              {/* Glassmorphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-60" />

              {/* Decorative corner tag */}
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(108,27,32,0.8)]" />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default ClinicGallery;
