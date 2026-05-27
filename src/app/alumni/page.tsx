import type { Metadata } from "next";
import alumniData from "@/data/alumni.json";

export const metadata: Metadata = {
  title: "Alumni & Pathways",
  description: "了解 VIS Mars #32760 歷屆畢業校友的大學升學去向與參賽心得分享。",
};

export default function AlumniPage() {
  return (
    <main className="pt-[72px] w-full">
      {/* Page Header */}
      <div className="text-center py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <span
          className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          More Than Robots
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          校友網路與學術去向
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          見證 VIS Mars 隊伍成員在畢業後走向全球頂尖學府的步伐，以及機器人挑戰對他們未來的深刻影響。
        </p>
      </div>

      {/* Alumni Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              畢業成員專訪 (Alumni Spotlight)
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniData.map((alumnus) => (
              <div
                key={alumnus.name}
                className="bg-[#1c2333]/80 backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] hover:border-[#ff6b35]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3
                        className="text-lg font-bold text-white mb-1 tracking-[0.5px]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {alumnus.name}
                      </h3>
                      <span className="text-gray-500 text-xs font-mono block">
                        {alumnus.role}
                      </span>
                    </div>
                    <span
                      className="bg-[rgba(255,107,53,0.1)] text-[#ff6b35] text-xs font-bold font-mono px-3 py-1 rounded border border-[#ff6b35]/20"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Class of {alumnus.year}
                    </span>
                  </div>

                  {/* Destination */}
                  <div className="bg-[#0d1117]/60 rounded-xl p-4 border border-white/[0.04] mb-6">
                    <span className="text-[0.65rem] text-gray-500 uppercase tracking-[1px] block mb-1">現就讀大學 (Destination)</span>
                    <span className="text-white text-sm font-medium leading-relaxed block">{alumnus.destination}</span>
                  </div>

                  {/* Testimony */}
                  <p className="text-gray-400 font-light text-[0.9rem] leading-relaxed italic mb-8">
                    &ldquo;{alumnus.testimony}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Stats Section */}
      <section className="py-24 bg-[#161b22] text-center">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            我們培養未來的 STEM 領航者
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-base max-w-2xl mx-auto mb-16">
            在 FIRST 競賽中獲得的機械、程式、商業專案與團隊溝通等閉環能力，是申請海外與台灣頂尖名校不可或缺的基石。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-[#1c2333]/40 border border-white/[0.04] rounded-2xl p-8">
              <span className="text-4xl font-black text-[#ff6b35] block mb-2 font-mono" style={{ fontFamily: "var(--font-heading)" }}>100%</span>
              <span className="text-gray-400 text-sm font-light">畢業成員順利錄取頂尖大學</span>
            </div>
            <div className="bg-[#1c2333]/40 border border-white/[0.04] rounded-2xl p-8">
              <span className="text-4xl font-black text-[#ff6b35] block mb-2 font-mono" style={{ fontFamily: "var(--font-heading)" }}>80%</span>
              <span className="text-gray-400 text-sm font-light">選擇就讀世界 STEM 相關科系</span>
            </div>
            <div className="bg-[#1c2333]/40 border border-white/[0.04] rounded-2xl p-8">
              <span className="text-4xl font-black text-[#ff6b35] block mb-2 font-mono" style={{ fontFamily: "var(--font-heading)" }}>3+</span>
              <span className="text-gray-400 text-sm font-light">獲得國際與本土企業技術認證</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
