"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!supabase) {
      console.error("Supabase is not configured: check .env.local");
      setStatus("error");
      return;
    }

    setStatus("sending");

    const { error } = await supabase.from("contact_messages").insert({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      project_type: String(data.get("type") ?? "unsure"),
      message: String(data.get("message") ?? "").trim(),
    });

    if (error) {
      console.error("Message failed to send:", error.message);
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-border bg-surface p-6"
    >
      <div>
        <label htmlFor="name" className="font-mono text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="type" className="font-mono text-sm text-muted">
          What do you need?
        </label>
        <select
          id="type"
          name="type"
          defaultValue="website"
          className={fieldClass}
        >
          <option value="website">A website</option>
          <option value="app">A mobile app</option>
          <option value="both">Both</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-sm text-muted">
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="What do you want to build?"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="font-mono text-sm text-accent">
            Message sent. Thank you, I will reply by email.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-accent-2">
            Something went wrong and your message was not sent. Please try
            again or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}