import Hero from "@/components/Hero";
import About from "@/components/About";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const placeholderSections = [
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Get in Touch" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      {placeholderSections.map((section) => (
        <SectionWrapper key={section.id} id={section.id}>
          <SectionHeading id={section.id} title={section.title} />
          <p className="mt-4 text-sm text-muted">
            Content coming in next steps.
          </p>
        </SectionWrapper>
      ))}
    </>
  );
}
