import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import Reveal from "@/components/motion/Reveal";

const delay = (ms: number) =>
  ({ "--nf-delay": `${ms}ms` }) as CSSProperties;

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

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5 10 17.5 19 7.5" />
    </svg>
  );
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
    <Reveal as="section" className="mt-16">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
        &gt; {label}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

function BuiltList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          data-glow
          className="glass relative flex gap-3 rounded-2xl p-4 text-sm leading-relaxed text-muted"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-2">
            <CheckIcon />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={item}
          data-glow
          className="glass relative flex gap-4 rounded-2xl p-5 text-sm leading-relaxed text-muted"
        >
          <span className="font-mono text-sm text-accent-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function NextList({ items }: { items: string[] }) {
  return (
    <ul className="glass divide-y divide-white/5 rounded-3xl px-6 py-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 py-4 text-sm leading-relaxed text-muted"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
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
  const isNorthform = project.slug.startsWith("northform");

  return (
    <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      {/* Top glow: same colors as before, now drifting gently */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-2/3 -translate-x-1/2"
        aria-hidden="true"
      >
        <div
          className={`nf-float-slow h-full w-full rounded-full blur-3xl ${
            isNorthform ? "bg-[#FF5B2E]/15" : "bg-accent/20"
          }`}
        />
      </div>

      <Link
        href="/projects"
        className="btn-ghost nf-rise"
        style={delay(0)}
      >
        &larr; All projects
      </Link>

      <p
        className="nf-rise mt-10 font-mono text-xs uppercase tracking-widest text-accent-2"
        style={delay(100)}
      >
        &gt; case study
      </p>
      <h1
        className="nf-rise mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl"
        style={delay(200)}
      >
        {project.title}
      </h1>
      <p
        className="nf-rise mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        style={delay(320)}
      >
        {project.summary}
      </p>

      <div className="nf-rise mt-8 flex flex-wrap gap-3" style={delay(440)}>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary pr-2!"
          >
            View project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <ArrowIcon />
            </span>
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

      {study.image && (
        <Reveal className="mt-12">
          <div className="glass rounded-3xl p-2 shadow-[0_0_80px_-30px_rgba(139,92,246,0.5)] sm:p-3">
            <Image
              src={study.image.src}
              alt={study.image.alt}
              width={study.image.width}
              height={study.image.height}
              sizes="(min-width: 896px) 896px, 100vw"
              className="w-full rounded-2xl"
              priority
            />
          </div>
        </Reveal>
      )}

      <Section label="the brief" title="What I set out to do">
        <div data-glow className="glass relative rounded-3xl p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {study.brief}
          </p>
        </div>
      </Section>

      <Section label="what I built" title="What it does">
        <BuiltList items={study.built} />
      </Section>

      <Section label="how it works" title="Under the hood">
        <NumberedList items={study.how} />
      </Section>

      <Section label="tech" title="Stack">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="glass rounded-2xl px-4 py-2 font-mono text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="what's next" title="Where it goes from here">
        <NextList items={study.next} />
      </Section>

      <Reveal className="mt-20">
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
                Need something like this?
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted">
                Tell me what you have in mind and I&apos;ll get back to you.
              </p>
            </div>
            <Link href="/contact" className="btn-primary pr-2!">
              Start a project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}