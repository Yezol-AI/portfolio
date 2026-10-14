import Link from "next/link";
import type { ReactNode } from "react";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
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

function Pills({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Copy({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs text-accent-2">{label}</p>
      <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        {text}
      </p>
    </div>
  );
}

function Stage({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative mb-6 min-h-40 flex-1 overflow-hidden rounded-2xl border border-white/5 bg-black/20"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

type TileProps = {
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

function Tile({ href, external, className = "", children }: TileProps) {
  const base = `glass relative flex flex-col overflow-hidden rounded-3xl p-6 ${className}`;

  if (!href) {
    return <div className={base}>{children}</div>;
  }

  const arrow = (
    <span className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-accent">
      <ArrowIcon />
    </span>
  );
  const classes = `${base} glass-hover group`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}

function BrowserDots() {
  return (
    <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-white/20" />
    </div>
  );
}

const tools = [
  "Next.js",
  "React Native",
  "Expo",
  "Supabase",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
];

export default function BentoGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
          3 projects · 2 websites · 1 mobile app
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          What I&apos;ve built, and what I do.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 1. Northform Website */}
        <Tile
          href="/projects/northform-web"
          className="min-h-96 md:col-span-2"
        >
          <Stage>
            <div className="absolute inset-x-6 bottom-0 top-6 rounded-t-2xl border border-b-0 border-white/10 bg-white/5 sm:inset-x-16">
              <BrowserDots />
              <div className="space-y-2 p-3">
                <div className="h-12 rounded-lg bg-linear-to-br from-[#FF5B2E]/70 to-[#FF5B2E]/5" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-lg bg-white/5" />
                  <div className="h-10 rounded-lg bg-white/5" />
                  <div className="h-10 rounded-lg bg-white/5" />
                </div>
              </div>
            </div>
          </Stage>
          <Copy
            label="01 · website · fictional concept project"
            title="Northform Website"
            text="A strength studio site with live class schedule, booking, trainers, plans and a free-trial form."
          />
          <Pills items={["Next.js", "Supabase", "Tailwind CSS"]} />
        </Tile>

        {/* 2. Northform Android App (tall) */}
        <Tile
          href="/projects/northform-app"
          className="min-h-96 lg:row-span-2"
        >
          <Stage>
  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5B2E]/25 blur-3xl" />
  <div className="absolute left-1/2 top-1/2 h-80 w-40 -translate-x-1/2 -translate-y-1/2 rounded-4xl border border-white/10 bg-white/5 p-2.5">
    <div className="h-full rounded-3xl bg-background/80 p-3">
      <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/15" />
      <div className="mb-3 flex gap-1.5">
        <span className="h-6 w-6 rounded-full bg-[#FF5B2E]" />
        <span className="h-6 w-6 rounded-full bg-white/10" />
        <span className="h-6 w-6 rounded-full bg-white/10" />
      </div>
      <div className="space-y-2">
        <div className="h-12 rounded-xl bg-white/5" />
        <div className="h-12 rounded-xl bg-white/5" />
        <div className="h-12 rounded-xl bg-white/5" />
      </div>
      <div className="mt-3 h-8 rounded-full bg-[#FF5B2E]" />
    </div>
  </div>
</Stage>
          <Copy
            label="02 · android app · fictional concept project"
            title="Northform Android App"
            text="Class booking in your pocket, sharing one backend with the website."
          />
          <Pills items={["Expo", "React Native", "Supabase"]} />
        </Tile>

        {/* 3. Portfolio Website */}
        <Tile
          href="https://github.com/Yezol-AI/portfolio"
          external
          className="min-h-80"
        >
          <Stage>
            <div className="absolute inset-x-6 bottom-0 top-6 rounded-t-2xl border border-b-0 border-white/10 bg-white/5">
              <BrowserDots />
              <div className="flex items-center gap-3 p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-white">
                  S
                </span>
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-2/3 rounded-full bg-white/20" />
                  <div className="h-2 w-1/3 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </Stage>
          <Copy
            label="03 · website"
            title="Portfolio Website"
            text="You're looking at it. Built and designed by me, with the source on GitHub."
          />
          <Pills items={["Next.js", "Tailwind CSS", "Vercel"]} />
        </Tile>

        {/* 4. Websites service */}
        <Tile href="/services" className="min-h-80">
          <Stage>
            <pre className="absolute left-5 top-5 font-mono text-xs leading-6 text-muted">
              <span className="text-accent-2">{"<main>"}</span>
              {"\n  "}
              <span className="text-accent">{"<Hero />"}</span>
              {"\n  "}
              <span className="text-accent">{"<Booking />"}</span>
              {"\n"}
              <span className="text-accent-2">{"</main>"}</span>
            </pre>
          </Stage>
          <Copy
            label="service · web"
            title="Websites"
            text="Fast, responsive sites for businesses and creators, from landing pages to full web apps."
          />
        </Tile>

        {/* 5. Mobile apps service */}
        <Tile href="/services" className="min-h-80">
          <Stage>
            <div className="absolute inset-0 flex items-end justify-center gap-3">
              <div className="h-24 w-14 translate-y-2 -rotate-6 rounded-t-2xl border border-b-0 border-white/10 bg-white/5">
                <div className="mx-auto mt-2 h-1 w-6 rounded-full bg-white/20" />
                <div className="m-2 h-10 rounded-lg bg-accent/60" />
              </div>
              <div className="h-24 w-14 translate-y-2 rotate-6 rounded-t-2xl border border-b-0 border-white/10 bg-white/5">
                <div className="mx-auto mt-2 h-1 w-6 rounded-full bg-white/20" />
                <div className="m-2 h-10 rounded-lg bg-accent-2/40" />
              </div>
            </div>
          </Stage>
          <Copy
            label="service · mobile"
            title="Mobile apps"
            text="Cross-platform apps built with React Native, launching on Android first and sharing one backend with your website."
          />
        </Tile>

        {/* 6. Tools */}
        <Tile className="min-h-64 md:col-span-2">
          <Copy
            label="tools"
            title="Built with a modern stack"
            text="The tools behind the projects above."
          />
          <ul className="mt-auto flex flex-wrap gap-2 pt-6">
            {tools.map((tool) => (
              <li
                key={tool}
                className="glass rounded-2xl px-4 py-2 font-mono text-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Tile>

        {/* 7. CTA */}
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12 md:col-span-2 lg:col-span-3">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something.
              </h2>
              <p className="mt-3 max-w-md text-muted">
                Have a website or app in mind? Tell me about it and I&apos;ll
                get back to you.
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
      </div>
    </section>
  );
}