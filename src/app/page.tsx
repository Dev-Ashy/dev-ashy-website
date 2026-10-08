import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MobileCreator from "@/components/MobileCreator";
import TechStack from "@/components/TechStack";
import Templates from "@/components/Templates";
import DeveloperTools from "@/components/DeveloperTools";
import OpenSource from "@/components/OpenSource";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <MobileCreator />
      <TechStack />
      <Templates />
      <DeveloperTools />
      <OpenSource />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
