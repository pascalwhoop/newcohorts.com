# New Cohorts Design System

## Overview

Our design language is **minimal and focused**, inspired by linktree-style landing pages. The
aesthetic emphasizes clarity, direct calls-to-action, and a warm, welcoming presence. The design
prioritizes user intent through a clean information hierarchy and high-contrast interactive
elements.

## Design Philosophy

- **Minimal & Focused**: Avoid unnecessary decoration, keep the user journey clear
- **Warm & Welcoming**: The matcha and sage color palette creates a coffee shop vibe
- **Direct CTAs**: Large, prominent action buttons guide users clearly
- **Dark Landing Page**: High-contrast dark background with overlays for legibility
- **Light About Page**: Clean white background with warm prose typography

## Color Palette

### Primary Colors

- **Earthy Matcha** `#6B8E6B` - Primary brand color, muted green inspired by matcha latte
- **Warm Sage** `#8FA68E` - Secondary color for subtle accents and borders
- **Cream** `#F5F1ED` - Primary text on dark backgrounds, accent on light backgrounds

### Neutral Colors

- **White** `#FFFFFF` - About page background, creating clean contrast
- **Charcoal** `#3A3A3A` - Primary text color on light backgrounds
- **Muted Gray** `#6B6B6B` - Secondary text color for body copy

### Usage

**Homepage (Dark Theme)**:

- Background: Dark image with `bg-black/60` overlay for readability
- Text: White (`text-white`) for high contrast
- Buttons: Gradient from matcha to sage with cream text
- Accents: White with transparency (`bg-white/10`, `border-white/20`) for secondary buttons

**About Page (Light Theme)**:

- Background: Pure white
- Text: Charcoal for headings, muted gray for body
- Accents: Matcha green for borders and highlights

## Typography

### Font Stack

- **Primary**: Inter (clean, modern, highly readable)
- **Fallback**: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Loaded from**: Google Fonts API

### Type Scale

- **Hero (H1)**: 2.5rem - Page titles, large headings
- **Section (H2)**: 2rem - Section headers
- **Subsection (H3)**: 1.875rem - Subsection headers
- **Body Large**: 1.125rem - Emphasized body text
- **Body**: 1rem - Standard body text
- **Small**: 0.875rem - Captions and metadata

### Typography Principles

- Generous line height (1.6-1.8) for readability
- Comfortable letter spacing for headlines
- Use font weight strategically (400 regular, 500 medium, 600 semibold)
- High contrast on dark backgrounds for accessibility

## Component Specifications

### Homepage Landing Page

**Layout**:

- Centered content container (max-width: 28rem / 448px)
- Full-height viewport with flex centering
- Padding: 1.5rem on mobile, adjusted for larger screens

**Profile Section**:

- Circular logo badge: 96px × 96px
- Background: `bg-matcha/90` with backdrop blur
- Shadow: `shadow-lg` for depth
- Icon color: Cream (#F5F1ED)
- Tagline text: Small, gray (text-gray-200)

**Link Buttons**:

- Full width within container
- Padding: 1rem vertical, 1.5rem horizontal
- Border radius: 12px (`rounded-xl`)
- Spacing between buttons: 1rem gap

**Primary CTA Button** ("Join the Next Cohort"):

- Background: Linear gradient from matcha to sage
- Text: Cream color, bold (font-semibold)
- Border: Subtle matcha border with transparency
- Hover: Reduced opacity on gradient + scale up (1.05x) + enhanced shadow
- Font size: 1.125rem (18px)
- Transition: 300ms all ease

**Secondary Buttons** (About, Instagram, LinkedIn):

- Background: White with low transparency (`bg-white/10`)
- Border: White with low transparency (`border-white/20`)
- Text: White, medium weight (font-medium)
- Hover: Increased background opacity (`bg-white/20`)
- Icons: Lucide icons (20px) with 0.75rem gap from text
- Transition: 300ms all ease

**Quote Section**:

- Background: White with transparency and backdrop blur
- Border: White with low transparency
- Text: Gray italic, small font
- Padding: 1.5rem
- Border radius: 12px
- Shadow: `shadow-lg`

### About Page

**Layout**:

- Maximum width: 56rem (896px)
- Centered with responsive padding
- Prose typography styling via @tailwindcss/typography

**Navigation**:

- Floating navbar (AceternityNavbar component)
- Fixed positioning, doesn't interfere with content
- Back button to return to homepage

**Content**:

- Use markdown headers for hierarchy
- Generous vertical spacing between sections
- Prose classes for optimal typography
- List items properly styled

## Spacing System

### Base Unit: 4px

- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)

