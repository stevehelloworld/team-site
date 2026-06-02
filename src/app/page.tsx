"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import MarsBackground from "@/components/MarsBackground";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

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
            FIRST Tech Challenge
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
          <p className="text-xl md:text-2xl text-gray-300/80 mb-8 font-light tracking-wide">
            FTC Team #32760 from Taipei, Taiwan.
            <br />
            We engineer, we compete, we inspire.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/robots"
              className="inline-flex items-center gap-2 bg-[#ff6b35] text-[#0d1117] px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase transition-all duration-300 hover:bg-[#ff8c5a] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)] no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Robots →
            </a>
            <a
              href="/story"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase border-2 border-white/[0.06] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35] hover:-translate-y-0.5 no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Story
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
                Team Number
              </span>
            </div>
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2024
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                Founded
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
                Taipei
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
              Our Mission
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 max-w-[600px] mx-auto font-light">
              To push the boundaries of student robotics in Taiwan through
              engineering excellence, teamwork, and community impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "/",
                title: "Engineer",
                desc: "Design, build, and program competitive robots that solve real engineering challenges.",
              },
              {
                icon: "//",
                title: "Compete",
                desc: "Represent Taiwan on the international FTC stage, competing at regional and world championships.",
              },
              {
                icon: "///",
                title: "Inspire",
                desc: "Spread STEM education and robotics enthusiasm in our community and beyond.",
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
              <span className="text-[#ff6b35] text-xs font-mono font-bold tracking-[3px] uppercase block mb-3">Featured Documentary</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                年度紀錄片首部曲<br />《TO CARRY IT ALL》
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                這部紀錄片完整記錄了 VIS Mars #32760 戰隊在 DECODE 賽季中的真實歷程。影片歷史性地呈現了這支新秀戰隊在經歷嚴格技術開發、賽場調試壓力，以及學習高尚專業精神（GP）中的心理成長與團隊蛻變。
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowVideo(true)}
                  className="bg-[#ff6b35] text-[#0d1117] px-6 py-3 rounded font-bold text-xs uppercase tracking-[1px] hover:bg-[#ff8c5a] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(255,107,53,0.35)] cursor-pointer border-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  立即播放 →
                </button>
                <a 
                  href="/media"
                  className="bg-transparent text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-[1px] border border-white/10 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300 no-underline flex items-center justify-center"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  影音媒體庫
                </a>
              </div>
            </div>

            {/* Video Thumbnail card */}
            <div className="lg:col-span-7">
              <div 
                className="w-full aspect-video rounded-2xl border border-white/[0.06] hover:border-[#ff6b35]/30 overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.5)] group cursor-pointer transition-all duration-500"
                onClick={() => setShowVideo(true)}
              >
                {/* Tech background canvas */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e08] via-[#0d1117] to-[#1c2333] opacity-90" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px]" />
                
                {/* Visual glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#ff6b35]/10 filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-full bg-[#0d1117]/90 border border-white/10 flex items-center justify-center text-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                  <span className="text-white/40 group-hover:text-white/80 font-mono text-[0.7rem] uppercase tracking-[3px] mt-4 transition-colors duration-300">Play Season Promo</span>
                </div>

                {/* Cover graphic */}
                <div className="absolute bottom-6 left-6 text-left z-10">
                  <span className="bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-[#ff6b35] text-[0.6rem] font-bold px-2 py-0.5 rounded tracking-[1px] uppercase font-mono">Season 2025-2026</span>
                  <h4 className="text-white font-bold text-lg mt-2" style={{ fontFamily: "var(--font-heading)" }}>TO CARRY IT ALL</h4>
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
                <span className="text-[#ff6b35] text-xs font-mono tracking-[2px] uppercase">Season Documentary</span>
                <h3 className="text-xl font-bold font-heading">《TO CARRY IT ALL》（承載一切）</h3>
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
                src="https://drive.google.com/file/d/1NwPk3ZJuIAYZL3AX91N6Oe4zU2dfZvtC/preview"
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
              Explore
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon="01"
              title="Team Story"
              description="How VIS Mars was founded and our journey so far"
              href="/story"
              gradient="linear-gradient(135deg,#1c2333,#2a1a10)"
            />
            <Card
              icon="02"
              title="Team Members"
              description="Meet the people behind VIS Mars"
              href="/members"
              gradient="linear-gradient(135deg,#1c2333,#102a1a)"
            />
            <Card
              icon="03"
              title="Robots"
              description="Our competition robots and their specs"
              href="/robots"
              gradient="linear-gradient(135deg,#1c2333,#2a1010)"
            />
            <Card
              icon="04"
              title="Engineering Notes"
              description="Our engineering process and design documentation"
              href="/notes"
              gradient="linear-gradient(135deg,#1c2333,#10102a)"
            />
            <Card
              icon="05"
              title="Calendar"
              description="Team schedule and upcoming events"
              href="/calendar"
              gradient="linear-gradient(135deg,#1c2333,#2a2a10)"
            />
            <Card
              icon="06"
              title="FTC Season"
              description="Current season overview and FTC information"
              href="/season"
              gradient="linear-gradient(135deg,#1c2333,#1a102a)"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
