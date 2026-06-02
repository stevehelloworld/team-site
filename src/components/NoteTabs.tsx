"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import NoteCard from "./NoteCard";

type Note = {
  date: string;
  title: string;
  tags: string[];
  category: string;
  content: { en: string; zh: string };
};

const categories = [
  { key: "design", label: "Design" },
  { key: "mechanical", label: "Mechanical" },
  { key: "programming", label: "Programming" },
  { key: "testing", label: "Testing" },
];

export default function NoteTabs({ notes }: { notes: Note[] }) {
  const [activeTab, setActiveTab] = useState("design");
  const { language } = useLanguage();

  const filtered = notes.filter((n) => n.category === activeTab);
  const resolvedNotes = filtered.map((n) => ({
    ...n,
    content: n.content[language] || "",
  }));

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 justify-center mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`px-6 py-2.5 rounded text-[0.75rem] font-bold tracking-[1px] uppercase transition-all duration-300 border cursor-pointer ${
              activeTab === cat.key
                ? "bg-[#ff6b35] text-[#0d1117] border-[#ff6b35]"
                : "bg-transparent text-gray-400 border-white/[0.06] hover:border-[#ff6b35] hover:text-[#ff6b35]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Notes list */}
      <div className="max-w-3xl mx-auto">
        {resolvedNotes.length === 0 ? (
          <p className="text-center text-gray-500">No notes in this category yet.</p>
        ) : (
          resolvedNotes.map((note, i) => <NoteCard key={i} note={note} />)
        )}
      </div>
    </div>
  );
}
