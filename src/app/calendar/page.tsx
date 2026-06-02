import type { Metadata } from "next";
import CalendarClient from "./CalendarClient";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Keep track of upcoming events, build sessions, practice schedules, and competition dates for VIS Mars #32760.",
};

export default function Page() {
  return <CalendarClient />;
}
