import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container variant="c" className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="h1 mt-6 max-w-xl">
        This page took a wrong turn.
      </h1>
      <p className="lead mx-auto mt-6 max-w-md">
        The page you are looking for does not exist or has moved. Let us get you back.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button href="/" withArrow>Back to home</Button>
        <Button href="/contact" variant="secondary">Contact us</Button>
      </div>
      <Link
        href="/case-studies"
        className="mt-10 text-sm text-ink-3 hover:text-ink mono"
      >
        Or browse our case studies →
      </Link>
    </Container>
  );
}
