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

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
          &gt; about
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I&apos;m Shah.
        </h1>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="glass rounded-3xl p-8 sm:p-10 lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I&apos;m a freelance developer who builds websites and mobile
                apps. I care about clean design, fast pages, and code that is
                easy to maintain.
              </p>
              <p>
                I work in small steps and show progress often, so you always
                know where your project stands and can change direction early.
              </p>
            </div>
          </div>

          <div className="glass relative flex flex-col items-start justify-between overflow-hidden rounded-3xl p-8">
            <div
              className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/30 blur-3xl"
              aria-hidden="true"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-white shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              S
            </span>
            <div className="relative mt-10">
              <p className="font-display text-2xl font-medium">Shah</p>
              <p className="mt-1 text-sm text-muted">
                Freelance web and mobile developer
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-16 font-mono text-xs uppercase tracking-widest text-accent-2">
          &gt; tools I use
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li
              key={tool}
              className="glass rounded-2xl px-4 py-2 font-mono text-sm"
            >
              {tool}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-primary mt-12 pr-2!">
          Get in touch
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <ArrowIcon />
          </span>
        </Link>
      </section>
    </main>
  );
}