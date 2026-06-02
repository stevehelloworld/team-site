"use client";

import MemberCard from "@/components/MemberCard";
import membersData from "@/data/members.json";
import { useLanguage } from "@/context/LanguageContext";

export default function MembersPage() {
  const { t, language } = useLanguage();

  return (
    <main className="pt-[72px] w-full">
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {t("members", "title")}
        </h1>
        <p className="text-gray-400 font-light text-lg">
          {t("members", "subTitle")}
        </p>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membersData.map((member) => (
              <MemberCard 
                key={member.name} 
                name={member.name}
                role={member.role}
                photo={member.photo}
                bio={member.bio[language] || ""} 
              />
            ))}
          </div>

          {/* Mentors Section */}
          <div className="text-center mb-16 mt-24">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {t("members", "mentorsTitle")}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light">
              {t("members", "mentorsSub")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <MemberCard
              name={language === "en" ? "Dr. Arthur Lin" : "林華 博士 (Dr. Arthur Lin)"}
              role={language === "en" ? "Head Coach" : "指導老師"}
              bio={t("members", "coachBio")}
              photo=""
            />
            <MemberCard
              name={language === "en" ? "Jerry Wu" : "吳傑瑞 (Jerry Wu)"}
              role={language === "en" ? "Technical Mentor" : "技術顧問"}
              bio={t("members", "mentorBio")}
              photo=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
