import Head from "next/head";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";
import Hero from "../components/Home/Hero";
import TrustHighlights from "@/components/Home/TrustHighlights";
import About from "@/components/Home/Aboutus";
import Services from "@/components/Home/Services";
import Conditions from "@/components/Home/condition";
import WhyChooseUs from "@/components/Home/Whyschoseus";
import TeamSection from "@/components/Home/Teammember";
import ClinicGallery from "@/components/Home/ClinicGallery";
import InstagramFeed from "@/components/Home/InstagramFeed";
import Testimonials from "@/components/Home/Testimonials";
import FaqSection from "@/components/Home/Faqs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-x-hidden scroll-smooth selection:bg-[var(--primary)] selection:text-white">
      {/* Updated selection text color to white for better contrast against your primary red/maroon */}
      <Head>
        <title>ENT & Rhinoplasty Hub | Premium Surgical & Aesthetic Care</title>
        <meta
          name="description"
          content="The premier destination for Ultrasonic Rhinoplasty, complex ENT surgeries, and facial aesthetics in Rawalpindi and Islamabad. Book your consultation today."
        />
        <meta
          name="keywords"
          content="Rhinoplasty, ENT Specialist, Ultrasonic Rhinoplasty, Facial Aesthetics, Ear Nose Throat Surgeon, Rawalpindi, Islamabad, Head and Neck Surgery"
        />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Padding to account for fixed navbar */}
        <Hero />
        <TrustHighlights />
        <ClinicGallery />

        <About />
        <Services />
        <InstagramFeed />
        {/* <Conditions /> */}
        <WhyChooseUs />
        <Testimonials />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
