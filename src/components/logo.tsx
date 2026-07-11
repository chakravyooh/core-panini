import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content/site";

export function Logo({
  className,
  withMark = true,
}: {
  className?: string;
  withMark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      {withMark && (
        <span className="relative inline-flex h-7 w-7 items-center justify-center">
          <svg
            viewBox="0 0 28 28"
            className="h-7 w-7 text-ink transition-transform duration-500 group-hover:rotate-90"
            aria-hidden
          >
            <rect x="2" y="2" width="24" height="24" rx="7" fill="currentColor" />
            <path
              d="M9 19V9h5.2c2 0 3.4 1.2 3.4 3 0 1.3-.8 2.3-2 2.7l2.8 4.3h-2.6l-2.6-4.1H11.2V19H9zm2.2-6h2.8c.9 0 1.5-.5 1.5-1.3s-.6-1.3-1.5-1.3h-2.8v2.6z"
              fill="#000"
            />
          </svg>
        </span>
      )}
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        {site.name}
      </span>
    </Link>
  );
}
