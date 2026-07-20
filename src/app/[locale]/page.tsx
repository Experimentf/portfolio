import { setRequestLocale } from "next-intl/server";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimations } from "@/components/layout/ScrollAnimations";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TopNav />
      <main className='relative z-10'>
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
