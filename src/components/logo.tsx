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
              d="M18 9H11.5Q10 9 10 10.5V17.5Q10 19 11.5 19H18V16.5H14Q12.5 16.5 12.5 15V13Q12.5 11.5 14 11.5H18V9Z"
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
