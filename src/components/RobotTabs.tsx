"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import RobotCard from "./RobotCard";

type Robot = {
  name: string;
  season: string;
  specs: Record<string, string | undefined>;
  features: string[];
  photo: string;
  description: { en: string; zh: string };
};

export default function RobotTabs({ robots }: { robots: Robot[] }) {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();

  const activeRobot = robots[active];
  const resolvedRobot = {
    ...activeRobot,
    description: activeRobot.description[language] || "",
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 justify-center mb-10 flex-wrap">
        {robots.map((robot, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-6 py-2.5 rounded text-[0.75rem] font-bold tracking-[1px] uppercase transition-all duration-300 border cursor-pointer ${
              active === i
                ? "bg-[#ff6b35] text-[#0d1117] border-[#ff6b35]"
                : "bg-transparent text-gray-400 border-white/[0.06] hover:border-[#ff6b35] hover:text-[#ff6b35]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {robot.name}
          </button>
        ))}
      </div>

      {/* Active robot */}
      <div className="w-full">
        <RobotCard {...resolvedRobot} />
      </div>
    </div>
  );
}
