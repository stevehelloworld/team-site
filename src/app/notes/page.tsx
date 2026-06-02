import type { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description: "Browse the engineering journal, CAD design notes, program algorithms, and testing documentation of VIS Mars #32760.",
};

export default function Page() {
  return <NotesClient />;
}
