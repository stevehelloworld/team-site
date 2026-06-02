import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is FIRST & FTC - VIS MARS",
  description: "Explore the core values of FIRST Tech Challenge (FTC) robotics competition, match structures, and coopertition values.",
};

export default function FirstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
