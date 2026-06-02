"use client";

import { useState, useEffect } from "react";

type VideoItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  duration: string;
  category: string;
  thumbnailGradient: string;
};

const videos: VideoItem[] = [
  {
    id: "1NwPk3ZJuIAYZL3AX91N6Oe4zU2dfZvtC",
    title: "賽季紀錄片《TO CARRY IT ALL》",
    subtitle: "承載一切 • 隊伍年度紀錄片首部曲",
    description: "VIS Mars 32760 戰隊的年度真實紀錄片。不僅展現競賽中精密的機構設計與榮譽，更深刻揭露了團隊在面對技術故障（Bug）與賽場壓力時，如何從個人英雄主義走向合作系統共榮的蛻變歷程。",
    date: "2026.03",
    duration: "年度精華",
    category: "Season Documentary",
    thumbnailGradient: "linear-gradient(135deg, #1a0e08 0%, #2a1a10 50%, #4a2310 100%)",
  },
  {
    id: "11EQmMm17pUNste46r_hwZwhQ9paujczE",
    title: "台灣選拔賽紀錄片",
    subtitle: "Chinese Taipei Championship",
    description: "記錄了 VIS Mars 在 2026 年 2 月台灣選拔賽（高雄科工館）的奮鬥軌跡。展示團隊在賽道調試、自動控制程式編寫，以及激烈的聯盟淘汰賽中一路披荊斬棘，最終奪下 Finalist Alliance（決賽聯盟）的榮耀時刻。",
    date: "2026.02",
    duration: "賽事紀錄",
    category: "Championship",
    thumbnailGradient: "linear-gradient(135deg, #0f1626 0%, #1c2333 50%, #ff6b35/20 100%)",
  },
  {
    id: "1PmHvE1_bU9qKwNLn7h8HZEGlxJOkJGCA",
    title: "香港錦標賽紀錄片",
    subtitle: "China - Hong Kong Championship",
    description: "記錄了團隊於 2026 年 2 月底遠征香港的珍貴影像。記錄我們在國際賽場上面對更強勁對手時，如何進行高強度的機構迭代與戰術修正，最終成功奪得 Finalist Alliance 及 Inspire Award 二等獎雙重肯定。",
    date: "2026.03",
    duration: "海外遠征",
    category: "Championship",
    thumbnailGradient: "linear-gradient(135deg, #0d1b1e 0%, #162a2c 50%, #ff6b35/10 100%)",
  },
];

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

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
          Visual Log & Videos
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          影音紀錄與賽事影片
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          透過真實的鏡頭紀錄，見證 VIS Mars #32760 隊伍在賽場內外的汗水、重啟與光榮時刻。
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
              <div
                className="w-full aspect-video relative flex items-center justify-center overflow-hidden"
                style={{ background: video.thumbnailGradient }}
              >
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />
                
                {/* Visual Glow */}
                <div className="absolute w-32 h-32 rounded-full bg-[#ff6b35]/10 filter blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Categories Badge */}
                <span
                  className="absolute top-4 left-4 bg-[#0d1117]/80 text-[#ff6b35] text-[0.65rem] font-bold px-3 py-1 rounded border border-[#ff6b35]/20 uppercase tracking-[1px] font-mono z-10"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {video.category}
                </span>

                {/* Play Button Icon */}
                <div className="w-16 h-16 rounded-full bg-[#0d1117]/90 border border-white/10 flex items-center justify-center text-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(255,107,53,0.4)] z-10 relative">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#ff6b35] text-xs font-mono font-bold tracking-[1px]">
                      {video.duration}
                    </span>
                    <span className="text-gray-500 text-xs font-mono font-bold">{video.date}</span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-1 group-hover:text-[#ff6b35] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium mb-4">{video.subtitle}</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-white font-bold text-xs uppercase tracking-[1px] group-hover:text-[#ff6b35] transition-colors duration-300">
                  <span>立即觀看紀錄片</span>
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
                  {activeVideo.category}
                </span>
                <h3 className="text-xl font-bold font-heading">{activeVideo.title}</h3>
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
              提示：若無法播放影片，請確保您的 Google 帳戶已登入，或檢查瀏覽器隱私設定。
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
