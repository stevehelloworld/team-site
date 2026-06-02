"use client";

import { useLanguage } from "@/context/LanguageContext";

type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
  videoId?: string;
  onPlayVideo?: (videoId: string) => void;
};

export default function TimelineItem({
  date,
  title,
  description,
  index,
  isLast = false,
  videoId,
  onPlayVideo,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const { language } = useLanguage();

  return (
    <div className={`relative flex flex-row gap-6 pb-10 md:pb-14 last:pb-0 group w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* ── Content Card ── */}
      <div className="flex-1 bg-[rgba(28,35,51,0.5)] backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/[0.04] transition-all duration-500 hover:border-[rgba(255,107,53,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,107,53,0.05)] hover:-translate-y-0.5 relative overflow-hidden text-left">
        {/* Subtle side glow */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6b35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span
          className="inline-block text-[0.8rem] md:text-[0.85rem] text-[#ff6b35] font-black tracking-[3px] uppercase mb-3 group-hover:scale-105 transform origin-left transition-transform duration-500"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {date}
        </span>
        <h3
          className="text-[1.2rem] md:text-[1.4rem] font-bold mb-3 text-white tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="text-gray-300/80 text-[0.95rem] font-light leading-relaxed">
          {description}
        </p>

        {videoId && onPlayVideo && (
          <button
            onClick={() => onPlayVideo(videoId)}
            className="mt-4 inline-flex items-center gap-2 bg-[#ff6b35] text-[#0d1117] px-4 py-2 rounded font-bold text-xs uppercase tracking-[1px] hover:bg-[#ff8c5a] transition-all cursor-pointer border-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
            {language === "en" ? "Watch Video" : "觀看紀錄片"}
          </button>
        )}
      </div>

      {/* ── Vertical Line + Node ── */}
      <div className="relative flex flex-col items-center flex-shrink-0 w-4 md:w-20 order-first md:order-none">
        {/* Glowing dot */}
        <div className="relative z-10 w-4 h-4 rounded-full border-2 border-[#ff6b35] bg-[#0d1117] group-hover:bg-[#ff6b35] transition-all duration-500 mt-1.5">
          <div className="absolute inset-0 rounded-full bg-[#ff6b35] opacity-0 group-hover:opacity-40 blur-[6px] transition-opacity duration-500" />
        </div>
        {/* Vertical connecting line */}
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[#ff6b35]/40 via-white/[0.06] to-white/[0.03] mt-2" />
        )}
      </div>

      {/* ── Desktop Spacer ── */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}
