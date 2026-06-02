import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is FIRST & FTC",
  description: "了解 FIRST Tech Challenge (FTC) 機器人競賽的核心精神、競賽階段與合作共榮價值觀。",
};

export default function FirstPage() {
  return (
    <main className="pt-[72px] w-full">
      {/* Page Header */}
      <div className="text-center py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <span
          className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Coopertition & Gracious Professionalism
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          什麼是 FIRST 與 FTC？
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          探索 FIRST Tech Challenge 機器人競賽的核心架構，以及在科技與合作中共同成長的教育理念。
        </p>
      </div>

      {/* About FIRST Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#1c2333]/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/[0.04] mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full" />
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              關於 FIRST 組織
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base mb-6">
              FIRST (For Inspiration and Recognition of Science and Technology) 是由發明家 Dean Kamen 於 1989 年創立的非營利組織。
              其宗旨是透過引人入勝的導師指導型計劃，激發年輕人成為科學與技術領域的領袖與創新者，並在過程中培養其自信、溝通與領導能力。
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              VIS Mars 隊伍所參與的 <strong>FTC (FIRST Tech Challenge)</strong> 則是專為 7-12 年級（國高中生）設計的挑戰賽，
              讓學生在有限的資源與時間下，以團隊合作方式設計、建造並程式化一台機器人，與來自全球的隊伍同台對抗與合作。
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              核心精神價值觀
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1c2333]/40 backdrop-blur-md border border-white/[0.04] rounded-2xl p-8 hover:border-[#ff6b35]/30 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#ff6b35] text-lg font-mono">GP</span>
                高尚專業精神 (Gracious Professionalism®)
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-[0.95rem]">
                這是一種在激烈競爭中依然保持善良與尊重的態度。它鼓勵隊伍尊重對手、熱心分享技術，不以勝負為唯一導向，而是在競爭中互相學習，共同推動整個社群的進步。
              </p>
            </div>

            <div className="bg-[#1c2333]/40 backdrop-blur-md border border-white/[0.04] rounded-2xl p-8 hover:border-[#ff6b35]/30 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#ff6b35] text-lg font-mono">CO</span>
                合作性競爭 (Coopertition®)
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-[0.95rem]">
                這是合作（Cooperation）與競爭（Competition）的結合。在 FIRST 的賽場上，我們不僅要爭取勝利，更要在對手的設備出錯或缺乏零件時伸出援手。幫助對手，能讓整場競賽的品質更高，也能激發出更好的自己。
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
              FTC 賽事三階段
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light max-w-xl mx-auto text-[0.95rem]">
              每場 FTC 聯盟對抗賽長達 2 分 30 秒，分為以下三個完全不同控制模式的階段：
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                time: "30s",
                title: "自主控制階段",
                sub: "Autonomous Phase",
                desc: "機器人僅能依靠預先編寫的 Java / Blocks 程式碼、感測器（陀螺儀、距離感測器）與鏡頭視覺偵測執行任務。在此階段，操作手不得觸碰遙控器。成功得分通常伴隨較高分值乘數，極度考驗程式組的演算法深度與環境適應力。",
              },
              {
                time: "2m",
                title: "遙控操作階段",
                sub: "Driver-Controlled Phase",
                desc: "操作手拿起遙控手把直接操作機器人。在此兩分鐘內，聯盟隊伍必須在繁忙的場地中收集得分元素（例如本季 DECODE 中的 Pixels 與 Elements）並運送至計分區。此階段考驗操作手的操縱熟練度、戰術靈活性與防守應變力。",
              },
              {
                time: "30s",
                title: "終局階段",
                sub: "End Game Phase",
                desc: "遙控操作階段的最後 30 秒。此時機器人除了繼續執行常規得分外，通常要執行特殊的高難度動作以獲取大量額外加分，例如攀爬場地中央的鐵架（Hanging）或是將特定得分物停留在終局指定區。也是比賽懸念最大、最刺激的關鍵時刻。",
              },
            ].map((stage, idx) => (
              <div
                key={stage.title}
                className="bg-[#1c2333]/80 border border-white/[0.04] rounded-2xl p-8 transition-all duration-300 hover:border-[#ff6b35]/20 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className="text-3xl font-black text-[#ff6b35]/20 font-mono tracking-tighter"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      STAGE 0{idx + 1}
                    </span>
                    <span
                      className="bg-[#ff6b35] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full font-mono"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stage.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {stage.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-bold tracking-[1px] uppercase mb-4 font-mono">
                    {stage.sub}
                  </p>
                  <p className="text-gray-400 font-light text-[0.92rem] leading-relaxed">
                    {stage.desc}
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
            我們是 VIS Mars 隊伍
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-base mb-8 max-w-xl mx-auto">
            我們實踐「知行合一」的精神，將對科技的熱忱轉化為創新的實體。我們以 Gracious Professionalism 作為前進的指南針，在競技中分享知識，攜手與台灣的機器人社群一同邁向世界的發射台。
          </p>
          <a
            href="/story"
            className="inline-flex items-center gap-2 bg-[#ff6b35] text-[#0d1117] px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase transition-all duration-300 hover:bg-[#ff8c5a] hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)] no-underline"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            閱讀我們的故事
          </a>
        </div>
      </section>
    </main>
  );
}
