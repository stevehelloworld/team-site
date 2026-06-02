"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Far background stars (small, low opacity, slow parallax)
const farStars = [
  { top: "10%", left: "12%", size: 1.2, delay: "0s", op: 0.35 },
  { top: "25%", left: "75%", size: 1.0, delay: "1.5s", op: 0.3 },
  { top: "45%", left: "28%", size: 1.5, delay: "0.5s", op: 0.4 },
  { top: "62%", left: "85%", size: 1.1, delay: "2.2s", op: 0.35 },
  { top: "78%", left: "8%", size: 1.3, delay: "1.0s", op: 0.4 },
  { top: "88%", left: "55%", size: 1.2, delay: "3.0s", op: 0.3 },
  { top: "35%", left: "42%", size: 1.4, delay: "0.8s", op: 0.45 },
  { top: "70%", left: "38%", size: 1.1, delay: "1.8s", op: 0.3 },
  { top: "18%", left: "88%", size: 1.5, delay: "2.5s", op: 0.4 },
  { top: "52%", left: "62%", size: 1.2, delay: "1.2s", op: 0.35 },
];

// Midground stars (medium size, brighter, medium parallax)
const midStars = [
  { top: "7%", left: "38%", size: 2.0, delay: "0.3s", op: 0.65 },
  { top: "22%", left: "18%", size: 2.2, delay: "1.1s", op: 0.7 },
  { top: "32%", left: "80%", size: 1.8, delay: "2.0s", op: 0.55 },
  { top: "48%", left: "15%", size: 2.4, delay: "0.7s", op: 0.75 },
  { top: "68%", left: "72%", size: 2.0, delay: "1.6s", op: 0.6 },
  { top: "82%", left: "92%", size: 2.2, delay: "2.8s", op: 0.7 },
  { top: "90%", left: "28%", size: 1.8, delay: "0.4s", op: 0.6 },
  { top: "38%", left: "94%", size: 2.4, delay: "1.9s", op: 0.75 },
  { top: "15%", left: "58%", size: 2.0, delay: "2.4s", op: 0.6 },
  { top: "74%", left: "48%", size: 2.3, delay: "1.3s", op: 0.7 },
];

// Foreground blurred bokeh spheres (large, very blurred, fast parallax, representing nearby space dust/lens bokeh)
const foregroundBokeh = [
  { top: "15%", left: "10%", size: 250, blur: 24, op: 0.12, delay: "0s" },
  { top: "55%", left: "82%", size: 300, blur: 28, op: 0.08, delay: "4s" },
  { top: "80%", left: "25%", size: 220, blur: 20, op: 0.1, delay: "8s" },
];

export default function MarsBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set mounted and initial scroll position
    setMounted(true);
    setScrollY(window.scrollY);

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

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coords to [-0.5, 0.5]
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMouse({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scale = Math.max(0.4, 1 - scrollY * 0.0008);
  const opacityAmount = Math.max(0, 0.75 - scrollY * 0.0008);
  
  // Calculate dynamic camera blur for Mars to simulate focus shifting out
  const marsBlur = Math.min(8, scrollY * 0.006);

  // Parallax offsets
  const scrollYFar = scrollY * 0.05;
  const scrollYMid = scrollY * 0.12;
  const scrollYMars = scrollY * 0.22;
  const scrollYFore = scrollY * 0.38;

  const mouseXFar = mouse.x * 12;
  const mouseYFar = mouse.y * 12;
  
  const mouseXMid = mouse.x * 24;
  const mouseYMid = mouse.y * 24;

  const mouseXMars = mouse.x * -32;
  const mouseYMars = mouse.y * -32;

  const mouseXFore = mouse.x * -64;
  const mouseYFore = mouse.y * -64;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020202]">
      {/* 1. Deep Space Nebular Ambient Glow (Farthest Layer) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,107,53,0.07) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(100,140,255,0.04) 0%, transparent 50%)",
          transform: `translate(${mouseXFar * 0.5}px, ${mouseYFar * 0.5}px)`,
        }}
      />

      {/* 2. Far Background Stars (Farthest, small, slowly twinkling) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mouseXFar}px, ${mouseYFar}px) translateY(${scrollYFar}px)`,
        }}
      >
        {farStars.map((star, idx) => (
          <span
            key={`far-${idx}`}
            className="absolute rounded-full bg-white block"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.op,
              animation: "twinkle 5s ease-in-out infinite alternate",
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* 3. Midground Stars (Medium parallax, brighter) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mouseXMid}px, ${mouseYMid}px) translateY(${scrollYMid}px)`,
        }}
      >
        {midStars.map((star, idx) => (
          <span
            key={`mid-${idx}`}
            className="absolute rounded-full bg-white block"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.op,
              animation: "twinkle 3s ease-in-out infinite alternate",
              animationDelay: star.delay,
              boxShadow: `0 0 4px rgba(255, 255, 255, ${star.op * 0.5})`,
            }}
          />
        ))}
      </div>

      {/* 4. Mars Planet + Atmospheric Glow Layer */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${mouseXMars}px, ${mouseYMars}px) translateY(${scrollYMars}px) scale(${scale})`,
          opacity: mounted ? opacityAmount : 0,
        }}
      >
        <div className="relative w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh] lg:w-[100vw] lg:h-[100vh] flex items-center justify-center">
          
          {/* Inner atmospheric halo (behind Mars) */}
          <div
            className="absolute w-[65vw] h-[65vw] max-w-[650px] max-h-[650px] rounded-full filter blur-3xl pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,53,0.18) 20%, rgba(224,64,64,0.08) 50%, transparent 70%)",
              animation: "marsGlow 8s ease-in-out infinite alternate",
            }}
          />

          {/* Mars Image */}
          <Image
            src="/images/mars.png"
            alt="Mars"
            fill
            className="object-contain mix-blend-screen"
            style={{
              filter: `brightness(0.75) contrast(1.1) blur(${marsBlur}px)`,
              animation: "marsFloat 24s ease-in-out infinite",
              transition: "filter 0.2s ease-out",
            }}
            priority
            quality={90}
          />
        </div>
      </div>

      {/* 5. Foreground Bokeh Layer (Very close to camera, blurred, moves very fast) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out mix-blend-screen"
        style={{
          transform: `translate(${mouseXFore}px, ${mouseYFore}px) translateY(${scrollYFore}px)`,
        }}
      >
        {foregroundBokeh.map((bokeh, idx) => (
          <div
            key={`bokeh-${idx}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: bokeh.top,
              left: bokeh.left,
              width: `${bokeh.size}px`,
              height: `${bokeh.size}px`,
              opacity: bokeh.op,
              filter: `blur(${bokeh.blur}px)`,
              background: "radial-gradient(circle, rgba(255,107,53,0.16) 0%, rgba(224,64,64,0.04) 45%, transparent 70%)",
              animation: "bokehFloat 20s ease-in-out infinite alternate",
              animationDelay: bokeh.delay,
            }}
          />
        ))}
      </div>

      {/* 6. Dark Gradient overlay for UI readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-transparent to-[#020202]/85 z-10" />
    </div>
  );
}
