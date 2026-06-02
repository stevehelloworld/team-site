import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "VIS Mars #32760 — FTC Robotics Team",
    template: "%s | VIS Mars #32760",
  },
  description:
    "VIS Mars #32760 — FIRST Tech Challenge robotics team from Taipei, Taiwan. We engineer, we compete, we inspire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="bg-[#0d1117] text-gray-100 min-h-screen flex flex-col items-stretch">
        <LanguageProvider>
          <Navbar />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
