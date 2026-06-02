import type { Metadata } from "next";
import FirstClient from "./FirstClient";

export const metadata: Metadata = {
  title: "FIRST & FTC",
  description: "Learn about the core values of FIRST, Gracious Professionalism, Coopertition, and the three-stage structure of FTC matches.",
};

export default function Page() {
  return <FirstClient />;
}
