import type { Metadata } from "next";
import MembersClient from "./MembersClient";

export const metadata: Metadata = {
  title: "Team Members",
  description: "Meet the talented students and professional mentors behind FTC Robotics Team VIS Mars #32760 from Taipei, Taiwan.",
};

export default function Page() {
  return <MembersClient />;
}
