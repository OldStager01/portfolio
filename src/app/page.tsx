import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Achievements />
      <Leadership />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
