Awesome—going with **Anime.js** is a great call. I dug into the docs and reworked the plan so it’s
**clean, robust, and truly easy to implement**. Below you’ll find three iterative passes (from
Minimal → Polished → Delight), each fully compatible with Anime.js features like **timelines**,
**keyframes**, **stagger**, and (optionally) **SVG motion paths**. I’ve also included implementation
details, constants, accessibility, and performance tips so this drops into your site smoothly.

Citations to key Anime.js docs are included where relevant.

---

# v1 — Minimal, Reliable, Ship-Now

## Goal

A compact, shape-only hero animation that:

- Fades in funnel + labels
- Brings scattered dots into the funnel
- Steps them through **Week 1–6**
- Groups them at the bottom
- Reveals a short message/CTA

## Markup (lean HTML)

```html
<section class="cohort-hero" aria-label="New Cohorts animation">
  <div class="funnel-wrapper">
    <div class="funnel-bg" aria-hidden="true"></div>

    <!-- Week labels -->
    <div class="week-label" style="--y: 40px;">Week 1 · Dinner</div>
    <div class="week-label" style="--y: 100px;">Week 2 · Workshop</div>
    <div class="week-label" style="--y: 160px;">Week 3 · Games</div>
    <div class="week-label" style="--y: 220px;">Week 4 · Explore</div>
    <div class="week-label" style="--y: 280px;">Week 5 · Challenge</div>
    <div class="week-label" style="--y: 340px;">Week 6 · Celebration</div>

    <!-- Dots (people) -->
    <div class="dots" aria-hidden="true">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

    <!-- Final grouped state -->
    <div class="final-group" aria-hidden="true">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>

  <div class="hero-copy" aria-live="polite">
    <h2 class="message">6 weeks. Real friends. Your crew.</h2>
    <a class="cta-button" href="#signup">Join a New Cohort</a>
  </div>
</section>
```

## Styles (responsive + GPU-friendly)

```css
:root {
  --w: clamp(280px, 40vw, 520px);
  --h: clamp(420px, 55vh, 640px);
  --brand: #1e88e5;
  --friend: #43a047;
  --text: #3b3b3b;
}

.cohort-hero {
  display: grid;
  place-items: center;
  padding: 8vh 16px;
  gap: 24px;
}
.funnel-wrapper {
  position: relative;
  width: var(--w);
  height: var(--h);
  opacity: 0;
  transform: translateY(-24px);
}

.funnel-bg {
  position: absolute;
  inset: 0;
  background: conic-gradient(from 180deg at 50% 0%, #f4f6f8, #fff);
  border: 3px solid #e7eaee;
  border-bottom-width: 6px;
  border-radius: 12px;
}

.week-label {
  position: absolute;
  left: 12px;
  top: calc(var(--y));
  font: 600 12px/1.2 ui-sans-serif, system-ui;
  color: #6c7782;
  opacity: 0;
}
.dots .dot,
.final-group .dot {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--brand);
  transform: translate(-50%, -50%);
}

.dots .dot {
  top: -30px;
  left: 50%;
  opacity: 0;
}
.final-group {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  opacity: 0;
  display: grid;
  grid-template-columns: repeat(3, 18px);
  gap: 12px;
}
.final-group .dot {
  background: var(--friend);
}

.hero-copy {
  text-align: center;
  max-width: 720px;
}
.message {
  opacity: 0;
  transform: translateY(16px);
  color: var(--text);
  margin: 0;
}
.cta-button {
  display: inline-block;
  margin-top: 8px;
  padding: 10px 14px;
  border-radius: 8px;
  background: var(--brand);
  color: #fff;
  text-decoration: none;
  opacity: 0;
  transform: translateY(16px);
}
@media (prefers-reduced-motion: reduce) {
  .cohort-hero * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Script (Anime.js timeline with keyframes + stagger)

- Uses **timeline** to orchestrate phases.
- Uses **keyframes** for week-by-week Y positions.
- Uses **stagger()** to sequence dots. References: **Timeline**, **Keyframes**, **stagger()**.
  ([animejs.com][1])

```html
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
<script>
  // Positions for each week label (must match CSS --y)
  const weekY = [40, 100, 160, 220, 280, 340];

  // Utility to generate keyframes for a dot progressing Week 1→6
  const weekKeyframes = weekY.map((y) => ({ translateY: y, duration: 420 }));

  // Create a main timeline
  const tl = anime.timeline({
    autoplay: true,
    easing: "easeInOutQuad",
  });

  // 0) Funnel + labels fade in
  tl.add({
    targets: ".funnel-wrapper",
    opacity: [0, 1],
    translateY: [-24, 0],
    duration: 600,
  }).add(
    {
      targets: ".week-label",
      opacity: [0, 1],
      translateX: [-8, 0],
      delay: anime.stagger(60),
      duration: 360,
    },
    "-=300"
  );

  // 1) Dots appear scattered above the funnel
  tl.add({
    targets: ".dots .dot",
    opacity: [0, 1],
    translateX: () => anime.random(-140, 140),
    translateY: () => anime.random(-260, -120),
    scale: [0.6, 1],
    delay: anime.stagger(120),
    duration: 700,
    easing: "easeOutCubic",
  });

  // 2) Dots enter funnel & progress Week 1→6 (keyframes)
  tl.add({
    targets: ".dots .dot",
    keyframes: weekKeyframes,
    delay: anime.stagger(260),
    easing: "easeInOutQuad",
  });

  // 3) Grouping: converge at bottom & recolor
  tl.add({
    targets: ".dots .dot",
    translateX: 0,
    translateY: weekY[weekY.length - 1] + 40, // near bottom
    backgroundColor: "#43a047",
    scale: [
      { value: 1.15, duration: 240, easing: "easeOutBack" },
      { value: 1.0, duration: 200 },
    ],
    delay: anime.stagger(150),
    duration: 500,
  });

  // 4) Reveal the final, tidy group cluster
  tl.add(
    {
      targets: ".final-group",
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 520,
      easing: "easeOutBack",
    },
    "-=200"
  );

  // 5) Copy + CTA
  tl.add({
    targets: ".message",
    opacity: [0, 1],
    translateY: [16, 0],
    duration: 420,
  }).add(
    {
      targets: ".cta-button",
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 420,
    },
    "-=240"
  );
