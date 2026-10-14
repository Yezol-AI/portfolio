import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <p className="font-mono text-sm text-accent">&gt; {label}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();

  const study = project.caseStudy;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Link
        href="/projects"
        className="font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        &larr; all projects
      </Link>

      <p className="mt-8 font-mono text-sm text-accent">&gt; case study</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-5">
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

      {study.image && (
        <Image
          src={study.image.src}
          alt={study.image.alt}
          width={study.image.width}
          height={study.image.height}
          sizes="(min-width: 768px) 768px, 100vw"
          className="mt-10 w-full rounded-xl border border-border"
          priority
        />
      )}

      <Section label="the brief" title="What I set out to do">
        <p className="text-muted">{study.brief}</p>
      </Section>

      <Section label="what I built" title="What it does">
        <List items={study.built} />
      </Section>

      <Section label="how it works" title="Under the hood">
        <List items={study.how} />
      </Section>

      <Section label="tech" title="Stack">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="what's next" title="Where it goes from here">
        <List items={study.next} />
      </Section>
    </main>
  );
}