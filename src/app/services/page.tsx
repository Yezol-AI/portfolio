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
      width="12"
      height="12"
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

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
          &gt; services
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          What I can build for you.
        </h1>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="glass glass-hover relative overflow-hidden rounded-3xl p-8"
            >
              <div
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="font-mono text-xs text-accent-2">{offer.tag}</p>
                <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
                  {offer.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {offer.text}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {offer.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent-2">
                        <CheckIcon />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
          &gt; how I work
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Four simple steps.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="glass rounded-3xl p-6">
              <p className="font-display text-4xl font-semibold text-white/15">
                0{index + 1}
              </p>
              <h3 className="mt-6 font-display text-xl font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="glass relative mt-16 overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
              Ready to start?
            </h2>
            <Link href="/contact" className="btn-primary pr-2!">
              Start a project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}