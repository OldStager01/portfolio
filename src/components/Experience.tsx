import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading id="experience" title="Experience" />

      <div className="mt-8 space-y-10">
        {experience.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="group">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {exp.company}
                  <span className="mx-2 text-border">·</span>
                  <span className="text-muted">{exp.location}</span>
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted">{exp.period}</p>
            </div>

            {exp.description.length > 0 && (
              <ul className="mt-3 space-y-2">
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {exp.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
