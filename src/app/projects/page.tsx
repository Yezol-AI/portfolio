import Link from "next/link";
import { projects, type ProjectStatus } from "../../data/projects";

export const metadata = {
  title: "Projects",
};

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-accent text-accent",
  "In progress": "border-accent-2 text-accent-2",
  Planned: "border-border text-muted",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-sm text-accent">&gt; projects</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Things I&apos;ve built.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Each project is built end to end: design, code, backend and
        deployment. Northform is a fictional concept project made to show
        what I can deliver for a real client.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span
                className={`shrink-0 rounded-full border px-3 py-0.5 font-mono text-xs ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-3 text-muted">{project.summary}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

                        {(project.caseStudy || project.url || project.repoUrl) && (
              <div className="mt-auto flex flex-wrap gap-5 pt-6">
                {project.caseStudy && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Case study &rarr;
                  </Link>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    View project &rarr;
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    Source code &rarr;
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}