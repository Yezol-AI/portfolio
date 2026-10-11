import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Shah",
  description: "Tell me about your website or mobile app project.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; contact</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s talk about your project.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
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