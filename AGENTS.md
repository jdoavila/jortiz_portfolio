# Repository Guidelines

## Project Structure & Module Organization
The site runs on Next.js 14. `pages/` holds route components and API stubs; `_app.js` wires global styles from `styles/globals.css`. Reusable UI lives in `components/` (e.g., `navbar.js`, `banner.js`), with default exports named in PascalCase. Marketing visuals and case-study imagery sit in `designs/`. Static favicons and fonts belong in `public/`. Tailwind is configured in `tailwind.config.js`, and the `@` import alias resolves relative to repo root via `jsconfig.json`.

## Build, Test, and Development Commands
Use `npm run dev` for the local server at http://localhost:3000. `npm run build` creates the optimized production bundle, and `npm run start` serves that bundle. Run `npm run lint` before every commit; it executes `next lint` with the project ESLint rules.

## Coding Style & Naming Conventions
Keep components functional, organized by feature, and export them in PascalCase even when filenames use snake_case. Stick to 2-space indentation, double quotes in JSX/JS, and semicolons—match the existing files. Tailwind utility ordering is enforced by `prettier-plugin-tailwindcss`; format with `npx prettier --write .` when touching multiple files. Place shared layout or typography tweaks in `styles/main.css`, leaving `globals.css` for framework-level resets.

## Testing Guidelines
Automated tests are not yet configured. When adding coverage, favor Jest with React Testing Library or Playwright, storing specs beside the component (`components/banner.test.js`) or under `__tests__/`. Until then, document manual checks—desktop, tablet, mobile breakpoints, and analytics scripts—inside the PR description.

## Commit & Pull Request Guidelines
Recent history mixes Spanish and English and occasionally uses Conventional Commit prefixes (`fix:`). New commits should follow `type: short imperative`, e.g., `feat: add project timeline`. Group related changes, reference an issue ID when available, and avoid bundling formatting-only edits with feature work. PRs need a crisp summary, screenshots or GIFs for visible changes, and verification notes for lint/build status. Request review before merging and wait for checks to pass.

## Design Assets & Configuration
Keep source artwork in `designs/`; optimize exported images before moving into `public/` to reduce bundle size. Update analytics or speed-insights tokens through environment variables rather than hardcoding them in components.