### Responsive Padding

- **Mobile**: 1.5rem (`px-6`)
- **Tablet/Desktop**: 1.5rem with max-width container

## Animation & Interaction

### Micro-interactions

- **Button Hover**: Scale to 1.05x, shadow increase
- **Opacity Changes**: 200ms ease-in-out transitions
- **Color Transitions**: 300ms ease for smooth color changes

### Transitions

- All interactive elements: 300ms transition on hover
- Disabled `pointer-events` during animations to prevent double-clicks
- Use CSS `transition-all` for smooth multi-property changes

## Accessibility

### Color Contrast

- Matcha on cream: High contrast for accessibility
- White text on dark background: Excellent contrast
- Charcoal on white: High contrast for readability
- All buttons meet WCAG AA standards

### Interactive Elements

- Clear focus states on buttons
- Sufficient padding for touch targets (minimum 44px)
- Semantic HTML for screen reader compatibility
- `aria-label` attributes on icon-only links

### Typography

- Minimum 16px font size for body text
- Generous line height (1.6-1.8)
- Clear visual hierarchy via font sizes
- Sufficient color contrast ratios

## Dark Mode Strategy

### Homepage

- **Dark-first design**: Image with overlay creates the dark theme
- High contrast white text on dark background
- Light transparency overlays for secondary buttons
- Matcha and sage gradients for primary CTA

### About Page

- **Light-first design**: Clean white background
- Dark charcoal text for readability
- Matcha accents for brand consistency

## Implementation

### Tailwind Configuration

Custom colors in `src/styles/global.css`:

```css
@theme {
  --color-matcha: #6b8e6b;
  --color-sage: #8fa68e;
  --color-cream: #f5f1ed;
  --color-white: #ffffff;
  --color-charcoal: #3a3a3a;
  --color-gray: #6b6b6b;
}
```

### Responsive Design

- **Mobile-first approach**: Design for mobile, enhance for desktop
- **Key breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Container queries**: Used where appropriate for component-level responsiveness

### Performance

- CSS is minified in production
- Images use srcset for responsive loading
- No unnecessary animations on mobile
- Backdrop blur used with fallback support

## Component Library

### Available Components

- **AceternityNavbar**: Floating navigation bar for internal navigation
- **MarkdownRenderer**: Renders markdown content with proper styling
- **Lucide Icons**: 546+ SVG icons available via lucide-react/lucide-astro

### Button States

- **Default**: Base styling with color and border
- **Hover**: Opacity/color change, scale, shadow increase
- **Focus**: Visible focus ring for keyboard navigation
- **Active**: Pressed state styling

## Design Tokens

The design system uses CSS custom properties for consistency:

- `--color-matcha`: #6B8E6B
- `--color-sage`: #8FA68E
- `--color-cream`: #F5F1ED
- `--radius`: 0.625rem (10px)
- `--font-family-sans`: Inter

## Brand Integration

This design system supports the New Cohorts brand:

- **Warm & Welcoming**: Through color palette (matcha, sage, cream)
- **Minimal & Focused**: Through clean layout and direct CTAs
- **Modern & Professional**: Through typography (Inter) and spacing
- **Accessible**: Through contrast ratios and clear interaction states
