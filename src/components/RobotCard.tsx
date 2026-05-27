import Image from "next/image";

type RobotCardProps = {
  name: string;
  season: string;
  specs: Record<string, string | undefined>;
  features: string[];
  photo: string;
  description: string;
};

export default function RobotCard({
  name,
  season,
  specs,
  features,
  photo,
  description,
}: RobotCardProps) {
  return (
    <div className="bg-[#1c2333]/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/[0.04] transition-all duration-500 hover:border-[rgba(255,107,53,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
      <div className="flex flex-col md:flex-row">
        {/* Left Column: Image Area */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full flex items-center justify-center bg-[#0d1117] overflow-hidden">
          {/* Decorative glowing lines behind image */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(255,107,53,0.15)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {photo ? (
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover z-10"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center relative z-10 bg-gradient-to-br from-[#1c2333] to-[#0a0d14]">
              {/* Premium Placeholder Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ff6b35 1px, transparent 1px), linear-gradient(90deg, #ff6b35 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="w-20 h-20 mb-4 rounded-full border border-white/[0.05] bg-white/[0.02] flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(255,107,53,0.1)]">
                <span className="text-[2rem] font-bold text-white/20" style={{ fontFamily: "var(--font-heading)" }}>{name.charAt(0)}</span>
              </div>
              <span className="text-[0.75rem] font-bold text-gray-500 tracking-[3px] uppercase" style={{ fontFamily: "var(--font-heading)" }}>System Offline</span>
            </div>
          )}
        </div>

        {/* Right Column: Info */}
        <div className="w-full md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center">
          {/* Subtle side glow */}
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#ff6b35]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3
            className="text-[2rem] font-black mb-2 text-white tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {name}
          </h3>
          <p className="inline-block bg-[rgba(255,107,53,0.1)] text-[#ff6b35] text-[0.85rem] font-bold tracking-[2px] uppercase mb-8 px-4 py-1.5 rounded-full w-max border border-[rgba(255,107,53,0.2)] shadow-[0_0_15px_rgba(255,107,53,0.1)]" style={{ fontFamily: "var(--font-heading)" }}>
            {season}
          </p>

          <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed mb-8">
            {description}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.entries(specs).filter(([, value]) => value !== undefined).map(([label, value]) => (
              <div
                key={label}
                className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.04] transition-colors duration-300 group-hover:bg-white/[0.04]"
              >
                <span className="block text-[0.7rem] text-gray-500 uppercase tracking-[1.5px] mb-1 font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  {label}
                </span>
                <span className="block text-[0.95rem] text-white font-medium">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {features.map((f) => (
              <span
                key={f}
                className="bg-[rgba(255,255,255,0.03)] border border-white/[0.05] text-gray-300 px-4 py-2 rounded text-[0.75rem] font-bold tracking-[1px] uppercase transition-colors duration-300 hover:text-[#ff6b35] hover:border-[#ff6b35]/40"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
