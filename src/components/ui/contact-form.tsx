"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content/site";

const interests = [
  "Technology Strategy",
  "AI Engineering",
  "Cloud & Platform",
  "Product Engineering",
  "Cyber Security",
  "CTO Advisory",
  "Team Augmentation",
  "Something else",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: interests[0],
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name || "Website"} — ${form.interest}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nInterest: ${form.interest}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-10">
        <div className="inline-flex items-center gap-2 text-ink">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-bg">
            <Check className="h-4 w-4" />
          </span>
          <span className="text-lg font-semibold">Your email client should have opened.</span>
        </div>
        <p className="mt-4 text-ink-2 leading-relaxed">
          If not, write to us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
            {site.email}
          </a>
          . We reply to every inquiry within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-ink-3 hover:text-ink mono"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-7 md:p-9">
      <div className="grid gap-5">
        <Field label="Full name">
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            className={inputCls}
          />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Work email">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@company.com"
              className={inputCls}
            />
          </Field>
          <Field label="Company">
            <input
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder="Acme Corp"
              className={inputCls}
            />
          </Field>
        </div>
        <Field label="What can we help with?">
          <div className="relative">
            <select
              value={form.interest}
              onChange={(e) => update("interest", e.target.value)}
              className={cn(inputCls, "appearance-none cursor-pointer pr-10")}
            >
              {interests.map((i) => (
                <option key={i} value={i} className="bg-surface">
                  {i}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          </div>
        </Field>
        <Field label="Message">
          <textarea
            required
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={5}
            placeholder="A few sentences on the problem you're solving."
            className={cn(inputCls, "resize-none py-3.5")}
          />
        </Field>
        <button
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-bg text-sm font-medium transition-transform hover:-translate-y-0.5"
        >
          Send inquiry
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-xs text-ink-4">
          By submitting, you agree to be contacted about your inquiry. We do not share your details.
        </p>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-4 outline-none transition-colors focus:border-line-bright";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}
