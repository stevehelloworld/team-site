"use client";

import { useState } from "react";
import Markdown from "react-markdown";

type Note = {
  date: string;
  title: string;
  tags: string[];
  content: string;
};

export default function NoteCard({ note }: { note: Note }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-[#1c2333] rounded-lg border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-[rgba(255,107,53,0.3)] mb-4">
      {/* Header (clickable) */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex justify-between items-start cursor-pointer bg-transparent border-none"
      >
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(255,107,53,0.15)] text-[#ff6b35] px-3 py-1 rounded text-[0.7rem] font-bold tracking-[1px] uppercase border border-[rgba(255,107,53,0.15)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3
            className="text-[1rem] font-bold text-white tracking-[0.5px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {note.title}
          </h3>
          <time className="text-sm text-gray-500 mt-1 block">{note.date}</time>
        </div>
        <span
          className={`text-gray-500 transition-transform duration-300 text-lg mt-1 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Expandable content */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 border-t border-white/5 pt-4">
            <div className="prose prose-sm prose-invert max-w-none">
              <Markdown>{note.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
