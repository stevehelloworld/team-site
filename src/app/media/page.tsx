import type { Metadata } from "next";
import MediaClient from "./MediaClient";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Watch documentaries, match replays, and behind-the-scenes video highlights of VIS Mars #32760 FTC robotics team.",
};

export default function Page() {
  return <MediaClient />;
}
