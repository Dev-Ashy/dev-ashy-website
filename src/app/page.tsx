import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DeveloperTools from "@/components/DeveloperTools";
import MobileCreator from "@/components/MobileCreator";
import Templates from "@/components/Templates";
import TechStack from "@/components/TechStack";
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
      <DeveloperTools />
      <MobileCreator />
      <Templates />
      <TechStack />
      <OpenSource />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}