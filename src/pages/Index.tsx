import Hero from "@/components/Hero";
import About from "@/components/About";
import FileDirectory from "@/components/FileDirectory";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <>
    <CustomCursor />
    <Navbar />
    <main>
      <Hero />
      <About />
      <FileDirectory />
      <Projects />
      <ExperienceTimeline />
      <Skills />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />
    </main>
    <footer className="border-t border-border/30 py-8 text-center">
      <p className="text-sm text-muted-foreground">
        © 2026 Mohd Bilal — Built with React, TypeScript & Three.js
      </p>
    </footer>
  </>
);

export default Index;
