import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { leadership } from "@/data/portfolio";

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="pt-0">
      <SectionHeading id="leadership" title="Leadership & Volunteering" />

      <div className="mt-6 space-y-4">
        {leadership.map((item) => (
          <div
            key={`${item.title}-${item.role}`}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {item.role}
                <span className="mx-1.5 font-normal text-border">·</span>
                <span className="font-medium text-accent">{item.title}</span>
              </h3>
              <p className="mt-0.5 text-sm text-muted">{item.description}</p>
            </div>
            <p className="shrink-0 text-xs text-muted">{item.period}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
