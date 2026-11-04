# Abenezer Teshome — Portfolio

A lightweight, static-first portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Portfolio content is stored in TypeScript data files; no database, background worker, or external runtime service is required.

## Requirements

- Node.js 22.x
- npm

The `.nvmrc` file selects Node 22 in supported local environments. `package.json` also declares Node 22 for hosting platforms.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build and local run

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The build statically generates the homepage, CV, project details, sitemap, and robots file, then prepares a minimal Next.js standalone server. `npm start` binds to `0.0.0.0` and uses `PORT` when provided (otherwise port 3000). Static assets are copied alongside the standalone server for local production testing.

## Deploy to EthioDeploy

1. Push this repository to GitHub.
2. Sign in to [EthioDeploy](https://ethiodeploy.com) with GitHub and install its GitHub App for this repository.
3. In the EthioDeploy dashboard, create a **Web Service** from the repository. Do not select a Background Worker.
4. Let the platform detect the Next.js application and deploy the default branch. The project uses Node 22, `npm run build`, and standalone output; no Dockerfile, database, or custom build infrastructure is needed.
5. After EthioDeploy assigns the free `https://<project-slug>.ethiodeploy.app` URL, add `NEXT_PUBLIC_SITE_URL` in the project’s environment settings with that exact HTTPS URL, then redeploy. This is needed so the statically generated canonical links, sitemap, Open Graph URLs, and structured data use the real host. A custom domain is not required.
6. Open the deployed site and verify `/`, `/cv`, a project detail page, `/robots.txt`, and `/sitemap.xml`. Subsequent pushes to the connected default branch trigger new deployments.

Environment variables are configured in the hosting dashboard, not committed to the repository. `NEXT_PUBLIC_SITE_URL` is a public canonical URL, not a secret, and must be present at build time because the pages are prerendered. Never place credentials or private keys in `NEXT_PUBLIC_*` variables.

See EthioDeploy’s [getting started guide](https://ethiodeploy.com/docs/getting-started), [Next.js deployment guide](https://ethiodeploy.com/deploy/nextjs), and [environment variable documentation](https://ethiodeploy.com/docs/env-vars) for current dashboard and platform details.

## Move to Vercel or another Next.js host

The project uses standard Next.js build output and `output: "standalone"`. Vercel supports the Next.js app directly. Other Node-based Next.js hosts can run the standard build/start commands or the generated `.next/standalone/server.js`; configure `NEXT_PUBLIC_SITE_URL` to that deployment’s public HTTPS origin before building. No EthioDeploy-only services or APIs are used by the app.

## Updating portfolio content

Edit `src/data/portfolio.ts` for profile, skills, experience, education, and contact details. Edit `src/data/projects.ts` to update projects and their public summaries.

The contact form opens a prefilled email draft; it does not pretend to submit to a server. The CV page is printable and can be saved as a PDF from the browser print dialog. Replace this print-ready version with an approved CV PDF when one is available.

## Content and assets

The portfolio uses original CSS project illustrations and an initials-based visual identity. No personal portrait, project screenshots, CV PDF, or per-project public repository/demo URLs were included, so none are fabricated. Private and in-development project descriptions are kept to confirmed, public-safe details. Place approved static assets in `public/` when available.

## Hosting footprint

All current pages are statically generated during the build and served by the lightweight standalone Next.js web process. There are no request-time data fetches, database connections, queues, scheduled jobs, or background workers. EthioDeploy Free sleeps the web service when idle; it wakes on the next request.
