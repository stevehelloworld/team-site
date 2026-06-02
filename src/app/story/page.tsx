import type { Metadata } from "next";
import StoryClient from "./StoryClient";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Read the journey of VIS Mars #32760, from founding in 2025 to regional championships in Taiwan and Hong Kong.",
};

export default function Page() {
  return <StoryClient />;
}
