import CoursesSection from "@/components/CoursesSection";
import CreatorCta from "@/components/CreatorCta";
import Footer from "@/components/Footer";
import GrowthSection from "@/components/GrowthSection";
import Hero from "@/components/Hero";
import LearningPaths from "@/components/LearningPaths";
import LogoStrip from "@/components/LogoStrip";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-grid relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <main>
        <LogoStrip />
        <CoursesSection />
        <LearningPaths />
        <GrowthSection />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
