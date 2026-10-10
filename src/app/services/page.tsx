import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Shah",
  description: "Website and mobile app development for businesses and creators.",
};

const offers = [
  {
    tag: "01 / web",
    title: "Websites",
    text: "Fast, responsive websites that look sharp on every screen, from a single landing page to a full multi-page site.",
    points: ["Custom design", "Mobile-friendly", "Contact forms", "Hosting setup"],
  },
  {
    tag: "02 / mobile",
    title: "Mobile apps",
    text: "Android apps built with React Native, sharing one backend with your website so everything stays in sync.",
    points: ["Android first", "User accounts", "Database and login", "Store publishing help"],
  },
];

const steps = [
  { title: "Talk", text: "You tell me what you need and who it is for." },
  { title: "Design", text: "I send a plan and layout for you to approve." },
  { title: "Build", text: "I build in small steps, so you see progress often." },
  { title: "Launch", text: "We go live, and I fix issues that come up." },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; services</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          What I can build for you.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs text-muted">{offer.tag}</p>
              <h2 className="mt-3 text-xl font-semibold">{offer.title}</h2>
              <p className="mt-3 text-muted">{offer.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="font-mono text-accent">&gt;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; how I work</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-border p-5"
            >
              <p className="font-mono text-xs text-accent">0{index + 1}</p>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
        >
          Start a project
        </Link>
      </section>
    </main>
  );
}