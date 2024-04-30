import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
    <div className=" mt-24 mx-auto px-12 py-04 bg-inherit">
       <HeroSection/>
       <AboutSection/>
       <ProjectsSection/>
       <EmailSection/>
    </div>

    </main>
  );
}
