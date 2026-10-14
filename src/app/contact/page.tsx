import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Shah",
  description: "Tell me about your website or mobile app project.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
          &gt; contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s talk about your project.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Tell me what you want to build. Send me a message and I&apos;ll get
          back to you.
        </p>

        <div className="mt-12">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}