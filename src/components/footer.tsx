import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { footerNav, site } from "@/lib/content/site";
import { NewsletterForm } from "@/components/ui/newsletter-form";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-w">
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ink-3">
              {site.description}
            </p>
            <NewsletterForm />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h3 className="eyebrow">{col.title}</h3>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm text-ink-2 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-3 mono">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={site.linkedin}
              className="text-xs text-ink-3 transition-colors hover:text-ink mono"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="text-xs text-ink-3 transition-colors hover:text-ink mono"
            >
              {site.email}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs text-ink-3 transition-colors hover:text-ink mono group"
            >
              Contact
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
