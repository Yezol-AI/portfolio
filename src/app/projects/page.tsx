import Link from "next/link";
import { projects, type ProjectStatus } from "../../data/projects";

export const metadata = {
  title: "Projects",
};

const statusStyles: Record<ProjectStatus, { dot: string; text: string }> = {
  Live: { dot: "bg-emerald-400", text: "text-foreground" },
  "In progress": { dot: "bg-accent-2", text: "text-foreground" },
  Planned: { dot: "bg-muted", text: "text-muted" },
};

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
        &gt; projects
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
        Things I&apos;ve built.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        Each project is built end to end: design, code, backend and
        deployment. Northform is a fictional concept project made to show
        what I can deliver for a real client.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const status = statusStyles[project.status];
          const isNorthform = project.slug.startsWith("northform");

          return (
            <article
              key={project.slug}
              className="glass glass-hover flex flex-col rounded-3xl p-3"
            >
              {/* Visual stage */}
              <div
                className="relative h-44 overflow-hidden rounded-2xl border border-white/5 bg-black/20"
                aria-hidden="true"
              >
                <div
                  className={`absolute -top-12 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full blur-3xl ${
                    isNorthform ? "bg-[#FF5B2E]/30" : "bg-accent/35"
                  }`}
                />
                <span className="absolute bottom-2 left-5 font-display text-7xl font-semibold text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Status chip */}
              <div className="absolute right-6 top-6">
                <span
                  className={`glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs ${status.text}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-2xl font-medium tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.caseStudy || project.url || project.repoUrl) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.caseStudy && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="btn-primary pr-2!"
                      >
                        Case study
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                          <ArrowIcon />
                        </span>
                      </Link>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        View project
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        Source code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}