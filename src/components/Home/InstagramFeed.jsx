"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Custom SVGs ---
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.059 3.252.148 4.771 1.691 4.919 4.919.047 1.266.059 1.646.059 4.859s-.012 3.593-.059 4.859c-.148 3.228-1.667 4.771-4.919 4.919-1.266.047-1.646.059-4.85.059s-3.584-.012-4.85-.059c-3.252-.148-4.771-1.691-4.919-4.919-.047-1.266-.059-1.646-.059-4.859s.012-3.593.059-4.859c.148-3.228 1.667-4.771 4.919-4.919 1.266-.047 1.646-.059 4.85-.059zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" />
  </svg>
);

// Fallback dummy data if the API is not connected yet
const dummyPosts = [
  { id: 1, src: "/clinic/1.jpeg", link: "https://instagram.com" },
  { id: 2, src: "/clinic/2.jpeg", link: "https://instagram.com" },
  { id: 3, src: "/clinic/3.jpeg", link: "https://instagram.com" },
  { id: 4, src: "/clinic/4.jpeg", link: "https://instagram.com" },
  { id: 5, src: "/clinic/5.jpeg", link: "https://instagram.com" },
  { id: 6, src: "/clinic/6.jpeg", link: "https://instagram.com" },
  { id: 7, src: "/clinic/7.jpeg", link: "https://instagram.com" },
  { id: 8, src: "/clinic/8.jpeg", link: "https://instagram.com" },
];

const InstagramFeed = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const res = await fetch("/api/instagram");
        const data = await res.json();

        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Failed to load live Instagram feed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="py-24 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--foreground)] tracking-tight mb-2">
              Join Our <span className="text-[var(--primary)]">Community</span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              Follow our daily surgical insights, patient transformations, and
              clinic updates.
            </p>
          </div>

          <Link
            href="https://www.instagram.com/entandrhinoplastyhub" // Update with your IG Link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 shadow-lg"
          >
            <InstagramIcon />
            Follow @entandrhinoplastyhub
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--background)] block"
            >
              {/* Image */}
              <Image
                src={post.src}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-110 ${loading ? "opacity-50 blur-sm" : "opacity-100 blur-0"}`}
                alt="Instagram Post"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Hover Overlay with Instagram Logo */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <InstagramIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
