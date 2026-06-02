import type { Metadata } from "next";
import MemberCard from "@/components/MemberCard";
import membersData from "@/data/members.json";

export const metadata: Metadata = {
  title: "Team Members",
  description: "Meet the talented students and dedicated mentors of FTC Team #32760 VIS Mars from Taipei, Taiwan.",
};

export default function MembersPage() {
  return (
    <main className="pt-[72px] w-full">
      <div className="text-center py-16 px-6" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0e08, #0d1117)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Team Members</h1>
        <p className="text-gray-400 font-light text-lg">The people behind VIS Mars</p>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membersData.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>

          {/* Mentors Section */}
          <div className="text-center mb-16 mt-24">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Mentors</h2>
            <div className="w-[60px] h-[3px] bg-[#ff6b35] mx-auto rounded mb-4" />
            <p className="text-gray-400 font-light">The experienced mentors who guide our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <MemberCard
              name="Dr. Arthur Lin (林華博士)"
              role="Head Coach"
              bio="指導老師，專長於專案管理與工程設計流程控管。引導團隊建立良好的開發紀律與系統性記錄。"
              photo=""
            />
            <MemberCard
              name="Jerry Wu (吳傑瑞)"
              role="Technical Mentor"
              bio="技術顧問，專長於嵌入式控制系統與 CAD 機構開發驗證。指導學生進行程式架構設計與硬體加工製程。"
              photo=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
