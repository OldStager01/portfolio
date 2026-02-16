import { openSource } from "@/data/portfolio";

export default function OpenSource() {
  return (
    <div className="border-y border-border py-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium tracking-wide text-accent">
          Open Source
        </p>
        <p className="text-lg text-foreground">
          Contributor to{" "}
          <a
            href={openSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {openSource.project}
          </a>
        </p>
        <p className="text-sm text-muted">{openSource.stat}</p>
      </div>
    </div>
  );
}
