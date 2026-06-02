import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery - VIS MARS",
  description: "Watch our official FTC season documentaries, Chinese Taipei Championship, and Hong Kong Championship episodes.",
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
