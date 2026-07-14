"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bg hover:bg-ink/90 hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(255,255,255,0)]",
  secondary:
    "border border-line-strong text-ink hover:border-line-bright hover:bg-surface-2",
  ghost: "text-ink-2 hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, ...rest } =
      props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(classes, "group")}
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={cn(classes, "group")} {...rest}>
      {content}
    </button>
  );
}
