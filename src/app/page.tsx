import Card from "@/components/Card";
import MarsBackground from "@/components/MarsBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MarsBackground />

      {/* ── Hero Section ── */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="z-10 animate-fade-in-up">
          <span
            className="inline-block text-[0.8rem] font-bold text-[#ff6b35] bg-[rgba(255,107,53,0.15)] px-5 py-2 rounded border border-[rgba(255,107,53,0.3)] tracking-[3px] uppercase mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            FIRST Tech Challenge
          </span>
          <h1
            className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white mb-4 tracking-tighter leading-[1.1]"
            style={{
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(135deg, #ffffff 0%, #ff6b35 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VIS Mars
          </h1>
          <p className="text-xl md:text-2xl text-gray-300/80 mb-8 font-light tracking-wide">
            FTC Team #32760 from Taipei, Taiwan.
            <br />
            We engineer, we compete, we inspire.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/robots"
              className="inline-flex items-center gap-2 bg-[#ff6b35] text-[#0d1117] px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase transition-all duration-300 hover:bg-[#ff8c5a] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)] no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Robots →
            </a>
            <a
              href="/story"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded font-bold text-[0.85rem] tracking-[1px] uppercase border-2 border-white/[0.06] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35] hover:-translate-y-0.5 no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-16 mt-16 flex-wrap">
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                32760
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                Team Number
              </span>
            </div>
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2024
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                Founded
              </span>
            </div>
            <div className="text-center">
              <span
                className="text-[2.5rem] font-extrabold text-[#ff6b35] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                TPE
              </span>
              <span className="text-[0.8rem] text-gray-400 uppercase tracking-[2px] font-medium">
                Taipei
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="relative z-10 bg-[#161b22] py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Mission
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 max-w-[600px] mx-auto font-light">
              To push the boundaries of student robotics in Taiwan through
              engineering excellence, teamwork, and community impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "/",
                title: "Engineer",
                desc: "Design, build, and program competitive robots that solve real engineering challenges.",
              },
              {
                icon: "//",
                title: "Compete",
                desc: "Represent Taiwan on the international FTC stage, competing at regional and world championships.",
              },
              {
                icon: "///",
                title: "Inspire",
                desc: "Spread STEM education and robotics enthusiasm in our community and beyond.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl p-8 border border-white/[0.04] text-left transition-all duration-500 hover:border-[rgba(255,107,53,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 mb-6 rounded border border-[rgba(255,107,53,0.2)] bg-[rgba(255,107,53,0.05)] flex items-center justify-center text-[#ff6b35] text-sm font-mono group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] transition-all duration-300">{item.icon}</div>
                <h3
                  className="text-[1.2rem] font-bold text-white mb-3 uppercase tracking-[0.5px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore Section ── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon="01"
              title="Team Story"
              description="How VIS Mars was founded and our journey so far"
              href="/story"
              gradient="linear-gradient(135deg,#1c2333,#2a1a10)"
            />
            <Card
              icon="02"
              title="Team Members"
              description="Meet the people behind VIS Mars"
              href="/members"
              gradient="linear-gradient(135deg,#1c2333,#102a1a)"
            />
            <Card
              icon="03"
              title="Robots"
              description="Our competition robots and their specs"
              href="/robots"
              gradient="linear-gradient(135deg,#1c2333,#2a1010)"
            />
            <Card
              icon="04"
              title="Engineering Notes"
              description="Our engineering process and design documentation"
              href="/notes"
              gradient="linear-gradient(135deg,#1c2333,#10102a)"
            />
            <Card
              icon="05"
              title="Calendar"
              description="Team schedule and upcoming events"
              href="/calendar"
              gradient="linear-gradient(135deg,#1c2333,#2a2a10)"
            />
            <Card
              icon="06"
              title="FTC Season"
              description="Current season overview and FTC information"
              href="/season"
              gradient="linear-gradient(135deg,#1c2333,#1a102a)"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
