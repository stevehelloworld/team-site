import type { Metadata } from "next";
import RobotsClient from "./RobotsClient";

export const metadata: Metadata = {
  title: "Robots",
  description: "Explore the competition robots engineered by VIS Mars #32760, including specifications, autonomous navigation features, and mechanical designs.",
};

export default function Page() {
  return <RobotsClient />;
}
