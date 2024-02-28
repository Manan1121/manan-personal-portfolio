import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TabsSection from "./components/TabsSection"
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="font-serif flex min-h-screen flex-col items-left justify-between p-10">
      <section id="about">
      <HeroSection></HeroSection>
      </section>
      <div className=" items-center">
      <TabsSection></TabsSection>
      </div>
      <section id="projects">
      <ProjectSection/>
      </section>
    </main>
  );
}
