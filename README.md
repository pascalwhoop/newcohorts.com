# New Cohorts

Build lasting friendships in Amsterdam through structured 6-week cohort programs.

## About

New Cohorts is a community platform that helps relocated people in Amsterdam build meaningful,
lasting friendships through consistent group experiences. Our structured 6-week programs bring
together 20-30 people for weekly activities designed to foster genuine connections.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives
- **Forms:** React Hook Form + Zod validation
- **Database:** Notion API integration
- **Analytics:** Meta Pixel (Facebook)
- **Animations:** Framer Motion & Anime.js
- **Deployment:** Cloudflare Pages with OpenNext.js
- **Testing:** Playwright
- **Language:** TypeScript

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Notion and WhatsApp credentials. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for setup instructions.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Run tests

```bash
npm run test:e2e
```

## Deployment

1. Set environment variables in **Cloudflare Dashboard → Workers & Pages → Settings → Environment Variables**
2. Run `npm run deploy`

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment instructions
- [Vision & Mission](docs/VISION.md)
- [Business Strategy](docs/BUSINESS_DIMENSIONS.md)
- [Target Personas](docs/TARGET_PERSONAS.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Implementation Details](docs/IMPLEMENTATION.md)