</script>
```

---

# v2 — Polished, Brandable, Easier to Tweak

## Improvements

1. **Constants layer** for motion + colors—change once, updates everywhere.
2. **Reusable helper** to build week keyframes.
3. **Automatic dot layout** (no manual positioning).
4. Optional **replay button** and **auto-pause on hidden tab** (saves CPU).

## Additions

```js
// Motion constants (one source of truth)
const MOTION = {
  easing: "easeInOutQuad",
  weekDur: 420,
  dotStagger: 260,
  enterDur: 700,
  groupOffset: 40,
};
const COLORS = { brand: "#1e88e5", friend: "#43a047" };

// Helper: build week keyframes with optional micro-bounce per step
const buildWeekFrames = (ys) =>
  ys
    .map((y) => [
      { translateY: y, duration: MOTION.weekDur },
      { scale: 1.06, duration: 120, easing: "easeOutBack" },
      { scale: 1.0, duration: 100 },
    ])
    .flat();

// Auto-populate dots if you prefer (example for 8)
const dotsContainer = document.querySelector(".dots");
if (dotsContainer && dotsContainer.children.length === 0) {
  Array.from({ length: 8 }).forEach(() => {
    const d = document.createElement("div");
    d.className = "dot";
    dotsContainer.appendChild(d);
  });
}

const weekFrames = buildWeekFrames(weekY);
const tl = anime.timeline({ autoplay: true, easing: MOTION.easing });

// (keep the same adds as v1, just use constants & weekFrames)
```

**Auto-pause on tab hidden:**

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) anime.running.forEach((a) => a.pause());
  else anime.running.forEach((a) => a.play());
});
```

**Replay button (optional):**

```html
<button class="replay" aria-label="Replay animation">Replay</button>
```

```js
document.querySelector(".replay")?.addEventListener("click", () => {
  anime.remove(".dots .dot, .final-group, .message, .cta-button, .week-label, .funnel-wrapper");
  document.querySelectorAll(".dots .dot").forEach((d) => {
    d.style = ""; // reset transforms/inline styles
  });
  tl.restart();
});
```

---

# v3 — Delight Pass (Optional), Still Simple to Implement

## What’s new

- **Subtle path drift** to feel “funneled,” using SVG path motion.
- Tiny **proximity attraction** on exit so dots cluster organically.
- **Reduced-motion** behavior is respected (already covered by CSS).

Anime.js has first-class helpers for SVG motion: **createMotionPath()** returns parameter generators
to animate x/y/rotation along an SVG path. Use it to guide dots slightly inward between weeks (no
heavy curves needed). ([animejs.com][2])

### Minimal SVG path (inside `.funnel-wrapper`)

```html
<svg class="funnel-path" viewBox="0 0 300 400" width="0" height="0" aria-hidden="true">
  <!-- A gentle inward curve from top-center to near bottom-center -->
  <path id="inlet" d="M150,0 C150,120 150,240 150,320" fill="none" stroke="none" />
</svg>
```

### Drift into path (per dot)

