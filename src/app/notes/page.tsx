import type { Metadata } from "next";
import NoteTabs from "@/components/NoteTabs";
import notesData from "@/data/notes.json";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description: "Browse the engineering journal, CAD design notes, programming guidelines, and game strategy documentation of VIS Mars #32760.",
};

export default function NotesPage() {
  return (
    <main className="pt-[72px] w-full">
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Engineering Notes</h1>
        <p className="text-gray-400 font-light text-lg">Our engineering process and design documentation</p>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <NoteTabs notes={notesData} />
        </div>
      </section>
    </main>
  );
}
