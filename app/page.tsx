import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

export const metadata: Metadata = {
  title: "Mohd Talish Ansari | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack — React.js, Node.js, Express.js, MongoDB. 9.3 CGPA from GGSIPU. Building real-time applications and beautiful web experiences.",
  alternates: {
    canonical: "https://mohd-talish.dev",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
    </>
  );
}
