import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Get in Touch" },
];

export default function Home() {
  return (
    <>
      {/* Hero will go here — Step 4 */}
      <div className="py-20">
        <h1 className="text-4xl font-bold tracking-tight">Tanmay Tambat</h1>
        <p className="mt-2 text-muted">
          Software Engineering Intern at Josh Software
        </p>
      </div>

      {sections.map((section) => (
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
