"use client";

import Calendar from "@/components/Calendar";
import eventsData from "@/data/events.json";
import { useLanguage } from "@/context/LanguageContext";

const upcomingEvents = [
  { 
    date: "MAR 05", 
    title: { en: "Team Meeting", zh: "團隊會議" }, 
    desc: { en: "Weekly team meeting", zh: "每週例行團隊會議" } 
  },
  { 
    date: "MAR 12", 
    title: { en: "Practice Session", zh: "練習賽與操控練習" }, 
    desc: { en: "Driver practice and mechanism testing", zh: "操作手練習與機構測試" } 
  },
  { 
    date: "MAR 19", 
    title: { en: "Build Session", zh: "硬體建造調整" }, 
    desc: { en: "Robot improvements and bug fixes", zh: "機器人細部改進與除錯" } 
  },
  { 
    date: "MAR 26", 
    title: { en: "Season Review", zh: "賽季成果回顧" }, 
    desc: { en: "End-of-season review and planning", zh: "季後總檢討與下一階段規劃" } 
  },
];

export default function CalendarPage() {
  const { t, language } = useLanguage();

  const statusCards = [
    { 
      title: { en: "Current Phase", zh: "當前階段" }, 
      desc: { en: "Competition Season — preparing for upcoming events.", zh: "賽季進行中 — 正在為即將到來的賽事與會議做準備。" } 
    },
    { 
      title: { en: "Robot Status", zh: "機器人狀態" }, 
      desc: { en: "Competition ready. Continuous improvements ongoing.", zh: "機器人已達到賽事標準。目前持續進行細微調整。" } 
    },
    { 
      title: { en: "Next Milestone", zh: "下個里程碑" }, 
      desc: { en: "Preparing for next season kickoff.", zh: "積極籌備與迎接新賽季的到來。" } 
    },
  ];

  // Resolve dynamic titles for event rendering inside local calendar mapping
  const localizedEventsData = eventsData.map(e => ({
    ...e,
    title: language === "en" ? e.title : (e.title === "TW Championship" ? "台灣選拔賽" : e.title === "HK Championship" ? "香港錦標賽" : e.title)
  }));

  return (
    <main className="pt-[72px] w-full">
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {t("calendar", "title")}
        </h1>
        <p className="text-gray-400 font-light text-lg">
          {t("calendar", "subTitle")}
        </p>
      </div>
      
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-2xl mx-auto mb-16">
            <Calendar events={localizedEventsData} />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {t("calendar", "upcomingEvents")}
              </h2>
              <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((e) => (
                <div key={e.date} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-[#1c2333] rounded-xl p-6 border border-white/[0.04] transition-all duration-300 hover:border-[rgba(255,107,53,0.3)] hover:-translate-x-1 group">
                  <div className="bg-[rgba(255,107,53,0.1)] border border-[rgba(255,107,53,0.2)] rounded-lg px-4 py-3 min-w-[100px] text-center group-hover:bg-[#ff6b35] transition-colors duration-300">
                    <span className="text-[#ff6b35] group-hover:text-[#0d1117] font-bold text-[0.85rem] tracking-[1px] whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>
                      {e.date}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[1.1rem]">
                      {e.title[language]}
                    </h4>
                    <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed">
                      {e.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("calendar", "teamStatus")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statusCards.map((s) => (
              <div key={s.title.en} className="bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] text-left transition-all duration-500 hover:border-[rgba(255,107,53,0.4)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-[1.2rem] font-bold text-white mb-3 uppercase tracking-[0.5px]" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title[language]}
                </h3>
                <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed">
                  {s.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
