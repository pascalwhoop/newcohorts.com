# New Cohorts Website

The official website for New Cohorts - a 6-week friendship program for people building their
Amsterdam community.

## Design Approach

**Minimal Linktree-style landing page** with a hero background image, centered profile card, and
link buttons for key actions:

- **Homepage**: Clean, focused linktree-inspired design with call-to-action buttons for signup,
  about page, Instagram, and LinkedIn
- **About Page**: Simple prose documentation explaining the program, founders, eligibility, and
  6-week structure
- **Color Theme**: Warm, minimalist aesthetic using matcha green, sage, and cream accents
- **Social Integration**: Direct links to Instagram and LinkedIn with signup CTA

## Features

- **Astro 5** - Fast, modern static site generation
- **Tailwind CSS 4** - Utility-first styling with custom theme colors
- **Lucide Icons** - Beautiful, consistent icon library
- **Responsive Design** - Mobile-first approach works on all devices
- **Markdown Content** - About page rendered from markdown with prose styling
- **Google Analytics 4** - Event tracking for CTA clicks

## Tech Stack

- **Framework**: Astro 5.14.7
- **Styling**: Tailwind CSS 4.1.15 + @tailwindcss/typography
- **Icons**: Lucide React 0.546
- **Content**: Markdown with Astro Content Collections
- **Animation**: Motion library for smooth interactions
- **Utilities**: clsx, class-variance-authority, tailwind-merge

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

## Building

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── pages/
│   ├── index.astro           # Linktree-style landing page
│   └── about.astro           # About page with prose content
├── content/
│   └── about/
│       └── about.md          # About content (program, founders, eligibility)
├── components/
│   ├── AceternityNavbar.tsx   # Floating navbar for about page
│   ├── MarkdownRenderer.jsx   # Renders markdown content
│   └── ui/
└── layouts/
    └── Layout.astro          # Main layout wrapper
styles/
├── global.css                # Global styles and theme configuration
```

## Content

### Homepage

- Centered profile section with logo and tagline
- Primary CTA: "Join the Next Cohort" (links to Tally signup form)
- Secondary CTAs: About page, Instagram, LinkedIn
- Inspirational quote at the bottom
- Background image with dark overlay for readability

### About Page

- **What is New Cohorts**: Program overview and unique value proposition
- **Program Structure**: Saturday organized events + Thursday peer events
- **Key Features**: Same group, curated activities, weekly commitment
- **Meet the Founders**: Story of Pascal and Patrick
- **Who is This For**: Eligibility criteria (relocated <3 months, ages 25-35, able to commit)
- **The 6-week Program**: Detailed breakdown of each week with activities
- **Program Details**: Pricing (€120), schedule, and cohort size (12 people)

## Customization

### Update CTA Links

- Edit the Tally form URL in `src/pages/index.astro` (line 63)
- Update Instagram URL (line 82)
- Update LinkedIn URL (line 93)

### Change Colors

- Primary colors defined in `src/styles/global.css`:
  - `--color-matcha`: #6B8E6B (primary green)
  - `--color-sage`: #8FA68E (secondary green)
  - `--color-cream`: #F5F1ED (accent/text)
- Used via Tailwind classes: `bg-matcha`, `text-cream`, `border-sage`

### Modify Background Image

- Homepage background URL in `src/pages/index.astro` (line 41)
- Adjust overlay opacity (currently `bg-black/60`)

### Update About Content

- Edit `src/content/about/about.md` directly
- Content is automatically rendered via markdown collection

### Analytics Setup

- Update Google Analytics ID in `src/pages/index.astro` (lines 16, 22)
- CTA clicks are tracked with event data

## Deployment

The site is static HTML/CSS/JS and can be deployed to any static hosting:

- **Netlify**: Connect your GitHub repo, build command: `npm run build`
- **Vercel**: Same setup, automatically detects Astro
- **GitHub Pages**: Build and deploy via GitHub Actions
- **Any HTTP server**: Deploy the `dist/` folder

## Design System

See `/knowledge-base/DESIGN_SYSTEM.md` for detailed color palette, typography, spacing, and
component guidelines.

## Support

For questions or updates to the website, contact the team.
