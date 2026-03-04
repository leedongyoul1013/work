import HeroSection    from '@/components/sections/HeroSection';
import AboutSection   from '@/components/sections/AboutSection';
import ServiceSection from '@/components/sections/ServiceSection';
import StatsSection   from '@/components/sections/StatsSection';
import ProjectSection from '@/components/sections/ProjectSection';
import PartnerSection from '@/components/sections/PartnerSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StatsSection />
      <ProjectSection preview />
      <PartnerSection />
      <ContactSection />
    </>
  );
}
