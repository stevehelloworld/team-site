import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Members - VIS MARS",
  description: "Meet the talented students and dedicated mentors of FTC Team #32760 VIS Mars from Taipei, Taiwan.",
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
