import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Robots - VIS MARS",
  description: "Explore the robots engineered and programmed by FTC Team #32760 VIS Mars, detailing mechanisms, CAD designs, and software.",
};

export default function RobotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
