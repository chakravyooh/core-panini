"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  }

  return (
    <div className={cn("w-full max-w-sm", className)}>
      {done ? (
        <p className="inline-flex items-center gap-2 text-sm text-ink-2">
          <Check className="h-4 w-4 text-ink" />
          Subscribed. We send rarely and only what is worth reading.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="group">
          <label htmlFor="nl-email" className="eyebrow">
            Newsletter
          </label>
          <div className="mt-3 flex items-center gap-2 rounded-full border border-line-strong bg-surface pl-4 pr-1.5 py-1.5 transition-colors focus-within:border-line-bright">
            <input
              id="nl-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-4 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-transform group-hover:translate-x-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-xs text-ink-4">
            Monthly insights on engineering, AI, and architecture.
          </p>
        </form>
      )}
    </div>
  );
}
