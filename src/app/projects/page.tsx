import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Shah",
  description: "Websites and mobile apps I have built and am building.",
};

const statusStyles = {
  Live: "border-accent text-accent",
  "In progress": "border-accent-2 text-accent-2",
  Planned: "border-border text-muted",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; projects</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Things I&apos;m building.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          My first two projects are this site and its mobile app. More will be
          added here as I finish them.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <span
                className={`inline-block rounded-full border px-3 py-1 font-mono text-xs ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
              <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}