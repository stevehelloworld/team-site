"use client";

import { useState, useEffect } from "react";
import TimelineItem from "@/components/TimelineItem";
import { useLanguage } from "@/context/LanguageContext";

const timelineData = [
  { 
    date: "2025 SUMMER", 
    title: {
      en: "Team Founded",
      zh: "戰隊創立"
    }, 
    description: {
      en: "VIS Mars was officially formed. Team members gathered for the first time, setting goals and establishing the team structure. We began learning about FTC robotics, CAD design, and Java programming.",
      zh: "VIS Mars 戰隊正式成立。隊員們首次集結，制定了賽季目標並建立了團隊架構，開始學習 FTC 機器人規範、CAD 設計與 Java 程式開發。"
    }
  },
  { 
    date: "2025 SEPT", 
    title: {
      en: "DECODE Kickoff",
      zh: "DECODE 賽季啟動"
    }, 
    description: {
      en: "The 2025-2026 FTC season \"DECODE\" was announced. We immediately began brainstorming strategies, analyzing the game manual, and designing our first robot concepts.",
      zh: "2025-2026 FTC 賽季「DECODE」正式發布。團隊隨即展開腦力激盪、研讀賽事手冊，並設計了第一代機器人的雛形。"
    }
  },
  { 
    date: "2025 OCT — DEC", 
    title: {
      en: "Design & Build Phase",
      zh: "設計與建造階段"
    }, 
    description: {
      en: "Months of intense prototyping, building, and programming. We went through multiple design iterations, testing various mechanisms for scoring and pixel alignment.",
      zh: "歷經數月的高強度原型設計、實體建造與程式撰寫。我們進行了多次設計迭代，測試各類取樣、像素排列與懸掛攀爬機構。"
    },
    videoId: "11EQmMm17pUNste46r_hwZwhQ9paujczE"
  },
  { 
    date: "2026 FEB", 
    title: {
      en: "Chinese Taipei Championship (Taiwan Selection)",
      zh: "台灣選拔賽 (Chinese Taipei Championship)"
    }, 
    description: {
      en: "Competing on home ground in Kaohsiung. We performed exceptionally well, finishing in the qualification rounds and joining the playoffs, ultimately earning the title of Finalist Alliance (1st Team Selected).",
      zh: "遠赴高雄科工館參賽。團隊在賽場上沉著應戰，在資格賽與季後賽中發揮出眾，最終獲得 Finalist Alliance（決賽聯盟第一指名 / 亞軍）。"
    },
    videoId: "1PmHvE1_bU9qKwNLn7h8HZEGlxJOkJGCA"
  },
  { 
    date: "2026 FEB — MAR", 
    title: {
      en: "China - Hong Kong Championship",
      zh: "香港錦標賽 (China - Hong Kong Championship)"
    }, 
    description: {
      en: "Traveling to compete in the China - Hong Kong Championship. Applying everything we learned, we advanced to the playoffs as a Finalist Alliance and were honored with the prestigious Inspire Award 2nd Place.",
      zh: "遠征香港參賽。吸取台灣賽經驗後，我們優化了自動程式與機械爪結構，再度闖入季後賽奪得 Finalist Alliance（決賽聯盟亞軍），並榮獲最高榮譽 Inspire Award 第二名大獎。"
    },
    videoId: "1NwPk3ZJuIAYZL3AX91N6Oe4zU2dfZvtC"
  },
  { 
    date: "2026 —", 
    title: {
      en: "The Journey Continues",
      zh: "旅程仍在繼續"
    }, 
    description: {
      en: "We continue to improve, learn, and grow as a team. Our goal is to keep pushing the boundaries of what we can achieve in FTC and inspire more students to join STEM activities.",
      zh: "我們將持續學習、分享經驗與成長。我們的目標是繼續挑戰 FTC 更高的技術殿堂，並啟發更多台灣學子加入 STEM 的行列。"
    }
  },
];

const values = [
  { icon: "I", titleKey: "val1Title", descKey: "val1Desc" },
  { icon: "II", titleKey: "val2Title", descKey: "val2Desc" },
  { icon: "III", titleKey: "val3Title", descKey: "val3Desc" },
  { icon: "IV", titleKey: "val4Title", descKey: "val4Desc" },
];

export default function StoryPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const { language, t } = useLanguage();

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
    <main className="pt-[72px] w-full min-h-screen">
      {/* Page Header */}
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {t("story", "title")}
        </h1>
        <p className="text-gray-400 font-light text-lg">
          {t("story", "subTitle")}
        </p>
      </div>

      {/* Team Summary */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#1c2333]/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/[0.04] text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {t("story", "summaryTitle")}
            </h2>
            <p className="text-[#ff6b35] text-sm font-bold tracking-[2px] uppercase mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("story", "summaryLoc")}
            </p>
            <p className="text-gray-400 font-light max-w-[700px] mx-auto leading-[1.7]">
              {t("story", "summaryDesc")}
            </p>
          </div>

          {/* Timeline */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("story", "timelineTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col">
              {timelineData.map((item, index) => (
                <TimelineItem 
                  key={item.date} 
                  date={item.date}
                  title={item.title[language]}
                  description={item.description[language]}
                  index={index} 
                  isLast={index === timelineData.length - 1} 
                  videoId={item.videoId}
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
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("story", "valuesTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.titleKey} className="bg-[#1c2333]/50 border border-white/[0.04] rounded-2xl p-8 text-center transition-all duration-300 hover:border-[rgba(255,107,53,0.3)]">
                <div className="w-10 h-10 mx-auto mb-4 rounded border border-[#ff6b35]/30 flex items-center justify-center text-[#ff6b35] text-sm font-mono">{v.icon}</div>
                <h3 className="text-[1rem] font-bold text-white mb-2 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                  {t("story", v.titleKey)}
                </h3>
                <p className="text-gray-400 text-[0.9rem] font-light leading-relaxed">
                  {t("story", v.descKey)}
                </p>
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
                    ? t("media", "ep1Title")
                    : activeVideoId === "1PmHvE1_bU9qKwNLn7h8HZEGlxJOkJGCA"
                      ? t("media", "ep2Title")
                      : t("media", "ep3Title")
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