```js
// Prepare motion path helpers
const pathEl = document.querySelector("#inlet");
const { translateX: px, translateY: py } = anime.svg.createMotionPath(pathEl); // path helpers
// Animate a tiny path-follow step between Week 2 → Week 3
tl.add(
  {
    targets: ".dots .dot",
    translateX: px, // applies path X at current progress
    translateY: py, // applies path Y at current progress
    duration: 420,
    delay: anime.stagger(MOTION.dotStagger),
  },
  "+=0"
); // position on timeline as needed
```

This adds a subtle “guided” feel without complicating your layout. (You can also push just a subset
of dots onto the path to keep variety.)

**Notes:** If you prefer the older `anime.path` helper popular in examples, that’s fine too; concept
is the same: compute x/y from an SVG path and feed them to targets. (Plenty of examples show
path-follow; docs and community references confirm technique.) ([HowDev][3])

### Organic cluster (micro-attraction)

After Week 6, nudge each dot toward the cluster centroid:

```js
const cluster = document.querySelector(".final-group");
const clusterBox = () => cluster.getBoundingClientRect();
const wrapBox = () => document.querySelector(".funnel-wrapper").getBoundingClientRect();

tl.add({
  targets: ".dots .dot",
  translateX: (el, i) => {
    const w = wrapBox();
    const c = clusterBox();
    const cx = c.left + c.width / 2 - (w.left + w.width / 2);
    // jitter so they don’t overlap perfectly
    return cx + anime.random(-20, 20);
  },
  translateY: (el, i) => {
    const w = wrapBox();
    const c = clusterBox();
    const cy = c.top + c.height / 2 - w.top;
    return cy + anime.random(-12, 12);
  },
  backgroundColor: COLORS.friend,
  scale: [
    { value: 1.08, duration: 220, easing: "easeOutBack" },
    { value: 1, duration: 160 },
  ],
  delay: anime.stagger(140),
  duration: 520,
  easing: "easeInOutQuad",
});
```

---

## Accessibility & UX (kept simple)

- **Readable labels**: Week labels remain text (not image).
- **Reduced motion**: CSS `prefers-reduced-motion` already stops big movement. Provide a **static
  poster** (screenshot of final state) as a background for users who opt out.
- **Announce result**: `<div class="hero-copy" aria-live="polite">` reveals copy after the motion so
  screen readers pick up the message.
- **Keyboard**: If you add replay, ensure `button` is keyboard focusable with discernible text.

---

## Performance Tips (applied above)

- Animate **transforms + opacity** only; avoid top/left reflows.
- Keep dot count to ~6–12 for hero.
- Pause hidden tabs to save CPU.
- Use **stagger** instead of launching many independent timelines (Anime.js stagger utility is
  designed for this). ([animejs.com][4])
- Consider loading Anime.js **deferred** and starting when the hero enters the viewport
  (IntersectionObserver) for better LCP.

---

## Testing Checklist

- Mobile: labels not overlapping; CTA visible above the fold.
- Motion pacing: each week step ~0.4s feels snappy; total 25–35s OK for hero (or trim).
- Brand colors applied (set once in `COLORS`).
- Reduced-motion: verify no movement and still readable.
- Replay logic resets styles properly.
- If using SVG path drift, ensure the path’s viewBox matches your funnel coordinate system.

---

## Why this is “easy Anime.js”

- **Timelines** handle sequencing cleanly (no callback spaghetti). ([animejs.com][1])
- **Keyframes** encode the 6-week steps declaratively. ([animejs.com][5])
- **Stagger** gives instant “many-dots” choreography with minimal code. ([animejs.com][4])
- Optional **SVG motion helpers** add delight without complexity. ([animejs.com][2])

---

If you want, I can collapse v2 into a **single copy-paste HTML file** (with constants + helpers +
optional replay) or swap the vertical funnel for a **horizontal timeline** version with the exact
same structure.

[1]:
  https://animejs.com/documentation/timeline/?utm_source=chatgpt.com
  "Timeline | Documentation | Anime.js | JavaScript Animation Engine"
[2]:
  https://animejs.com/documentation/svg/createmotionpath/?utm_source=chatgpt.com
  "createMotionPath () | Anime.js | JavaScript Animation Engine"
[3]:
  https://how.dev/answers/how-to-create-motion-paths-using-svg-in-animejs?utm_source=chatgpt.com
  "How to create motion paths using SVG in anime.js - Educative"
[4]:
  https://animejs.com/documentation/utilities/stagger/?utm_source=chatgpt.com
  "stagger () | Utilities | Documentation | Anime.js | JavaScript ..."
[5]:
  https://animejs.com/documentation/animation/keyframes/?utm_source=chatgpt.com
  "Keyframes | Animation | Documentation | Anime.js | JavaScript Animation ..."
