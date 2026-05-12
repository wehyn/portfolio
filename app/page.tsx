import NavBar from "@/components/ui/NavBar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <main>
        <Hero />
        <div className="section-line" />
        <About />
        <div className="section-line" />
        <Projects />
        <div className="section-line" />
        <Skills />
        <div className="section-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
