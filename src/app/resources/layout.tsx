import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Media Kit - VIS MARS",
  description: "Access open-source code repositories, robot CAD files, engineering portfolio templates, and official branding guidelines for VIS Mars #32760.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
