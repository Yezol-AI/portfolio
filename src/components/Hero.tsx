import Link from "next/link";

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

const stack = ["Next.js", "React Native", "Supabase", "Tailwind"];

export default function Hero() {
  return (
    <section className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-20 pt-24 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-24">
      {/* Left: text */}
      <div>
        <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for freelance work
        </div>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          I build fast, modern{" "}
          <span className="text-accent-2">websites</span> and{" "}
          <span className="text-accent">mobile apps</span>.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Freelance developer helping businesses and creators get online with
          clean design, solid code, and apps that work on every screen.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary !pr-2">
            Hire me
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <ArrowIcon />
            </span>
          </Link>
          <Link href="/projects" className="btn-ghost">
            View projects
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
          {stack.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: visual */}
      <div
        className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[480px]"
        aria-hidden="true"
      >
        <div className="absolute inset-8 rounded-full bg-accent/30 blur-3xl" />

        {/* Browser frame */}
        <div className="glass float-slow absolute left-0 right-8 top-6 overflow-hidden rounded-3xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 h-5 flex-1 rounded-full bg-white/5 px-3 text-[10px] leading-5 text-muted">
              yourbusiness.com
            </span>
          </div>
          <div className="space-y-3 p-4">
            <div className="h-24 rounded-2xl bg-linear-to-br from-accent/50 to-accent-2/10" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-xl bg-white/5" />
              <div className="h-16 rounded-xl bg-white/5" />
              <div className="h-16 rounded-xl bg-white/5" />
            </div>
            <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/5" />
          </div>
        </div>

        {/* Phone */}
        <div className="glass float-slower absolute bottom-0 right-0 w-[150px] rounded-[2rem] p-2.5">
          <div className="rounded-[1.5rem] bg-background/80 p-3">
            <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/15" />
            <div className="mb-2 h-3 w-16 rounded-full bg-white/20" />
            <div className="space-y-2">
              <div className="h-10 rounded-xl bg-white/5" />
              <div className="h-10 rounded-xl bg-white/5" />
              <div className="h-10 rounded-xl bg-white/5" />
            </div>
            <div className="mt-3 h-8 rounded-full bg-accent" />
          </div>
        </div>

        {/* Floating chips */}
        <div className="glass float-slower absolute right-2 top-0 rotate-6 rounded-2xl px-3 py-2 font-mono text-xs">
          Next.js
        </div>
        <div className="glass float-slow absolute bottom-12 left-2 -rotate-6 rounded-2xl px-3 py-2 font-mono text-xs">
          Supabase
        </div>
      </div>
    </section>
  );
}