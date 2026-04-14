# AGENTS.md

- This is a single Next.js app. Start with `src/app/page.tsx` for page flow and `src/app/layout.tsx` for global SEO, fonts, and theme setup.
- Shared UI lives in `src/components`; the `@/*` alias maps to `src/*`.
- Use the npm scripts in `package.json`:
  - `npm run dev`
  - `npm run build`
  - `npm run start`
  - `npm run lint` (`biome check`)
  - `npm run format` (`biome format --write`)
- There is no repo-defined `test` or `typecheck` script. If you need a direct TypeScript check, use `npx tsc --noEmit`.
- Biome is the formatter/linter. Keep 2-space indentation and let Biome organize imports.
- `next.config.ts` removes `console.*` in production, so do not rely on logs for runtime behavior.
- The theme system is wired through `ThemeProvider` in `src/app/layout.tsx` and `ThemeToggle` in `src/components/ui/ThemeToggle.tsx`; preserve `attribute="class"`, `enableSystem`, `defaultTheme="system"`, and `suppressHydrationWarning` when touching dark mode.
- In-page footer links depend on section IDs such as `#services`, `#portfolio`, and `#team`; keep anchors and IDs in sync.
- `src/app/layout.tsx` references `/og-image.png`, canonical metadata, and social metadata. Update those together when changing branding or SEO.
- `src/app/sitemap.ts` still contains placeholder URLs (`https://seusite.com`); fix it if you touch sitemap or canonical URLs.
- User-facing copy is PT-BR; keep language and tone consistent unless translation is intentional.
