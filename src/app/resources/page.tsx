import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Media Kit",
  description: "訪問 VIS Mars #32760 的開放資源庫、開源程式碼、工程文件與隊伍品牌識別手冊（Media Kit）。",
};

export default function ResourcesPage() {
  return (
    <main className="pt-[72px] w-full">
      {/* Page Header */}
      <div className="text-center py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <span
          className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Open Source & Sharing
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          開源資源與品牌手冊
        </h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          我們秉持 FIRST 共享共榮的精神，公開我們的軟硬體開發成果、參賽設計文檔與官方視覺資產。
        </p>
      </div>

      {/* Technical Resources Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              工程與技術資源
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Github Card */}
            <div className="bg-[#1c2333]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] hover:border-[#ff6b35]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold text-[#ff6b35] tracking-[2px] uppercase block mb-2">Code Repository</span>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>機器人控制源碼</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  我們完整的 FTC 機器人控制系統程式碼，包含自主控制階段的 OpenCV 視覺偵測、PID 閉環路運動控制算法以及自動路徑規劃。
                </p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[1px] hover:text-[#ff6b35] transition-colors duration-300 w-max"
              >
                前往 Github 倉庫 →
              </a>
            </div>

            {/* CAD Card */}
            <div className="bg-[#1c2333]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] hover:border-[#ff6b35]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold text-[#ff6b35] tracking-[2px] uppercase block mb-2">Mechanical CAD</span>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>機器人 3D 模型 (Onshape)</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  公開歷代機器人的 CAD 工程檔。包含底盤輪系配置、進料懸掛機構、齒輪傳動比計算以及 CNC 鋁合金減重板零件規格。
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[1px] hover:text-[#ff6b35] transition-colors duration-300 w-max"
              >
                線上瀏覽 3D 模型 →
              </a>
            </div>

            {/* Portfolio Card */}
            <div className="bg-[#1c2333]/60 backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] hover:border-[#ff6b35]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-mono font-bold text-[#ff6b35] tracking-[2px] uppercase block mb-2">Documentation</span>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>工程設計筆記 (Portfolio)</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  符合 FTC 評審規範的工程筆記（Engineering Portfolio），詳細記錄了從設計概念腦力激盪、機構迭代到賽場策略分析的完整脈絡。
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[1px] hover:text-[#ff6b35] transition-colors duration-300 w-max"
              >
                下載 PDF 文件 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity / Media Kit Section */}
      <section className="py-20 bg-[#161b22]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              隊伍視覺與品牌規範 (Media Kit)
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Standard Brand Guidelines */}
            <div className="bg-[#1c2333]/40 border border-white/[0.04] rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>品牌視覺規範</h3>
                <p className="text-gray-400 font-light text-[0.95rem] leading-relaxed mb-8">
                  為維持 VIS Mars #32760 隊伍形象的統一性與專業感，請依循以下標準色彩與字體規範：
                </p>

                {/* Color blocks */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-white text-xs font-bold uppercase tracking-[1px]">標準色彩 (Colors)</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#ff6b35] rounded-xl p-3 text-center border border-white/[0.05]">
                      <span className="block text-[0.8rem] font-bold text-[#0d1117] font-mono">#FF6B35</span>
                      <span className="block text-[0.65rem] text-[#0d1117]/80 font-bold uppercase tracking-[0.5px]">Mars Orange</span>
                    </div>
                    <div className="bg-[#0d1117] rounded-xl p-3 text-center border border-white/[0.08]">
                      <span className="block text-[0.8rem] font-bold text-white font-mono">#0D1117</span>
                      <span className="block text-[0.65rem] text-gray-400 font-bold uppercase tracking-[0.5px]">Deep Space</span>
                    </div>
                    <div className="bg-[#1c2333] rounded-xl p-3 text-center border border-white/[0.08]">
                      <span className="block text-[0.8rem] font-bold text-white font-mono">#1C2333</span>
                      <span className="block text-[0.65rem] text-gray-400 font-bold uppercase tracking-[0.5px]">Card Blue</span>
                    </div>
                  </div>
                </div>

                {/* Typography specs */}
                <div className="space-y-2">
                  <h4 className="text-white text-xs font-bold uppercase tracking-[1px] mb-2">標準字體 (Typography)</h4>
                  <div className="space-y-3 bg-[#0d1117]/60 rounded-xl p-4 border border-white/[0.04]">
                    <div>
                      <span className="block text-[0.65rem] text-gray-500 uppercase tracking-[1px]">Heading Font</span>
                      <span className="block text-white text-lg font-bold font-mono" style={{ fontFamily: "var(--font-heading)" }}>Orbitron</span>
                    </div>
                    <div>
                      <span className="block text-[0.65rem] text-gray-500 uppercase tracking-[1px]">Body Font</span>
                      <span className="block text-gray-300 text-sm font-light">Roboto / 繁體中文標準黑體</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset downloads */}
            <div className="bg-[#1c2333]/40 border border-white/[0.04] rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>官方素材下載</h3>
                <p className="text-gray-400 font-light text-[0.95rem] leading-relaxed mb-8">
                  提供給合作夥伴、贊助商及宣傳推廣活動使用的官方標誌資產。包內含有去背 PNG、標準向量 SVG 以及不同背景色適用的色盤版本。
                </p>

                {/* Grid items */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-[#0d1117]/40 border border-white/[0.04] rounded-xl p-5 hover:border-[#ff6b35]/20 transition-all duration-300">
                    <div>
                      <h4 className="text-white font-bold text-sm">官方徽章 Logo (向量版)</h4>
                      <p className="text-gray-500 text-xs mt-1">向量 SVG 格式 • 適用於印刷與放大設計</p>
                    </div>
                    <a href="#" className="bg-[#ff6b35] text-[#0d1117] text-xs font-bold px-4 py-2 rounded hover:bg-[#ff8c5a] transition-colors">SVG</a>
                  </div>

                  <div className="flex justify-between items-center bg-[#0d1117]/40 border border-white/[0.04] rounded-xl p-5 hover:border-[#ff6b35]/20 transition-all duration-300">
                    <div>
                      <h4 className="text-white font-bold text-sm">官方徽章 Logo (透明背景)</h4>
                      <p className="text-gray-500 text-xs mt-1">去背 PNG 格式 • 適用於數位簡報與海報</p>
                    </div>
                    <a href="#" className="bg-[#ff6b35] text-[#0d1117] text-xs font-bold px-4 py-2 rounded hover:bg-[#ff8c5a] transition-colors">PNG</a>
                  </div>

                  <div className="flex justify-between items-center bg-[#0d1117]/40 border border-white/[0.04] rounded-xl p-5 hover:border-[#ff6b35]/20 transition-all duration-300">
                    <div>
                      <h4 className="text-white font-bold text-sm">簡報投影片模板 (PPT)</h4>
                      <p className="text-gray-500 text-xs mt-1">PowerPoint 格式 • 統一色調與排版架構</p>
                    </div>
                    <a href="#" className="bg-[#ff6b35] text-[#0d1117] text-xs font-bold px-4 py-2 rounded hover:bg-[#ff8c5a] transition-colors">PPTX</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
