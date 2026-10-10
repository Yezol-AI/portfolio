import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Shah",
  description: "Tell me about your website or mobile app project.",
};

// TODO: replace with your real email address


export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-sm text-accent">&gt; contact</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s talk about your project.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Tell me what you want to build. I&apos;ll read your message and reply
          by email.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm text-accent">&gt; email</p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-lg transition-colors hover:text-accent"
            >
              {email}
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}