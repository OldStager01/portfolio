import { personal } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {currentYear} {personal.name}
        </p>

        <nav aria-label="Footer links">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
