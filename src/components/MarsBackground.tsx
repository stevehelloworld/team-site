"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MarsBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setScrollY(window.scrollY);
    }, 0);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(0.4, 1 - scrollY * 0.0008);
  const opacityAmount = Math.max(0, 0.7 - scrollY * 0.0008);
  const translateY = scrollY * 0.2;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020202]">
      {/* Starfield */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 50%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 15%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 90%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 55%, rgba(255,255,255,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 35%, rgba(255,255,255,0.25) 0%, transparent 100%)
          `,
          animation: "twinkle 8s ease-in-out infinite alternate",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,107,53,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(100,140,255,0.03) 0%, transparent 40%)",
        }}
      />

      {/* Mars planet */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-75 ease-linear ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity: mounted ? opacityAmount : 0,
          transition: mounted ? "transform 75ms linear" : "opacity 2.5s ease-out",
        }}
      >
        <div className="relative w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh] lg:w-[100vw] lg:h-[100vh]">
          <Image
            src="/images/mars.png"
            alt="Mars"
            fill
            className="object-contain mix-blend-screen"
            style={{
              filter: "brightness(0.75) contrast(1.1)",
              animation: "marsFloat 20s ease-in-out infinite",
            }}
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Mars atmospheric glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ animation: "marsGlow 6s ease-in-out infinite alternate" }}
      >
        <div
          className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.12) 30%, rgba(224,64,64,0.06) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-transparent to-[#020202]/80" />
    </div>
  );
}
