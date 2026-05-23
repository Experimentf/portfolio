import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { FixedBackdrop } from "@/components/layout/FixedBackdrop";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Home() {
  // await new Promise(resolve => setTimeout(resolve, 100000));
  return (
    <>
      <FixedBackdrop />
      <TopNav />
      <main className='relative z-10'>
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
