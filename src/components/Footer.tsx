import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[rgba(13,17,23,0.8)] backdrop-blur-md border-t border-white/5 mt-auto">
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        <p className="text-gray-500 text-sm">
          © 2026 VIS Mars #32760. FIRST® Tech Challenge Team from Taipei,
          Taiwan.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://ftcscout.org/teams/32760"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors text-sm no-underline"
          >
            FTCScout
          </Link>
          <Link
            href="https://www.firstinspires.org/robotics/ftc"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors text-sm no-underline"
          >
            FIRST FTC
          </Link>
        </div>
      </div>
    </footer>
  );
}
