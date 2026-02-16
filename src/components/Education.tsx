import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading id="education" title="Education" />

      <div className="mt-8 space-y-6">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline"
          >
            <div>
              <h3 className="font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-sm text-muted">{edu.institution}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                {edu.scoreLabel}: {edu.score}
              </span>
              <span className="text-sm text-muted">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
