"use client";

import { useState } from "react";

type CalendarEvent = {
  date: string;
  title: string;
  description: string;
  type: string;
};

function getDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getFirstDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

export default function Calendar({ events }: { events: CalendarEvent[] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () =>
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  const nextMonth = () =>
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );

  const days = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthLabel = currentMonth.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="bg-[#1c2333] rounded-lg p-8 border border-white/[0.06]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevMonth}
          className="text-gray-400 hover:text-[#ff6b35] transition-colors bg-transparent border-none text-lg cursor-pointer px-3 py-1"
        >
          ◀
        </button>
        <h3
          className="text-[1rem] font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {monthLabel}
        </h3>
        <button
          onClick={nextMonth}
          className="text-gray-400 hover:text-[#ff6b35] transition-colors bg-transparent border-none text-lg cursor-pointer px-3 py-1"
        >
          ▶
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {weekdays.map((d) => (
          <div key={d} className="text-gray-500 py-2 font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {/* Empty padding cells */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`e-${i}`} className="py-3" />
        ))}

        {/* Day cells */}
        {Array.from({ length: days }).map((_, i) => {
          const day = i + 1;
          const year = currentMonth.getFullYear();
          const month = String(currentMonth.getMonth() + 1).padStart(2, "0");
          const dayStr = String(day).padStart(2, "0");
          const dateStr = `${year}-${month}-${dayStr}`;
          const dayEvents = events.filter((e) => e.date === dateStr);
          const hasEvent = dayEvents.length > 0;
          const today = new Date();
          const isToday =
            day === today.getDate() &&
            currentMonth.getMonth() === today.getMonth() &&
            currentMonth.getFullYear() === today.getFullYear();

          return (
            <div
              key={day}
              className={`py-3 rounded-lg transition-colors relative ${
                hasEvent
                  ? "bg-[rgba(255,107,53,0.2)] text-[#ff6b35] font-bold"
                  : "text-gray-400"
              } ${isToday ? "ring-1 ring-[#ff6b35]" : ""}`}
              title={dayEvents.map((e) => e.title).join(", ")}
            >
              {day}
              {hasEvent && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff6b35]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
