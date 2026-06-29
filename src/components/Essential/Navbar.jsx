"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle"; // Assuming this is your existing theme toggle component

// --- ASSETS ---
import LogoDarkText from "../../assets/logo.png";
import LogoWhiteText from "../../assets/logowhite.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection for the glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    // { name: "The Hub Advantage", path: "/#why-us" },
    { name: "About us", path: "/#about" },
    // { name: "Contact", path: "/#contact" },
    { name: "Our Clinic", path: "/#gallery" },
    { name: "Testimonials", path: "/#reviews" },
    { name: "Blogs", path: "/blog" },

    { name: "Faqs", path: "/#FAQS" },
  ];

  // --- SMOOTH SCROLL HANDLER ---
  const handleNavClick = (e, path) => {
    // 1. Close mobile menu on click
    setIsMobileMenuOpen(false);

    // 2. Only intercept if it's a hash link AND we are currently on the Home page
    if (path.startsWith("/#") && pathname === "/") {
      e.preventDefault(); // Stop default instant jump

      const targetId = path.replace("/#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calculate offset (adjust the -100 to fit the height of your navbar)
        const yOffset = -100;
        const yPosition =
          targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        // Smooth scroll to the target
        window.scrollTo({ top: yPosition, behavior: "smooth" });

        // Optionally update the URL hash without jumping
        window.history.pushState(null, "", `/#${targetId}`);
      }
    } else if (path === "/" && pathname === "/") {
      // Handle clicking "Home" while already on the Home page (scroll to top)
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border-color)] shadow-sm py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* =========================================
              BRAND LOGO
          ========================================= */}
          <Link
            href="/"
            className="flex items-center z-50 group"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <Image
              src={LogoDarkText}
              alt="ENT & Rhinoplasty Hub Logo"
              className="w-40 md:w-48 h-auto object-contain dark:hidden transition-transform group-hover:scale-105"
            />
            <Image
              src={LogoWhiteText}
              alt="ENT & Rhinoplasty Hub Logo"
              className="hidden w-40 md:w-48 h-auto object-contain dark:block transition-transform group-hover:scale-105"
            />
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--card-bg)]/50 backdrop-blur-md border border-[var(--border-color)] rounded-full px-2 py-1 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="px-5 py-2 text-sm font-semibold text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* =========================================
              DESKTOP ACTIONS
          ========================================= */}
          <div className="hidden md:flex items-center gap-4 z-50">
            <ThemeToggle />
            <a
              href="https://wa.me/923005843974"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-bold text-white bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md border border-[var(--primary)]"
            >
              Schedule Consultation
            </a>
          </div>

          {/* =========================================
              MOBILE TOGGLE BUTTON
          ========================================= */}
          <div className="flex md:hidden items-center gap-3 z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -mr-2 text-[var(--foreground)] hover:bg-[var(--foreground)]/5 rounded-lg transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE SIDE DRAWER
      ========================================= */}
      {/* Blurred Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--background)]/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-[var(--card-bg)] border-l border-[var(--border-color)] shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
          <span className="text-lg font-black text-[var(--foreground)] ml-2 tracking-tight">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors bg-[var(--background)] rounded-full border border-[var(--border-color)] hover:bg-[var(--foreground)]/5"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Panel Links */}
        <div className="flex flex-col flex-1 py-6 px-4 gap-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="px-4 py-3.5 text-lg font-semibold text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Panel Footer */}
        <div className="p-6 border-t border-[var(--border-color)] bg-[var(--background)]/50">
          <Link
            href="/book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-4 text-base font-bold text-white bg-[var(--primary)] rounded-xl hover:bg-[var(--secondary)] transition-all shadow-[0_0_20px_rgba(171,38,43,0.3)] hover:-translate-y-0.5 border border-[var(--primary)]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
