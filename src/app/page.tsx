import Link from "next/link";

const services = [
  {
    tag: "01 / web",
    title: "Websites",
    text: "Fast, responsive sites for businesses and creators, from landing pages to full web apps.",
  },
  {
    tag: "02 / mobile",
    title: "Mobile apps",
    text: "Cross-platform apps built with React Native, launching on Android first and sharing one backend with your website.",
  },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

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

      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; what I do</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Two things, done properly.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs text-muted">{service.tag}</p>
              <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-xl border border-border bg-surface px-6 py-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Have a website or app in mind? Tell me about it and I&apos;ll get
            back to you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}