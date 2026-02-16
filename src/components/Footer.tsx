import { personal } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {currentYear} {personal.name}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-muted transition-colors hover:text-foreground"
            aria-label="Send email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
