import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar - VIS MARS",
  description: "Stay updated with FTC Team #32760 VIS Mars schedules, practice sessions, workshops, and upcoming robotics competitions.",
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
