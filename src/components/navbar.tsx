"use client";

import {
  useState,
  useRef,
  useEffect,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav } from "@/lib/content/site";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onMegaEnter = (label: string | null) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(label);
  };
  const onMegaLeave = () => {
    closeTimer.current = setTimeout(() => setMega(null), 120);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-w flex h-16 items-center justify-between md:h-18">
        <Logo />

        <ul className="hidden md:flex items-center gap-1" onMouseLeave={onMegaLeave}>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li
                key={item.label}
                onMouseEnter={() => onMegaEnter(item.children ? item.label : null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex h-10 items-center rounded-full px-3.5 text-sm font-medium transition-colors",
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && mega === item.label && (
                  <MegaMenu item={item} />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button href="/contact" size="sm" withArrow>
            Start a conversation
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && <MobileNav onNavigate={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({ item }: { item: (typeof nav)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 top-full pt-3"
    >
      <div className="w-[520px] rounded-2xl border border-line bg-surface/95 backdrop-blur-xl p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-2 gap-1">
          {item.children?.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group rounded-xl p-3 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ink">{c.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-ink-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              {c.description && (
                <p className="mt-1 text-xs text-ink-3 leading-relaxed">
                  {c.description}
                </p>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-1 flex items-center justify-between border-t border-line px-3 py-2.5">
          <span className="text-xs text-ink-3 mono">All expertise</span>
          <Link
            href="/#expertise"
            className="text-xs font-medium text-ink inline-flex items-center gap-1 hover:gap-1.5 transition-all"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="md:hidden overflow-hidden border-t border-line bg-bg"
    >
      <div className="container-c flex flex-col gap-1 py-6">
        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className="flex items-center justify-between rounded-xl px-3 py-3.5 text-lg font-medium text-ink-2 hover:text-ink hover:bg-surface transition-colors"
          >
            {item.label}
            <ArrowRight className="h-4 w-4 text-ink-3" />
          </Link>
        ))}
        <div className="mt-3">
          <Button href="/contact" className="w-full" onClick={onNavigate} withArrow>
            Start a conversation
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
