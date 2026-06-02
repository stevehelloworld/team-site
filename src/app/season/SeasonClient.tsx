"use client";

import { useEffect } from "react";
import TimelineItem from "@/components/TimelineItem";
import { useLanguage } from "@/context/LanguageContext";

const seasonTimelineData = [
  { 
    date: "SEPT 2025", 
    title: { en: "Kickoff", zh: "賽季啟動" }, 
    description: { 
      en: "Season kickoff — new game DECODE revealed. Teams receive the Game Manuals.", 
      zh: "新賽季啟動 — 全新遊戲 DECODE 內容發布，團隊取得賽事手冊。" 
    } 
  },
  { 
    date: "OCT — DEC 2025", 
    title: { en: "Build Season", zh: "機器人建造期" }, 
    description: { 
      en: "Design, prototype, build, and program competition robots.", 
      zh: "進行機器人的 3D 機構設計、原型製作、實體拼裝與軟體控制編寫。" 
    } 
  },
  { 
    date: "FEB 2026", 
    title: { en: "Championship Events", zh: "區域選拔賽" }, 
    description: { 
      en: "Regional selection and championship events in Taiwan and Hong Kong.", 
      zh: "參加台灣選拔賽與香港錦標賽，爭取晉級機會。" 
    } 
  },
  { 
    date: "APR 2026", 
    title: { en: "World Championship", zh: "世界錦標賽" }, 
    description: { 
      en: "FIRST World Championship in Houston, Texas — best teams worldwide.", 
      zh: "於美國德州休士頓舉辦的 FIRST 世界錦標賽 — 全球頂尖戰隊齊聚一堂。" 
    } 
  },
  { 
    date: "MAY — AUG 2026", 
    title: { en: "Off-Season", zh: "休賽季與推廣" }, 
    description: { 
      en: "Off-season events, community outreach, recruiting, and next season preparation.", 
      zh: "舉辦社區推廣與分享會、招募新成員，並為下一季挑戰做準備。" 
    } 
  },
];

const ftcInfoData = [
  { 
    icon: "01", 
    title: { en: "Build", zh: "硬體建造" }, 
    desc: { 
      en: "Design and build robots within 18×18×18 inches size constraint.", 
      zh: "在 18×18×18 英吋的極限尺寸約束下，設計並組裝實體機器人。" 
    } 
  },
  { 
    icon: "02", 
    title: { en: "Code", zh: "軟體程式" }, 
    desc: { 
      en: "Program using Java or Blocks — autonomous and driver-controlled.", 
      zh: "使用 Java 開發控制程式，包含自動尋跡、影像偵測與手把遙控邏輯。" 
    } 
  },
  { 
    icon: "03", 
    title: { en: "Compete", zh: "賽場競技" }, 
    desc: { 
      en: "2v2 alliance matches: 30s auto + 2min driver-controlled.", 
      zh: "採取 2v2 聯盟對抗制：包含 30 秒自主階段與 2 分鐘操作手遙控階段。" 
    } 
  },
  { 
    icon: "04", 
    title: { en: "Document", zh: "工程筆記" }, 
    desc: { 
      en: "Maintain an Engineering Portfolio documenting the design process.", 
      zh: "撰寫工程筆記 (Engineering Portfolio) 詳實記錄每一次結構迭代與測試。" 
    } 
  },
];

export default function SeasonClient() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = `${t("navbar", "season")} | VIS Mars #32760`;
  }, [t]);

  const results = [
    { 
      label: "TW CHAMPIONSHIP", 
      title: language === "en" ? "Chinese Taipei Championship" : "台灣選拔賽 (Chinese Taipei)", 
      desc: language === "en" 
        ? "First season success! Secured the Finalist Alliance title (1st Team Selected) with solid drivetrain and scoring consistency." 
        : "在新秀賽季初試啼聲！以卓越底盤穩定度與自動控制，勇奪 Finalist Alliance（決賽聯盟第一指名 / 亞軍）。", 
      tags: ["2026.02", "National", "Finalist Alliance"],
      gradient: "linear-gradient(135deg, #1c2333, #2a1a10)"
    },
    { 
      label: "HK CHAMPIONSHIP", 
      title: language === "en" ? "China - Hong Kong Championship" : "香港錦標賽 (China - Hong Kong)", 
      desc: language === "en" 
        ? "Showcased excellence globally! Won both Finalist Alliance and the prestigious 2nd Place Inspire Award through community outreach and notebook design." 
        : "國際舞台展現非凡實力！憑藉出色的工程筆記與社群影響力，榮獲 Finalist Alliance（決賽聯盟亞軍）及 Inspire Award 2nd Place 大獎。", 
      tags: ["2026.03", "International", "Inspire 2nd", "Finalist Alliance"],
      gradient: "linear-gradient(135deg, #1c2333, #102a1a)"
    },
  ];

  return (
    <main className="pt-[72px] w-full min-h-screen">
      {/* Header */}
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {t("season", "title")}
        </h1>
        <p className="text-gray-400 font-light text-lg">
          {t("season", "subTitle")}
        </p>
      </div>

      {/* Current Season Info */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#1c2333]/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/[0.06] text-center">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {t("season", "currentTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light max-w-[700px] mx-auto leading-relaxed">
              {t("season", "currentDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* What is FTC */}
      <section className="py-24 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("season", "whatIsFtc")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ftcInfoData.map((item) => (
              <div key={item.icon} className="bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] text-left transition-all duration-500 hover:border-[rgba(255,107,53,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 mb-6 rounded border border-[rgba(255,107,53,0.2)] bg-[rgba(255,107,53,0.05)] flex items-center justify-center text-[#ff6b35] text-sm font-mono group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] transition-all duration-300">{item.icon}</div>
                <h3 className="text-[1.2rem] font-bold text-white mb-3 uppercase tracking-[0.5px]" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title[language]}
                </h3>
                <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed">
                  {item.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Timeline */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("season", "timelineTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col">
              {seasonTimelineData.map((item, index) => (
                <TimelineItem 
                  key={item.date} 
                  date={item.date}
                  title={item.title[language]}
                  description={item.description[language]}
                  index={index} 
                  isLast={index === seasonTimelineData.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Results */}
      <section className="py-24 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("season", "resultsTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light">
              {t("season", "resultsDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {results.map((r) => (
              <div key={r.label} className="bg-[#1c2333]/50 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#ff6b35]/20 transition-all duration-300">
                <div className="h-[160px] flex flex-col items-center justify-center gap-2" style={{ background: r.gradient }}>
                  <span className="text-[#ff6b35] text-[0.8rem] tracking-[2px] font-bold" style={{ fontFamily: "var(--font-heading)" }}>{r.label}</span>
                </div>
                <div className="p-8 flex flex-col h-[280px] justify-between">
                  <div>
                    <h3 className="text-[1.2rem] font-bold text-white mb-3 tracking-[0.5px]" style={{ fontFamily: "var(--font-heading)" }}>{r.title}</h3>
                    <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed mb-6">{r.desc}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    {r.tags.map((t) => (
                      <span key={t} className="bg-[rgba(255,255,255,0.03)] border border-white/[0.06] text-gray-400 px-3 py-1 rounded text-[0.7rem] font-bold tracking-[1px] uppercase transition-colors hover:text-[#ff6b35] hover:border-[#ff6b35]/30" style={{ fontFamily: "var(--font-heading)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://ftcscout.org/teams/32760" target="_blank" className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase border-2 border-white/[0.06] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all no-underline" style={{ fontFamily: "var(--font-heading)" }}>
              {t("season", "btnFtcScout")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
