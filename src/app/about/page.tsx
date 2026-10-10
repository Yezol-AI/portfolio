import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Shah",
  description: "About Shah, a freelance web and mobile app developer.",
};

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Expo",
  "Supabase",
  "Git and GitHub",
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; about</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Shah.
        </h1>

        <div className="mt-8 max-w-2xl space-y-4 text-lg text-muted">
          <p>
            I&apos;m a freelance developer who builds websites and mobile apps.
            I care about clean design, fast pages, and code that is easy to
            maintain.
          </p>
          <p>
            I work in small steps and show progress often, so you always know
            where your project stands and can change direction early.
          </p>
        </div>

        <h2 className="mt-14 font-mono text-sm text-accent">&gt; tools I use</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-sm"
            >
              {tool}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-12 inline-block rounded-md border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}