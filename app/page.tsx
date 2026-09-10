import NavBar from "@/components/ui/NavBar";
import HorizontalStory from "@/components/layout/HorizontalStory";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HorizontalStory>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </HorizontalStory>
      </main>
    </>
  );
}
