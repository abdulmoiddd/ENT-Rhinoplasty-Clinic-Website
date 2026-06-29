import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Head>
        <title>
          Expert Rhinoplasty Articles & Guides | ENT & Rhinoplasty Hub
        </title>
        <meta
          name="description"
          content="Explore expert rhinoplasty guides, surgical technique comparisons, and week-by-week recovery timelines from Dr. Haitham Akaash in Rawalpindi."
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-24 pb-20 px-6 sm:px-8 max-w-5xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-4">
            Patient Education Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Rhinoplasty Insights & Surgical Guides
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Comprehensive breakdowns on surgical techniques, full procedural
            expectations, and detailed healing timelines directly from our
            surgical team.
          </p>
        </div>

        {/* Sticky Quick-Jump Bar */}
        <div className="sticky top-20 z-20 bg-[var(--background)]/90 backdrop-blur-md py-4 mb-10 border-b border-[var(--border-color)]">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            <button
              onClick={() => scrollToSection("blog-1")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                activeTab === "blog-1"
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
                  : "bg-[var(--card-bg)] text-[var(--foreground-muted)] border-[var(--border-color)] hover:border-[var(--primary)]/50"
              }`}
            >
              Open vs. Closed Technique
            </button>
            <button
              onClick={() => scrollToSection("blog-2")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                activeTab === "blog-2"
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
                  : "bg-[var(--card-bg)] text-[var(--foreground-muted)] border-[var(--border-color)] hover:border-[var(--primary)]/50"
              }`}
            >
              The Full Surgical Journey
            </button>
            <button
              onClick={() => scrollToSection("blog-3")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                activeTab === "blog-3"
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
                  : "bg-[var(--card-bg)] text-[var(--foreground-muted)] border-[var(--border-color)] hover:border-[var(--primary)]/50"
              }`}
            >
              Week-by-Week Recovery Timeline
            </button>
          </div>
        </div>

        {/* Articles Container */}
        <div className="space-y-16">
          {/* ==========================================
              ARTICLE 1: OPEN VS CLOSED
          ========================================== */}
          <article
            id="blog-1"
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300 hover:border-[var(--primary)]/40 scroll-mt-28"
          >
            <header className="mb-8 border-b border-[var(--border-color)] pb-6">
              <div className="flex items-center gap-3 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
                <span>Surgical Methodology</span>
                <span>•</span>
                <span>5 Min Read</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-[var(--foreground)]">
                Open vs. Closed Rhinoplasty: Which Technique Is Right for You?
              </h2>
              <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)] font-medium">
                <span>By Dr. Haitham Akaash</span>
                <span>•</span>
                <span>ENT & Rhinoplasty Hub</span>
              </div>
            </header>

            <div className="space-y-6 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
              <p>
                One of the most common questions patients ask during a
                rhinoplasty consultation is the difference between "open" and
                "closed" rhinoplasty — and understandably so, since the terms
                get used a lot online without much explanation of what they
                actually mean for your specific case. Here's a clear breakdown
                to help you understand the conversation before you sit down with
                your surgeon.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                The Core Difference: Incision Placement and Visibility
              </h3>
              <p>
                The names refer to how the surgeon accesses the nasal structure
                during surgery.
              </p>
              <p>
                <strong className="text-[var(--primary)] font-bold">
                  Closed rhinoplasty
                </strong>{" "}
                is performed through incisions made entirely inside the
                nostrils. Because there's no external incision, there's no
                visible scarring afterward. The surgeon works through these
                internal openings to reshape cartilage and bone.
              </p>
              <p>
                <strong className="text-[var(--primary)] font-bold">
                  Open rhinoplasty
                </strong>{" "}
                uses the same internal incisions, plus one additional small
                incision across the columella — the narrow strip of skin
                separating the two nostrils. This extra incision allows the
                nasal skin to be gently lifted, giving the surgeon a direct,
                unobstructed view of the entire nasal framework.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                When Closed Rhinoplasty Is Typically Used
              </h3>
              <p>
                Closed rhinoplasty tends to be well-suited to less complex cases
                — for example, modest reshaping of the bridge, small reductions
                in size, or straightforward correction of a minor irregularity.
                Because there's no external incision, recovery time and
                post-operative swelling are often somewhat reduced compared to
                open technique, and there's no visible scar to manage during
                healing.
              </p>
              <p>
                The trade-off is reduced visibility for the surgeon, which means
                closed rhinoplasty is generally not the preferred choice for
                complex structural work or revision surgery, where precision and
                direct visualization matter more.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                When Open Rhinoplasty Is Typically Used
              </h3>
              <p>
                Open rhinoplasty is generally favored for more complex cases —
                significant reshaping of the tip, correcting asymmetry, revision
                surgery on a previously operated nose, or cases involving
                substantial structural grafting (using cartilage to rebuild or
                reinforce parts of the nose). The direct visibility lets the
                surgeon work with greater precision on intricate structural
                changes.
              </p>
              <p>
                The columella incision typically heals very well and becomes
                minimally visible over time, but it is a real consideration some
                patients factor into their decision, even though in practice
                it's rarely a significant concern once healed.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                So Which One Is "Better"?
              </h3>
              <p>
                This is the wrong question, even though it's the one most
                patients start with. Neither technique is universally superior —
                they're tools suited to different situations[cite: 1]. The right
                approach depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                <li>The complexity of the reshaping needed.</li>
                <li>Whether it's a primary or revision procedure.</li>
                <li>
                  The specific structural changes required (tip work, bridge
                  work, breathing correction).
                </li>
                <li>
                  Your surgeon's assessment of your individual nasal anatomy.
                </li>
              </ul>
              <p>
                A surgeon who recommends open technique isn't suggesting a "more
                invasive" or "worse" option — they're matching the approach to
                what your case actually requires for the best possible result.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                What This Means for Your Consultation
              </h3>
              <p>
                Rather than walking into your consultation asking to
                specifically request one technique over the other, it's more
                useful to discuss your goals and concerns openly and let the
                surgeon recommend the approach based on an actual examination of
                your nasal structure. A surgeon who takes time to explain why a
                particular technique fits your case — rather than defaulting to
                one approach for every patient — is generally a good sign of
                individualized care.
              </p>

              <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border-color)] mt-8">
                <h4 className="font-bold text-lg text-[var(--foreground)] mb-2">
                  Discuss Your Case Directly
                </h4>
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  Every nose is different, and the right technique for your
                  rhinoplasty can really only be determined after an in-person
                  examination. Dr. Haitham Akaash at ENT & Rhinoplasty Hub in
                  Rawalpindi offers a free consultation to assess your specific
                  case and walk you through which approach — and why — would be
                  recommended for your goals.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  <a
                    href="https://wa.me/923005843974"
                    className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
                  >
                    WhatsApp / Call: +92 300 5843974
                  </a>
                  <a
                    href="mailto:theentrhinoplasty@gmail.com"
                    className="px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors"
                  >
                    Email: theentrhinoplasty@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* ==========================================
              ARTICLE 2: THE SURGICAL JOURNEY
          ========================================== */}
          <article
            id="blog-2"
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300 hover:border-[var(--primary)]/40 scroll-mt-28"
          >
            <header className="mb-8 border-b border-[var(--border-color)] pb-6">
              <div className="flex items-center gap-3 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
                <span>Patient Guide</span>
                <span>•</span>
                <span>6 Min Read</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-[var(--foreground)]">
                What to Expect Before, During, and After Your Rhinoplasty
              </h2>
              <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)] font-medium">
                <span>By Dr. Haitham Akaash</span>
                <span>•</span>
                <span>ENT & Rhinoplasty Hub</span>
              </div>
            </header>

            <div className="space-y-6 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
              <p>
                Deciding to have rhinoplasty — whether for cosmetic reasons,
                breathing problems, or both — is a significant decision, and
                it's natural to have questions. At ENT & Rhinoplasty Hub in
                Rawalpindi, one of the most common things patients tell Dr.
                Haitham Akash during their first consultation is that they wish
                they'd understood the full process earlier. This guide walks
                through what actually happens at each stage, so you can go into
                your consultation informed and confident.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                What Is Rhinoplasty?
              </h3>
              <p>
                Rhinoplasty, commonly known as nose surgery or a "nose job," is
                a procedure that reshapes the nose to improve its appearance,
                correct structural problems that affect breathing, or both at
                once. It's one of the most customized procedures in facial
                surgery because no two noses — or patient goals — are the same.
                Some patients want a smaller or straighter bridge, others want
                to correct a deviated septum that's been causing breathing
                difficulty for years, and many want both addressed in a single
                procedure.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                The Initial Consultation
              </h3>
              <p>
                This is the most important step in the entire process, and it's
                worth taking seriously rather than rushing through. During your
                consultation, the surgeon will examine the internal and external
                structure of your nose, discuss your medical history, and talk
                through your goals in detail — ideally using photos or imaging
                to make sure expectations are aligned before any decision is
                made. This is also the time to ask about technique (open vs.
                closed), recovery expectations, and cost, so there are no
                surprises later.
              </p>
              <p>
                A good consultation should leave you with a clear,
                individualized plan rather than a generic answer. If a clinic
                can't explain why a particular approach suits your nose
                specifically, that's worth asking more about.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                What Happens During the Procedure
              </h3>
              <p>
                Rhinoplasty is typically performed under general anesthesia,
                though some functional (breathing-related) procedures may use
                local anesthesia with sedation depending on complexity. The
                surgery itself usually takes between 1.5 and 3 hours, depending
                on whether it's a primary procedure or a more complex revision
                case.
              </p>
              <p>There are two main surgical approaches:</p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--foreground-muted)]">
                <li>
                  <strong className="text-[var(--foreground)] font-bold">
                    Closed rhinoplasty
                  </strong>{" "}
                  is performed entirely through incisions inside the nose, which
                  means no visible external scarring. It's often preferred for
                  less complex reshaping.
                </li>
                <li>
                  <strong className="text-[var(--foreground)] font-bold">
                    Open rhinoplasty
                  </strong>{" "}
                  involves a small incision across the columella (the strip of
                  tissue between the nostrils), giving the surgeon direct
                  visibility of the nasal structure. This approach is generally
                  used for more complex reshaping, revision surgery, or cases
                  requiring significant structural work.
                </li>
              </ul>
              <p>
                Neither approach is universally "better" — the right choice
                depends entirely on your anatomy and goals, which is exactly
                what the consultation is meant to determine.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Recovery: The First Few Weeks
              </h3>
              <p>
                Immediately after surgery, you can expect swelling and bruising
                around the nose and eyes, along with a splint or cast to protect
                and support the new shape while initial healing occurs. Most
                patients describe discomfort as manageable with prescribed
                medication rather than severe pain.
              </p>
              <p>
                Within 7 to 10 days, the external splint typically comes off and
                most visible bruising has faded enough to return to normal daily
                activities and work, though strenuous exercise and contact
                sports should be avoided for several weeks longer. Patients are
                usually advised to sleep with their head elevated and avoid
                blowing their nose forcefully during this period to protect the
                healing tissue.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                The Long-Term Timeline
              </h3>
              <p>
                This is the part patients are often surprised by: rhinoplasty
                results take time to fully reveal themselves. While the major
                swelling resolves within the first month, subtle residual
                swelling — especially at the tip of the nose — can persist for
                up to a year, gradually refining the final shape. Patience
                during this period is genuinely part of the process, not a sign
                that anything went wrong.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Making the Decision
              </h3>
              <p>
                Rhinoplasty is a procedure where the relationship with your
                surgeon matters as much as the technique itself — ongoing
                communication, realistic expectations, and a clear understanding
                of your specific anatomy all contribute to a result you'll be
                happy with long-term.
              </p>

              <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border-color)] mt-8">
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  If you're considering rhinoplasty in Rawalpindi or Islamabad,
                  Dr. Haitham Akaash at ENT & Rhinoplasty Hub offers a free
                  initial consultation to discuss your goals and answer your
                  questions directly. You can reach the clinic on WhatsApp or
                  call at +92 300 5843974, or email theentrhinoplasty@gmail.com
                  to book a time.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  <a
                    href="https://wa.me/923005843974"
                    className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* ==========================================
              ARTICLE 3: RECOVERY TIMELINE
          ========================================== */}
          <article
            id="blog-3"
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300 hover:border-[var(--primary)]/40 scroll-mt-28"
          >
            <header className="mb-8 border-b border-[var(--border-color)] pb-6">
              <div className="flex items-center gap-3 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
                <span>Post-Operative Care</span>
                <span>•</span>
                <span>5 Min Read</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-[var(--foreground)]">
                Rhinoplasty Recovery: A Week-by-Week Healing Timeline
              </h2>
              <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)] font-medium">
                <span>By Dr. Haitham Akaash</span>
                <span>•</span>
                <span>ENT & Rhinoplasty Hub</span>
              </div>
            </header>

            <div className="space-y-6 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
              <p>
                "How long will I actually look normal again?" is one of the most
                common questions patients ask before rhinoplasty — and it's a
                fair one, since recovery timelines online are often vague or
                inconsistent. While every patient heals at a slightly different
                pace depending on the complexity of their procedure and
                individual factors, here's a general week-by-week guide to what
                the recovery process typically looks like.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Days 1-3: Immediately After Surgery
              </h3>
              <p>
                Expect swelling, bruising around the eyes and cheeks, and some
                nasal congestion in the first few days — this is normal and
                expected, not a sign of complications. A splint or cast is
                usually placed over the nose to protect and support its new
                shape, and there may be light internal packing or splints
                depending on the procedure. Mild to moderate discomfort is
                common and is generally well managed with prescribed pain
                medication. Rest with your head elevated, even while sleeping,
                to help minimize swelling.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Days 4-7: Bruising Peaks, Then Begins to Fade
              </h3>
              <p>
                Bruising around the eyes is often most visible during this
                window before it starts improving. Most patients still prefer to
                stay home during this stage, both for comfort and because
                visible bruising is at its most noticeable. Light walking is
                usually encouraged to support circulation, but anything
                strenuous should still be avoided.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Day 7-10: Splint Removal
              </h3>
              <p>
                This is typically when the external splint or cast is removed
                during a follow-up visit. While the nose will still show some
                swelling at this stage, most of the obvious bruising has usually
                faded enough that many patients feel comfortable returning to
                work or normal daily routines, particularly for non-physical
                jobs.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Weeks 2-3: Returning to Normal Life
              </h3>
              <p>
                By this stage, most visible bruising is gone, though mild
                swelling — especially around the tip of the nose — is still
                present and may be more noticeable to the patient than to
                others. Light exercise can often resume around this point,
                though this should always be confirmed with your surgeon based
                on your specific procedure, since cardiovascular activity that
                raises blood pressure too soon can affect healing.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Weeks 4-6: Subtle Swelling Continues to Settle
              </h3>
              <p>
                Most people feel comfortable resuming their normal social and
                professional lives well before this point, but some subtle
                swelling — particularly at the tip and along the bridge — is
                still resolving during this window. This is also typically when
                strenuous exercise, contact sports, and activities with a risk
                of facial impact can usually resume, again pending your
                surgeon's confirmation.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Months 3-6: The Shape Continues to Refine
              </h3>
              <p>
                This is the stage where most patients start to see results that
                closely resemble the final outcome, though subtle changes —
                often only noticeable to the patient and surgeon — continue as
                the deeper layers of swelling resolve.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Up to 12 Months: Final Results
              </h3>
              <p>
                This is the part that surprises many patients: full results,
                including the final refined shape of the nasal tip, can take up
                to a year to completely settle. This isn't a sign that anything
                is wrong — it reflects how gradually the deeper tissue layers
                finish healing. Surgeons generally advise patience during this
                final stretch rather than judging results too early.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                A Few Things That Help Recovery Go Smoothly
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                <li>
                  Sleeping with your head elevated for the first couple of
                  weeks.
                </li>
                <li>Avoiding blowing your nose forcefully.</li>
                <li>
                  Protecting your nose from sun exposure, which can worsen
                  swelling and discoloration.
                </li>
                <li>
                  Strictly avoiding glasses resting on the bridge of the nose
                  until cleared by your surgeon.
                </li>
              </ul>
              <p className="pt-2">
                All of these make a meaningful difference in how comfortably and
                predictably recovery progresses.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] pt-4">
                Every Recovery Is Different
              </h3>
              <p>
                These timelines are general guidelines — your specific recovery
                path depends on the complexity of your procedure, whether it
                included structural grafting, and your individual healing
                response. Your surgeon will give you a personalized recovery
                plan during your consultation and follow-up visits.
              </p>

              <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border-color)] mt-8">
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  If you have questions about recovery before or after your
                  procedure, Dr. Haitham Akaash and the team at ENT &
                  Rhinoplasty Hub in Rawalpindi are available to guide you
                  through every stage. Reach out via WhatsApp or call +92 300
                  5843974, or email theentrhinoplasty@gmail.com.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  <a
                    href="https://wa.me/923005843974"
                    className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
                  >
                    WhatsApp / Call: +92 300 5843974
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
