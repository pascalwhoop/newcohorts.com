# Plan: Migrate Icons from Iconify to Lucide Astro

Replace failing Iconify icons with Lucide Astro components for better reliability and consistency.

## Tasks

- [x] Install Lucide Astro package

  > **Bash** `cd website/newcohorts-site && npm install @lucide/astro` Successfully installed
  > @lucide/astro package

- [x] Remove Iconify script from index.astro

  > **Edit** Removed Iconify CDN script tag from
  > [website/newcohorts-site/src/pages/index.astro](../website/newcohorts-site/src/pages/index.astro)

- [x] Add Lucide imports to index.astro

  > **Edit** Added imports:
  > `import { Home, Users, Coffee, Calendar, Check, Star, Play } from '@lucide/astro'`

- [x] Replace all icons with Lucide components

  > **Edit** Replaced 7 icon instances throughout
  > [website/newcohorts-site/src/pages/index.astro](../website/newcohorts-site/src/pages/index.astro):
  >
  > - Hero section: Home icon
  > - Program sections: Users, Coffee, Calendar icons
  > - Who It's For: Check icons
  > - Testimonial: Star icon
  > - Founders: Play icon

- [x] Install Tessl registry dependencies

  > **MCP** `tessl install`
  >
  > - tessl/npm-astro@5.13.0
  > - tessl/npm-astrojs--tailwind@6.0.0
  > - tessl/npm-lucide-react@0.542.0

- [x] Update spec to reflect Lucide icons
  > **Edit** Updated [specs/pages/index.spec.md](../specs/pages/index.spec.md) dependencies section:
  >
  > - Removed Iconify references
  > - Added Lucide Astro with specific icon names
  > - Updated dependency link to @lucide/astro
