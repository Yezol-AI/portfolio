"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="type" className="font-mono text-sm text-muted">
          What do you need?
        </label>
        <select id="type" name="type" defaultValue="website" className={fieldClass}>
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
          placeholder="What do you want to build?"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
      >
        Send message
      </button>

      {submitted && (
        <p className="font-mono text-sm text-accent-2">
          Preview only: sending is not connected yet, so nothing was sent.
        </p>
      )}
    </form>
  );
}