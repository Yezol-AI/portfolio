import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <section className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6 sm:py-32">
        <p className="font-mono text-sm text-accent">&gt; hello, world</p>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          I build fast, modern <span className="text-accent">websites</span>{" "}
          and <span className="text-accent-2">mobile apps</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">
          Freelance developer helping businesses and creators get online with
          clean design, solid code, and apps that work on every screen.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Hire me
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View projects
          </Link>
        </div>
      </section>
    </main>
  );
}