import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/portfolio";

const badgeStyles: Record<string, string> = {
  Winner: "bg-accent text-white",
  "Runner-Up": "bg-accent-light text-accent",
  Finalist: "bg-accent-light text-accent",
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading id="achievements" title="Achievements" />

      <div className="mt-8 space-y-4">
        {achievements.map((item) => (
          <div
            key={`${item.event}-${item.year}`}
            className="flex flex-col gap-2 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  badgeStyles[item.title] ?? "bg-accent-light text-accent"
                }`}
              >
                {item.title}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {item.event}
                </p>
                <p className="text-xs text-muted">{item.organizer}</p>
              </div>
            </div>
            <p className="shrink-0 text-xs text-muted">{item.year}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
