"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FirstPage() {
  const { t } = useLanguage();

  return (
    <main className="pt-[72px] w-full">
      {/* Page Header */}
      <div className="text-center py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <span
          className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("first", "badge")}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {t("first", "title")}
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          {t("first", "subTitle")}
        </p>
      </div>

      {/* About FIRST Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#1c2333]/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/[0.04] mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full" />
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {t("first", "aboutTitle")}
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base mb-6">
              {t("first", "aboutP1")}
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              {t("first", "aboutP2")}
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("first", "valuesTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1c2333]/40 backdrop-blur-md border border-white/[0.04] rounded-2xl p-8 hover:border-[#ff6b35]/30 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#ff6b35] text-lg font-mono">GP</span>
                {t("first", "gpTitle")}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-[0.95rem]">
                {t("first", "gpDesc")}
              </p>
            </div>

            <div className="bg-[#1c2333]/40 backdrop-blur-md border border-white/[0.04] rounded-2xl p-8 hover:border-[#ff6b35]/30 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#ff6b35] text-lg font-mono">CO</span>
                {t("first", "coopTitle")}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-[0.95rem]">
                {t("first", "coopDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FTC Game Stages */}
      <section className="py-20 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("first", "stagesTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light max-w-xl mx-auto text-[0.95rem]">
              {t("first", "stagesSub")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                timeKey: "stage1Time",
                titleKey: "stage1Title",
                descKey: "stage1Desc",
                label: "STAGE 01"
              },
              {
                timeKey: "stage2Time",
                titleKey: "stage2Title",
                descKey: "stage2Desc",
                label: "STAGE 02"
              },
              {
                timeKey: "stage3Time",
                titleKey: "stage3Title",
                descKey: "stage3Desc",
                label: "STAGE 03"
              },
            ].map((stage) => (
              <div
                key={stage.titleKey}
                className="bg-[#1c2333]/80 border border-white/[0.04] rounded-2xl p-8 transition-all duration-300 hover:border-[#ff6b35]/20 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className="text-3xl font-black text-[#ff6b35]/20 font-mono tracking-tighter"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stage.label}
                    </span>
                    <span
                      className="bg-[#ff6b35] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full font-mono"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {t("first", stage.timeKey)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {t("first", stage.titleKey)}
                  </h3>
                  <p className="text-gray-400 font-light text-[0.92rem] leading-relaxed mt-4">
                    {t("first", stage.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action / Impact */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,53,0.06),_transparent_60%)]" />
        <div className="max-w-[800px] mx-auto px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            {t("first", "teamDescTitle")}
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-base mb-8 max-w-xl mx-auto">
            {t("first", "teamDescText")}
          </p>
          <a
            href="/story"
            className="inline-flex items-center gap-2 bg-[#ff6b35] text-[#0d1117] px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase transition-all duration-300 hover:bg-[#ff8c5a] hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)] no-underline"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("first", "btnReadStory")}
          </a>
        </div>
      </section>
    </main>
  );
}
