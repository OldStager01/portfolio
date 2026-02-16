import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading id="projects" title="Projects" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-border p-5 transition-colors hover:border-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {project.tagline}
                </p>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 flex-1">
              {project.description.map((point, i) => (
                <li key={i} className="text-sm leading-relaxed text-muted">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                >
                  Source
                  <ArrowUpRight />
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                >
                  Live
                  <ArrowUpRight />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
