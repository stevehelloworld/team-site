import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTC Season",
  description: "Explore the current FTC season details, including game rules for DECODE, our build progress, and tournament timeline.",
};

export default function SeasonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
