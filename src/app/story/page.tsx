"use client";

import { useState, useEffect } from "react";
import TimelineItem from "@/components/TimelineItem";

const timeline = [
  { 
    date: "2025 SUMMER", 
    title: "Team Founded", 
    description: "VIS Mars was officially formed. Team members gathered for the first time, setting goals and establishing the team structure. We began learning about FTC robotics, CAD design, and Java programming." 
  },
  { 
    date: "2025 SEPT", 
    title: "DECODE Kickoff", 
    description: "The 2025-2026 FTC season \"DECODE\" was announced. We immediately began brainstorming strategies, analyzing the game manual, and designing our first robot concepts." 
  },
  { 
    date: "2025 OCT — DEC", 
    title: "Design & Build Phase", 
    description: "Months of intense prototyping, building, and programming. We went through multiple design iterations, testing various mechanisms for scoring and pixel alignment." 
  },
  { 
    date: "2026 FEB", 
    title: "Chinese Taipei Championship (台灣選拔賽)", 
    description: "Competing on home ground in Kaohsiung. We performed exceptionally well, finishing in the qualification rounds and joining the playoffs, ultimately earning the title of Finalist Alliance (1st Team Selected).",
    videoId: "11EQmMm17pUNste46r_hwZwhQ9paujczE"
  },
  { 
    date: "2026 FEB — MAR", 
    title: "China - Hong Kong Championship (香港錦標賽)", 
    description: "Traveling to compete in the China - Hong Kong Championship. Applying everything we learned, we advanced to the playoffs as a Finalist Alliance and were honored with the prestigious Inspire Award 2nd Place.",
    videoId: "1PmHvE1_bU9qKwNLn7h8HZEGlxJOkJGCA"
  },
  { 
    date: "2026 —", 
    title: "The Journey Continines", 
    description: "We continue to improve, learn, and grow as a team. Our goal is to keep pushing the boundaries of what we can achieve in FTC and inspire more students to join STEM activities." 
  },
];

const values = [
  { icon: "I", title: "Innovation", desc: "We embrace creative problem-solving and aren't afraid to try new approaches. Every challenge is an opportunity to innovate." },
  { icon: "II", title: "Teamwork", desc: "Our strength comes from collaboration. Every team member's contribution is valued and essential to our success." },
  { icon: "III", title: "Growth", desc: "We are committed to continuous learning and improvement, both as engineers and as individuals." },
  { icon: "IV", title: "Community", desc: "We give back by sharing our knowledge and resources, and inspiring the next generation of STEM leaders in Taiwan." },
];

export default function StoryPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideoId]);

  return (
    <main className="pt-[72px] w-full">
      {/* Page Header */}
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Story</h1>
        <p className="text-gray-400 font-light text-lg">The journey of VIS Mars</p>
      </div>

      {/* Team Summary */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#1c2333] rounded-lg p-8 md:p-12 border border-white/[0.06] text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>VIS Mars #32760</h2>
            <p className="text-[#ff6b35] text-sm font-bold tracking-[2px] uppercase mb-4" style={{ fontFamily: "var(--font-heading)" }}>TAIPEI, TAIWAN</p>
            <p className="text-gray-400 font-light max-w-[700px] mx-auto leading-[1.7]">
              VIS Mars is an FTC robotics team founded in 2024. Based in Taipei, Taiwan, our team is passionate about engineering, programming, and competing at the highest level. We believe in the power of STEM education and the FIRST philosophy of Gracious Professionalism.
            </p>
          </div>

          {/* Timeline */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Timeline</h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col">
              {timeline.map((item, index) => (
                <TimelineItem 
                  key={item.date} 
                  {...item} 
                  index={index} 
                  isLast={index === timeline.length - 1} 
                  onPlayVideo={(id) => setActiveVideoId(id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Values</h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-[#1c2333] rounded-lg p-8 border border-white/[0.06] text-center transition-all duration-300 hover:border-[rgba(255,107,53,0.3)]">
                <div className="w-10 h-10 mx-auto mb-4 rounded border border-[#ff6b35]/30 flex items-center justify-center text-[#ff6b35] text-sm font-mono">{v.icon}</div>
                <h3 className="text-[1rem] font-bold text-white mb-2 uppercase" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h3>
                <p className="text-gray-400 text-[0.9rem] font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Video Player Modal */}
      {activeVideoId && (
        <div 
          className="fixed inset-0 w-full h-full bg-black/90 z-[2000] flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideoId(null)}
        >
          <div 
            className="w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 text-white">
              <div>
                <span className="text-[#ff6b35] text-xs font-mono tracking-[2px] uppercase">Championship Documentary</span>
                <h3 className="text-xl font-bold font-heading">
                  {activeVideoId === "11EQmMm17pUNste46r_hwZwhQ9paujczE" 
                    ? "台灣選拔賽紀錄片 (Chinese Taipei Championship)" 
                    : "香港錦標賽紀錄片 (China - Hong Kong Championship)"
                  }
                </h3>
              </div>
              <button 
                onClick={() => setActiveVideoId(null)}
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
                src={`https://drive.google.com/file/d/${activeVideoId}/preview`}
                className="absolute inset-0 w-full h-full border-none"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
