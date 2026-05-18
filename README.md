# Keishi Hirade Portfolio

Next.js portfolio site for [hiradekeishi.com](https://hiradekeishi.com/).

## Tech Stack

- Next.js App Router
- TypeScript
- Static export for GitHub Pages or any static host
- Plain global CSS through `app/globals.css`

## Local Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run typecheck
npm run build
```

The production static output is generated in `out/`.

## Project Structure

- `app/` - Next.js routes, metadata, and global styles
- `components/` - page sections and shared UI components
- `lib/portfolio.ts` - typed portfolio content
- `public/assets/` - public image assets
- `public/CNAME` - custom domain for static hosting
