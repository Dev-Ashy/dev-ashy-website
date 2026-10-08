<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dev-Ashy Website

## Commands

```bash
npm run dev          # Dev server (port 3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npx playwright test  # Run E2E tests + screenshots
```

## Architecture

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Language:** TypeScript (strict)
- **Deployment:** Vercel (standalone output)
- **Path alias:** `@/*` → `./src/*`

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout (fonts, metadata)
│   ├── page.tsx        # Homepage (composes all sections)
│   ├── globals.css     # Tailwind + custom utilities
│   ├── sitemap.ts      # SEO sitemap
│   └── os/page.tsx     # Dev-Ashy OS download page
├── components/         # Section components (Header, Hero, Features, etc.)
public/
└── images/             # 4K images (Unsplash, optimized)
```

## Design System

- **Background:** #0a0a0f
- **Surface:** #12121a
- **Primary:** #6366f1 (indigo)
- **Accent:** #22d3ee (cyan)
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Brand:** "Build Beyond the Screen."

## Testing

- **Playwright** configured for E2E tests + screenshots
- Screenshots saved to `screenshots/`
- Responsive tests: mobile (375px), tablet (768px), desktop
- Run: `npx playwright test`

## Deployment

- **Vercel:** Auto-deploy on push to main
- **Production:** https://dev-ashy-website.vercel.app
- **GitHub:** https://github.com/Dev-Ashy/dev-ashy-website

## Conventions

- Use `next/image` for all images (optimization + lazy loading)
- Use semantic HTML (section, nav, main, footer)
- Follow WCAG 2.1 AA accessibility
- Mobile-first responsive design
- No unnecessary dependencies
