"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import MarsBackground from "@/components/MarsBackground";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showVideo]);

  return (
    <main className="relative min-h-screen">
      <MarsBackground />

      {/* ── Hero Section ── */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="z-10 animate-fade-in-up">
          <span
            className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("home", "teamBadge")}
          </span>
          <h1
            className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white mb-4 tracking-tighter leading-[1.1]"
            style={{
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(135deg, #ffffff 0%, #ff6b35 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VIS Mars
          </h1>
          <p className="text-xl md:text-2xl text-gray-300/80 mb-8 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            {t("home", "subTitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/robots"
              className="inline-flex items-center gap-2 bg-[#ff6b35] text-[#0d1117] px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase transition-all duration-300 hover:bg-[#ff8c5a] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)] no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("home", "btnRobots")}
            </a>
            <a
              href="/story"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase border-2 border-white/[0.06] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35] hover:-translate-y-0.5 no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("home", "btnStory")}
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-16 mt-16 flex-wrap">
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                32760
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                {t("home", "statTeamNum")}
              </span>
            </div>
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2025
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                {t("home", "statFounded")}
              </span>
            </div>
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                TPE
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                {t("home", "statTaipei")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="relative z-10 bg-[#161b22] py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("home", "missionTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 max-w-[600px] mx-auto font-light leading-relaxed">
              {t("home", "missionDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "/",
                title: t("home", "mission1Title"),
                desc: t("home", "mission1Desc"),
              },
              {
                icon: "//",
                title: t("home", "mission2Title"),
                desc: t("home", "mission2Desc"),
              },
              {
                icon: "///",
                title: t("home", "mission3Title"),
                desc: t("home", "mission3Desc"),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] text-left transition-all duration-500 hover:border-[rgba(255,107,53,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 mb-6 rounded border border-[rgba(255,107,53,0.2)] bg-[rgba(255,107,53,0.05)] flex items-center justify-center text-[#ff6b35] text-sm font-mono group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] transition-all duration-300">{item.icon}</div>
                <h3
                  className="text-[1.2rem] font-bold text-white mb-3 uppercase tracking-[0.5px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Video Section ── */}
      <section className="relative z-10 bg-[#0d1117] py-24 border-t border-b border-white/[0.04] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,53,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-5 text-left">
              <span className="text-[#ff6b35] text-xs font-mono font-bold tracking-[3px] uppercase block mb-3">
                {t("home", "featuredDocuBadge")}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                {t("home", "featuredDocuTitle")}
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {t("home", "featuredDocuDesc")}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowVideo(true)}
                  className="bg-[#ff6b35] text-[#0d1117] px-6 py-3 rounded font-bold text-xs uppercase tracking-[1px] hover:bg-[#ff8c5a] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(255,107,53,0.35)] cursor-pointer border-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("home", "btnPlay")}
                </button>
                <a
                  href="/media"
                  className="bg-transparent text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-[1px] border border-white/10 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300 no-underline flex items-center justify-center"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("home", "btnMediaLibrary")}
                </a>
              </div>
            </div>

            {/* Video Thumbnail card with screenshot */}
            <div className="lg:col-span-7">
              <div
                className="w-full aspect-video rounded-2xl border border-white/[0.06] hover:border-[#ff6b35]/30 overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.5)] group cursor-pointer transition-all duration-500"
                onClick={() => setShowVideo(true)}
              >
                {/* Tech background image screenshot */}
                <img
                  src="/images/media_thumb_ep1.png"
                  alt="Episode 1 Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Visual glow overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#ff6b35]/10 filter blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-[#0d1117]/90 border border-white/10 flex items-center justify-center text-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                  <span className="text-white/60 group-hover:text-white font-mono text-[0.7rem] uppercase tracking-[3px] mt-4 transition-colors duration-300">
                    {t("home", "playSeasonPromo")}
                  </span>
                </div>

                {/* Cover graphic */}
                <div className="absolute bottom-6 left-6 text-left z-10 pointer-events-none">
                  <span className="bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-[0.6rem] font-bold px-2 py-0.5 rounded tracking-[1px] uppercase font-mono">
                    Season 2025-2026
                  </span>
                  <h4 className="text-white font-bold text-lg mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                    TO CARRY IT ALL
                  </h4>
                </div>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Video Player Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 w-full h-full bg-black/90 z-[2000] flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 text-white">
              <div>
                <span className="text-[#ff6b35] text-xs font-mono tracking-[2px] uppercase">
                  Season Documentary
                </span>
                <h3 className="text-xl font-bold font-heading">
                  《TO CARRY IT ALL》（承載一切）
                </h3>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-400 hover:text-white bg-transparent border-none cursor-pointer flex items-center gap-1.5 p-2 transition-colors"
              >
                <span className="text-xs uppercase tracking-[2px] hidden sm:inline">Close</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,107,53,0.25)] relative">
              <iframe
                src="https://drive.google.com/file/d/11EQmMm17pUNste46r_hwZwhQ9paujczE/preview"
                className="absolute inset-0 w-full h-full border-none"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Explore Section ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("home", "exploreTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon="01"
              title={t("navbar", "story")}
              description="How VIS Mars was founded and our journey so far"
              href="/story"
            />
            <Card
              icon="02"
              title={t("navbar", "members")}
              description="Meet the people behind VIS Mars"
              href="/members"
            />
            <Card
              icon="03"
              title={t("navbar", "robots")}
              description="Our competition robots and their specs"
              href="/robots"
            />
            <Card
              icon="04"
              title={t("navbar", "notes")}
              description="Our engineering process and design documentation"
              href="/notes"
            />
            <Card
              icon="05"
              title={t("navbar", "calendar")}
              description="Team schedule and upcoming events"
              href="/calendar"
            />
            <Card
              icon="06"
              title={t("navbar", "season")}
              description="Current season overview and FTC information"
              href="/season"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
