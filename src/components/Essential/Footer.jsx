import React from "react";
import Link from "next/link";
import Image from "next/image";

// --- ASSETS ---
// Make sure these point to your actual light/dark logo files
import LogoDarkText from "../../assets/logo.png";
import LogoWhiteText from "../../assets/logowhite.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Links imported directly from your Navbar configuration
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About us", path: "/#about" },
    { name: "Our Clinic", path: "/#gallery" },
    { name: "Testimonials", path: "/#reviews" },
    { name: "Blogs", path: "/blog" },
    { name: "Faqs", path: "/#FAQS" },
  ];

  return (
    <footer className="relative bg-[var(--background)] border-t border-[var(--border-color)] overflow-hidden pt-16 md:pt-24 pb-6 md:pb-8 transition-colors duration-300">
      {/* =========================================
          BACKGROUND WATERMARK & GLOW
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-end overflow-hidden">
        {/* Subtle ambient glow behind the watermark */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] blur-[100px] md:blur-[200px] rounded-full mix-blend-screen opacity-10 transition-colors duration-1000"
          style={{ backgroundColor: "var(--primary)" }}
        ></div>

        {/* Massive Brand Watermark (ENT HUB) */}
        <div className="flex justify-center items-end w-full translate-y-[28%] select-none">
          <span className="text-[20vw] md:text-[22vw] font-black leading-none tracking-tighter text-[var(--foreground)] opacity-[0.02] uppercase">
            ENT HUB
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* =========================================
            MAIN FOOTER CONTENT GRID
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          {/* Column 1: Brand & Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            {/* THEME-AWARE LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3 mb-6"
              aria-label="ENT Hub Home"
            >
              <Image
                src={LogoDarkText}
                alt="ENT & Rhinoplasty Hub Logo"
                className="w-32 md:w-48 h-auto object-contain dark:hidden transition-transform group-hover:scale-105"
              />
              <Image
                src={LogoWhiteText}
                alt="ENT & Rhinoplasty Hub Logo"
                className="hidden w-32 md:w-48 h-auto object-contain dark:block transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed max-w-sm mb-6 md:mb-8 font-medium">
              The premier destination for Ultrasonic Rhinoplasty, complex ENT
              surgeries, and facial aesthetics in Rawalpindi and Islamabad.
              Precision care built on surgical mastery.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a> */}
              <a
                href="https://www.instagram.com/entandrhinoplastyhub"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider mb-6 border-b border-[var(--border-color)] pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:translate-x-1 inline-block text-sm font-medium transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider mb-6 border-b border-[var(--border-color)] pb-2 inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="text-[var(--foreground-muted)] text-sm font-medium">
                <span className="block text-[var(--foreground)] font-bold mb-1">
                  Clinic Locations:
                </span>
                <a
                  href="https://maps.app.goo.gl/uFssDJ3ssGss8fY67"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Satellite Town 4th B Road, Rawalpindi, Pakistan
                </a>
              </li>
              <li className="text-[var(--foreground-muted)] text-sm font-medium">
                <span className="block text-[var(--foreground)] font-bold mb-1">
                  Phone:
                </span>
                <a
                  href="tel:+923005843974"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  0300 584 3974
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[var(--foreground-muted)] hover:text-[var(--primary)] text-sm font-medium transition-colors duration-200 mt-4 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-medium text-center md:text-left">
            &copy; {currentYear} ENT & Rhinoplasty Hub. All rights reserved.
          </p>

          <div className="flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold text-[var(--foreground-muted)]">
              Develpoped By Abdul Moid
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
