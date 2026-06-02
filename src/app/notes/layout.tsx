import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Notes - VIS MARS",
  description: "Browse the engineering journal, CAD design notes, programming guidelines, and game strategy documentation of VIS Mars #32760.",
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
