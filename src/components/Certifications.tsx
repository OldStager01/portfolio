import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="pt-0">
      <SectionHeading id="certifications" title="Certifications" />

      <div className="mt-6 flex flex-wrap gap-3">
        {certifications.map((cert) => {
          const content = (
            <span className="text-sm text-muted">
              <span className="font-medium text-foreground">{cert.name}</span>
              <span className="mx-1.5 text-border">·</span>
              {cert.issuer}, {cert.year}
            </span>
          );

          return cert.url ? (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-border px-4 py-2.5 transition-colors hover:border-accent/40"
            >
              {content}
            </a>
          ) : (
            <div
              key={cert.name}
              className="inline-flex rounded-lg border border-border px-4 py-2.5"
            >
              {content}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
