# Core Panini — Agent Notes

Premium marketing website for **Core Panini**, an IT consultancy of senior
technology specialists. Built to feel like Stripe / Linear / Apple — pure
monochrome, dark-primary, spacious, executive-level copy.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` tokens, no `tailwind.config`)
- **Framer Motion** (animations, reduced-motion aware)
- **lucide-react** (icons) + custom brand SVGs
- **next/font** (Inter + JetBrains Mono)
- Images: dynamic `ImageResponse` for OG/icon — no raster assets

## Commands

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build (also type-checks)
npm run start    # serve production build
npm run lint     # eslint
npx tsc --noEmit # type-check only
```

Always run `npm run lint` and `npm run build` before considering work done.
Both must exit clean.

## Structure

```
src/
  app/                      # App Router pages (route per file)
    layout.tsx              # root: fonts, metadata, JSON-LD, Navbar/Footer
    template.tsx            # route fade transition
    globals.css             # @theme tokens + base + utilities
    page.tsx                # Home
    industries/             # Industries (10)
    case-studies/ + [slug]/ # index + dynamic (SSG)
    team/                   # leadership + 10 domains (client filter)
    about/                  # mission/vision/values/principles/philosophy
    contact/                # form + offices + map + FAQ
    careers/ insights/ + [slug]/ partners/ faq/
    sitemap.ts robots.ts opengraph-image.tsx icon.tsx not-found.tsx
  components/
    ui/                     # primitives: button, card, container, reveal,
                             # section-heading, accordion, tabs, marquee,
                             # testimonial-card, case-study-card, team-card,
                             # animated-counter, page-hero, newsletter-form,
                             # contact-form, icons
    sections/               # home + page section compositions
    navbar.tsx footer.tsx logo.tsx final-cta.tsx skip-link.tsx
  lib/
    content/                # ALL copy/data lives here (typed modules)
    motion.ts utils.ts
```

## Conventions

- **All copy is data.** Edit `src/lib/content/*` — never hardcode marketing
  text inside components. Pages stay thin and read from content modules.
- **Design tokens** are in `globals.css` `@theme`. Color utilities derive as
  `bg-bg`, `bg-surface`, `text-ink`, `text-ink-2/3/4`, `border-line`,
  `bg-paper`, `text-ink-inv`, etc. Do not introduce hex values in components.
- **Monochrome only.** No accent colors. Black / white / gray. Light
  ("paper") sections are used sparingly for contrast moments.
- **Typography:** `.display` `.h1` `.h2` `.h3` `.lead` `.eyebrow` `.mono`
  utility classes are defined in `globals.css`. Use them for consistency.
- **Animation:** use `<Reveal>` / `<StaggerGroup>` / `<StaggerItem>` from
  `components/ui/reveal`. They honor `prefers-reduced-motion`. Variants in
  `lib/motion.ts`. Never block content behind motion (reveal fades in
  content; reduced-motion shows it instantly).
- **Accessibility:** semantic landmarks, skip link, focus-visible rings,
  aria-expanded on toggles, labelled form fields, AA-contrast text colors.
  Do not regress these.
- **Links:** use `next/link` via `<Button href>` or `<Link>`. External links
  pass `external`.
- **No comments** in code unless asked.

## Content modules (`lib/content/`)

`site.ts` (nav, offices, socials, footer) · `services.ts` (18 disciplines,
grouped) · `industries.ts` (10, with challenges/solutions/outcomes/metric) ·
`caseStudies.ts` (6, with results/impact/ROI) · `team.ts` (leadership + 10
domains) · `values.ts` · `testimonials.ts` · `metrics.ts` · `insights.ts`
(6 articles) · `partners.ts` · `faq.ts` · `careers.ts`.

## SEO

Per-page `metadata` (title template, description, OG, canonical). JSON-LD
for Organization + WebSite (root) and Article (case studies / insights).
`sitemap.ts` + `robots.ts` + dynamic OG image + icon.

## npm notes (this environment)

- Global `~/.npm` cache had a permission issue; cache is redirected to
  `/tmp/core-panini-npm-cache` (set via `npm config set cache`).
- `allow-scripts` is restricted globally; `sharp` and `unrs-resolver` are
  approved in `package.json` `allowScripts`.
