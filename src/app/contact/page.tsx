import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact | Shah",
  description: "Tell me about your website or mobile app project.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        width="narrow"
        eyebrow="contact"
        title="Let's talk about your project."
        description="Tell me what you want to build. Send me a message and I'll get back to you."
      />

      <section className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6">
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}