"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

type VideoItem = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  date: string;
  categoryKey: string;
  durationKey: string;
  image: string;
};

const videos: VideoItem[] = [
  {
    id: "11EQmMm17pUNste46r_hwZwhQ9paujczE",
    titleKey: "ep1Title",
    subtitleKey: "ep1Sub",
    descriptionKey: "ep1Desc",
    categoryKey: "ep1Category",
    durationKey: "ep1Duration",
    date: "2026.02",
    image: "/images/media_thumb_ep1.png",
  },
  {
    id: "1PmHvE1_bU9qKwNLn7h8HZEGlxJOkJGCA",
    titleKey: "ep2Title",
    subtitleKey: "ep2Sub",
    descriptionKey: "ep2Desc",
    categoryKey: "ep2Category",
    durationKey: "ep2Duration",
    date: "2026.02",
    image: "/images/media_thumb_ep2.png",
  },
  {
    id: "1NwPk3ZJuIAYZL3AX91N6Oe4zU2dfZvtC",
    titleKey: "ep3Title",
    subtitleKey: "ep3Sub",
    descriptionKey: "ep3Desc",
    categoryKey: "ep3Category",
    durationKey: "ep3Duration",
    date: "2026.03",
    image: "/images/media_thumb_ep3.png",
  },
];

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const { t } = useLanguage();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <main className="pt-[72px] w-full min-h-screen pb-24">
      {/* Header Section */}
      <div
        className="text-center py-24 px-6 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.08),transparent_60%)] pointer-events-none" />
        <span
          className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("media", "badge")}
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("media", "title")}
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          {t("media", "subTitle")}
        </p>
      </div>

      {/* Video Grid Section */}
      <section className="max-w-[1200px] mx-auto px-8 mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[#ff6b35]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,107,53,0.02)] group flex flex-col h-full cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              {/* Thumbnail Container */}
              <div className="w-full aspect-video relative flex items-center justify-center overflow-hidden bg-black">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none z-10" />
                
                {/* Custom Image Thumbnail */}
                <Image
                  src={video.image}
                  alt={t("media", video.titleKey)}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Visual Glow */}
                <div className="absolute w-32 h-32 rounded-full bg-[#ff6b35]/15 filter blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none z-10" />

                {/* Categories Badge */}
                <span
                  className="absolute top-4 left-4 bg-[#0d1117]/90 text-[#ff6b35] text-[0.65rem] font-bold px-3 py-1 rounded border border-[#ff6b35]/20 uppercase tracking-[1px] font-mono z-20"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("media", video.categoryKey)}
                </span>

                {/* Play Button Icon */}
                <div className="w-16 h-16 rounded-full bg-[#0d1117]/90 border border-white/10 flex items-center justify-center text-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(255,107,53,0.4)] z-20 relative">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>

                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10" />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#ff6b35] text-xs font-mono font-bold tracking-[1px]">
                      {t("media", video.durationKey)}
                    </span>
                    <span className="text-gray-500 text-xs font-mono font-bold">{video.date}</span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-1 group-hover:text-[#ff6b35] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t("media", video.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium mb-4">{t("media", video.subtitleKey)}</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {t("media", video.descriptionKey)}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-white font-bold text-xs uppercase tracking-[1px] group-hover:text-[#ff6b35] transition-colors duration-300">
                  <span>{t("media", "playNow")}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 w-full h-full bg-black/90 z-[2000] flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing
          >
            {/* Modal Title Banner */}
            <div className="flex justify-between items-center mb-4 text-white">
              <div>
                <span className="text-[#ff6b35] text-xs font-mono tracking-[2px] uppercase">
                  {t("media", activeVideo.categoryKey)}
                </span>
                <h3 className="text-xl font-bold font-heading">{t("media", activeVideo.titleKey)}</h3>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-400 hover:text-white bg-transparent border-none cursor-pointer flex items-center gap-1.5 p-2 transition-colors"
              >
                <span className="text-xs uppercase tracking-[2px] hidden sm:inline">Close</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video Container (aspect-video) */}
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,107,53,0.25)] relative">
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.id}/preview`}
                className="absolute inset-0 w-full h-full border-none"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Hint below video */}
            <p className="text-center text-gray-500 text-xs mt-4">
              {t("media", "hint")}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
