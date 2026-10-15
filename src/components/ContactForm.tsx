"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-muted focus:border-accent-2 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.18),0_0_30px_-8px_rgba(139,92,246,0.45)]";

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
      className="glass space-y-5 rounded-3xl p-6 sm:p-8"
    >
      <div>
        <label htmlFor="name" className="font-mono text-xs text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="type" className="font-mono text-xs text-muted">
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
        <label htmlFor="message" className="font-mono text-xs text-muted">
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
        className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" && (
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
          />
        )}
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="nf-rise flex items-center gap-2 font-mono text-sm text-emerald-400">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
              <svg
                width="11"
                height="11"
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
            </span>
            Message sent. Thank you, I will reply by email.
          </p>
        )}
        {status === "error" && (
          <p className="nf-rise font-mono text-sm text-red-400">
            Something went wrong and your message was not sent. Please try
            again or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}