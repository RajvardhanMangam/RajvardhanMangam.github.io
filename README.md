# Rajvardhan Mangam — Portfolio

A premium, motion-driven personal portfolio built with React, React Three
Fiber, GSAP (ScrollTrigger), Lenis (inertial smooth scroll), and Tailwind CSS.
Visual direction is a homage to bold, kinetic-typography studio sites
(Active Theory-style): a percentage-counter preloader, a custom cursor,
huge display type, an animated wireframe field in the hero, and full-bleed
sticky "case study" project cards.

## Stack

- **React 19** + **Vite** — app shell and dev server
- **@react-three/fiber** + **three** — the animated wireframe field in the hero
- **GSAP + ScrollTrigger** — entrance timelines, the sticky-stacking project
reveal, and scroll-triggered fades
- **Lenis** — inertial smooth scrolling wired into GSAP's ticker
- **Tailwind CSS** — design tokens (see `tailwind.config.js`) and layout

## Getting started

```
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

## Editing content

All copy — name, education, skills, projects, achievements, contact info —
lives in one place: `src/data.js`. Update that file and every section
picks it up automatically. No other file needs to change to update content.

## Structure

```
src/
  data.js                content
  index.css               design tokens / global styles / cursor / noise
  App.jsx                 page composition + preloader gate
  lib/
    useSmoothScroll.js    Lenis + GSAP ticker wiring
  components/
    Loader.jsx             percentage-counter preloader
    Cursor.jsx              custom dot + ring cursor with magnetic targets
    Nav.jsx                 fixed nav, numbered links, mobile drawer
    Hero.jsx                kinetic headline over the 3D field
    HeroField.jsx            React Three Fiber wireframe terrain
    Marquee.jsx              auto-scrolling skills ticker
    Projects.jsx             sticky-stacking case-study cards (GSAP scrub)
    About.jsx                education timeline + internship
    Skills.jsx               technical arsenal grid
    Log.jsx                  achievements log
    Footer.jsx               big CTA contact panel, magnetic email link
```

## Notes

- Motion respects `prefers-reduced-motion` (loader, marquee, animations all
  degrade gracefully).
- The cursor and 3D field are disabled on touch/coarse-pointer devices.
- The 3D field is `aria-hidden` and purely decorative; all content is
  readable with it disabled.
- Design tokens (color, type) are centralized in `tailwind.config.js` if you
  want to reskin the palette. Accent color is `signal` (`#D8FF3E`).
- `vite.config.js`'s `base` is left at `/` for a `<username>.github.io` user
  page. Change it if you ever move this to a project page.
