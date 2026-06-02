import type { Metadata } from "next";
import SeasonClient from "./SeasonClient";

export const metadata: Metadata = {
  title: "FTC Season",
  description: "Learn about the FTC DECODE season rules, game overview, timelines, and the official competition records of VIS Mars #32760.",
};

export default function Page() {
  return <SeasonClient />;
}
