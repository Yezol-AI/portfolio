import type { CSSProperties, ReactNode } from "react";
import FloatingOrbs from "@/components/motion/FloatingOrbs";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  width?: "default" | "narrow";
};

const delay = (ms: number) =>
  ({ "--nf-delay": `${ms}ms` }) as CSSProperties;

export default function PageHeader({
  eyebrow,
  title,
  description,
  width = "default",
}: PageHeaderProps) {
  return (
    <header className="relative isolate">
      <FloatingOrbs className="mask-[linear-gradient(to_bottom,#000_55%,transparent)]" />

      <div
        className={`mx-auto px-4 pt-16 sm:px-6 sm:pt-24 ${
          width === "narrow" ? "max-w-3xl" : "max-w-6xl"
        }`}
      >
        <p
          className="nf-rise font-mono text-xs uppercase tracking-widest text-accent-2"
          style={delay(0)}
        >
          &gt; {eyebrow}
        </p>
        <h1
          className="nf-rise mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          style={delay(120)}
        >
          {title}
        </h1>
        {description && (
          <p
            className="nf-rise mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={delay(260)}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}