import Link from "next/link";

type CardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  gradient?: string; // Kept for backwards compatibility but unused in new design
};

export default function Card({
  icon,
  title,
  description,
  href,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block bg-[rgba(28,35,51,0.5)] backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,107,53,0.05)] hover:border-[rgba(255,107,53,0.4)] no-underline group relative"
    >
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="p-8 relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-12">
            <div className="w-12 h-12 rounded-lg bg-[rgba(255,107,53,0.1)] border border-[rgba(255,107,53,0.2)] flex items-center justify-center text-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-[#0d1117] transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0.1)] group-hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]">
              <span className="text-sm font-bold tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>{icon}</span>
            </div>
            <span className="text-white/10 group-hover:text-[#ff6b35] transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          
          <h3
            className="text-[1.25rem] font-bold text-white mb-3 tracking-[0.5px] uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>
        </div>
        <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </Link>
  );
}
