import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TabsSection from "./components/TabsSection";
export default function Home() {
  return (
    <main className="font-serif flex min-h-screen flex-col items-left justify-between p-10">
      <HeroSection></HeroSection>
      <div className=" items-center">
      <TabsSection></TabsSection>
      </div>
    </main>
  );
}
