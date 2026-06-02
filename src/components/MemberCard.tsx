import Image from "next/image";

type MemberCardProps = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export default function MemberCard({
  name,
  role,
  bio,
  photo,
}: MemberCardProps) {
  return (
    <div className="bg-[#1c2333]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.04] transition-all duration-500 text-left hover:border-[rgba(255,107,53,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group relative">
      {/* Subtle side glow effect */}
      <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#ff6b35] to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      {/* Photo area */}
      <div className="w-full h-[280px] bg-[#0d1117] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover z-10"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1c2333] to-[#0a0d14] relative z-10">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
            <div className="w-16 h-16 rounded-full border border-white/[0.05] bg-white/[0.02] flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(255,107,53,0.05)] group-hover:border-[#ff6b35]/30 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.2)] transition-all duration-500">
              <span className="text-[1.5rem] font-bold text-white/30 group-hover:text-[#ff6b35] transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>{name.charAt(0)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-8 relative z-20 flex flex-col justify-between bg-gradient-to-t from-[#161b22] to-transparent">
        <div>
          <span
            className="inline-block bg-[rgba(255,107,53,0.1)] text-[#ff6b35] text-[0.75rem] px-3 py-1 rounded font-bold tracking-[2px] uppercase mb-4 border border-[rgba(255,107,53,0.2)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {role}
          </span>
          <h3
            className="text-[1.25rem] font-bold mb-3 text-white tracking-[0.5px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {name}
          </h3>
        </div>
        <p className="text-gray-400 text-[0.95rem] font-light leading-relaxed mt-2 group-hover:text-gray-300 transition-colors duration-300">
          {bio}
        </p>
      </div>
    </div>
  );
}
