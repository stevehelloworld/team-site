import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The journey, history, milestones, and core values of FTC Team #32760 VIS Mars.",
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
