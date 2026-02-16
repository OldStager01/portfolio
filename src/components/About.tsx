import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { personal, skills } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading id="about" title="About" />

      <div className="mt-6 grid gap-10 md:grid-cols-5">
        {/* Left — prose */}
        <div className="md:col-span-3">
          <p className="leading-relaxed text-muted">{personal.about}</p>

          <p className="mt-4 leading-relaxed text-muted">
            Outside of work, I&apos;ve led the technical wing of my
            college&apos;s CS club, delivered workshops on AWS and Git to 100+
            students, and contributed to open-source projects used by 161K+
            developers weekly.
          </p>
        </div>

        {/* Right — skills, inline */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-medium text-foreground">
                  {group.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
