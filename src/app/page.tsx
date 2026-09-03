import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
