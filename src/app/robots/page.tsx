import type { Metadata } from "next";
import RobotTabs from "@/components/RobotTabs";
import robotsData from "@/data/robots.json";

export const metadata: Metadata = {
  title: "Our Robots",
  description: "Explore the robots engineered and programmed by FTC Team #32760 VIS Mars, detailing mechanisms, CAD designs, and software.",
};

export default function RobotsPage() {
  return (
    <main className="pt-[72px] w-full">
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Robots</h1>
        <p className="text-gray-400 font-light text-lg">Machines built with passion and precision</p>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <RobotTabs robots={robotsData} />
        </div>
      </section>
    </main>
  );
}
