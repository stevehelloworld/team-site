import type { Metadata } from "next";
import TimelineItem from "@/components/TimelineItem";

export const metadata: Metadata = {
  title: "FTC Season",
  description: "Explore the current FTC season details, including game rules for DECODE, our build progress, and tournament timeline.",
};
const seasonTimeline = [
  { date: "SEPT 2025", title: "Kickoff", description: "Season kickoff — new game DECODE revealed. Teams receive the Game Manuals." },
  { date: "OCT — DEC 2025", title: "Build Season", description: "Design, prototype, build, and program competition robots." },
  { date: "FEB 2026", title: "Championship Events", description: "Regional selection and championship events." },
  { date: "APR 2026", title: "World Championship", description: "FIRST World Championship — best teams worldwide." },
  { date: "MAY — AUG 2026", title: "Off-Season", description: "Off-season events, outreach, recruiting, and preparation." },
];

const ftcInfo = [
  { icon: "01", title: "Build", desc: "Design and build robots within 18×18×18 inches, 42 pounds max." },
  { icon: "02", title: "Code", desc: "Program using Java or Blocks — autonomous and driver-controlled." },
  { icon: "03", title: "Compete", desc: "2v2 alliance matches: 30s auto + 2min driver-controlled." },
  { icon: "04", title: "Document", desc: "Maintain an Engineering Portfolio documenting the design process." },
];

export default function SeasonPage() {
  return (
    <main className="pt-[72px] w-full">
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>FTC Season</h1>
        <p className="text-gray-400 font-light text-lg">Current season overview and FTC information</p>
      </div>

      {/* Current Season */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#1c2333] rounded-lg p-8 md:p-12 border border-white/[0.06] text-center">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>DECODE</h2>
            <p className="text-[#ff6b35] text-sm font-bold tracking-[2px] uppercase mb-4" style={{ fontFamily: "var(--font-heading)" }}>2025 — 2026 SEASON</p>
            <p className="text-gray-400 font-light max-w-[700px] mx-auto">
              DECODE™ presented by RTX challenges teams to investigate digital artifacts, solve cryptography tasks, and navigate a complex arena to decode secrets on the field.
            </p>
          </div>
        </div>
      </section>

      {/* What is FTC */}
      <section className="py-24 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>What is FTC?</h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ftcInfo.map((item) => (
              <div key={item.title} className="bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] text-left transition-all duration-500 hover:border-[rgba(255,107,53,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 mb-6 rounded border border-[rgba(255,107,53,0.2)] bg-[rgba(255,107,53,0.05)] flex items-center justify-center text-[#ff6b35] text-sm font-mono group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] transition-all duration-300">{item.icon}</div>
                <h3 className="text-[1.2rem] font-bold text-white mb-3 uppercase tracking-[0.5px]" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Timeline */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Season Timeline</h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col">
              {seasonTimeline.map((item, index) => (
                <TimelineItem key={item.date} {...item} index={index} isLast={index === seasonTimeline.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Results */}
      <section className="py-24 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Results</h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light">VIS Mars #32760 competition record</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { 
                emoji: "", 
                label: "TW CHAMPIONSHIP", 
                title: "Chinese Taipei Championship (台灣選拔賽)", 
                desc: "在新秀賽季初試啼聲！以卓越底盤穩定度與自動控制，勇奪 Finalist Alliance（決賽聯盟第一指名 / 亞軍）。", 
                tags: ["2026.02", "National", "Finalist Alliance"] 
              },
              { 
                emoji: "", 
                label: "HK CHAMPIONSHIP", 
                title: "China — Hong Kong Championship (香港錦標賽)", 
                desc: "國際舞台展現非凡實力！憑藉出色的工程筆記與社群影響力，榮獲 Finalist Alliance（決賽聯盟亞軍）及 Inspire Award 2nd Place 大獎。", 
                tags: ["2026.03", "International", "Inspire 2nd", "Finalist Alliance"] 
              },
            ].map((r) => (
              <div key={r.label} className="bg-[#1c2333] rounded-lg overflow-hidden border border-white/[0.06]">
                <div className="h-[160px] flex flex-col items-center justify-center gap-2" style={{ background: r.label === "TW CHAMPIONSHIP" ? "linear-gradient(135deg, #1c2333, #2a1a10)" : "linear-gradient(135deg, #1c2333, #102a1a)" }}>
                  <span className="text-[#ff6b35] text-[0.8rem] tracking-[2px] font-bold" style={{ fontFamily: "var(--font-heading)" }}>{r.label}</span>
                </div>
                <div className="p-8 flex flex-col h-full justify-between">
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
          <div className="text-center mt-10">
            <a href="https://ftcscout.org/teams/32760" target="_blank" className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase border-2 border-white/[0.06] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all no-underline" style={{ fontFamily: "var(--font-heading)" }}>
              View Full Stats on FTCScout →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
