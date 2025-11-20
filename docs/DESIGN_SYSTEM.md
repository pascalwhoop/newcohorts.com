# The Offline Cohort Design System

## Overview

We are reimagining New Cohorts with an **"Analogue First"** aesthetic. In a world of digital noise, our brand feels like a breath of fresh air—tactile, warm, and grounded. We take heavy inspiration from the "slow living" movement and brands like The Offline Club, but with our own focus on *friendship architecture*.

Our visual language borrows from **printed matter**: newspapers, index cards, stamps, and coffee table books. It feels physical, not digital.

## Design Philosophy

-   **Tactile & Physical**: Elements should feel like they have weight and texture. Use "card" metaphors, slight rotations, and soft drop shadows that mimic paper on a table.
-   **Warm & Organic**: No harsh digital neons. Colors are earth-derived: paper, ink, clay, forest.
-   **Playful & Human**: We are not a corporate SaaS. We are a group of friends. Use handwriting fonts for accents, playful interactions (hover tilts), and rounder border radii.
-   **Editorial Typography**: Headlines are treated like magazine headers. Body copy is highly readable and comfortable.

## Color Palette

### Base (The Paper)

-   **Paper White** `#F9F8F4` - Main background. Not stark white, but a warm, creamy off-white.
-   **Card White** `#FFFFFF` - For cards sitting on top of the paper background.

### Ink (The Text)

-   **Charcoal Ink** `#2C2C2C` - Primary text. Softer than pure black.
-   **Faded Ink** `#595959` - Secondary text.

### Accents (The Stamps)

-   **Forest Green** `#2D4A3E` - Primary Brand Color. (Evolution of the previous Matcha, but deeper and more "foresty").
-   **Clay Orange** `#C86B46` - Call to Action / Warmth.
-   **Sand** `#E6E2D6` - UI Borders / Dividers.

### Usage

**Landing Page**:
-   **Background**: `Paper White` (#F9F8F4).
-   **Cards**: White with `shadow-sm` and `border-sand`.
-   **Buttons**: `Forest Green` with `Paper White` text. Rounded, pill-shaped.

## Typography

### Font Stack

-   **Headings (Serif)**: `Playfair Display` or `DM Serif Display`. Elegant, editorial, "book-like".
-   **Body (Sans)**: `Inter` or `Geist`. Clean, modern, legible.
-   **Accents (Handwriting)**: `Caveat` or similar (optional) for annotations.

### Type Scale

-   **Hero (Display)**: 3.5rem - 4.5rem. Big, bold, serif.
-   **H2**: 2.5rem.
-   **H3**: 1.75rem.
-   **Body**: 1.125rem (18px). Slightly larger for comfortable reading.

## Component Specifications

### The "Physical Card"

All main content sections should live on "cards" that feel placed on the background.

-   **Background**: White (#FFFFFF)
-   **Border**: 1px solid #E6E2D6 (Sand)
-   **Shadow**: `0 4px 6px -1px rgba(44, 44, 44, 0.05), 0 2px 4px -1px rgba(44, 44, 44, 0.03)`
-   **Radius**: `rounded-2xl` (16px - 24px)
-   **Hover**: Slight lift (`-translate-y-1`) and increased shadow.

### Buttons

-   **Primary**: Forest Green background. White text. Fully rounded (`rounded-full`). 
    -   *Hover*: Scale 1.05, slight rotation (1deg).
-   **Secondary**: Transparent background. Forest Green border. Forest Green text.

### Imagery

-   Photos should look like **prints**. 
-   Optional: White borders around images (polaroid style).
-   Use natural light photography. People laughing, coffee cups, parks.

## Spacing & Layout

-   **Generous Whitespace**: Don't crowd the cards. Let the "paper" breathe.
-   **Centered Column**: Keep the reading experience focused (max-width 600-800px for text).
-   **Asymmetry**: Occasionally break the grid. Place an image slightly off-center or rotated.

## Interaction

-   **Slow & Smooth**: Transitions should be `duration-300` or `duration-500` with `ease-out`.
-   **Tactile Feedback**: Buttons press down (scale 0.95) when clicked.