# Rajvardhan Mangam — Portfolio

A premium, motion-driven personal portfolio built with React, React Three
Fiber, GSAP (ScrollTrigger), and Tailwind CSS.

## Stack

- **React 19** + **Vite** — app shell and dev server
- **@react-three/fiber** + **three** — the animated wireframe terrain in the hero
- **GSAP + ScrollTrigger** — entrance timelines and the stacking-card scroll
  reveal in the Work section
- **Tailwind CSS** — design tokens (see `tailwind.config.js`) and layout

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

## Editing content

All copy — name, education, skills, projects, achievements, contact info —
lives in one place: `src/data.js`. Update that file and every section
(hero, about, skills grid, project cards, log, footer) picks it up
automatically.

## Structure

```
src/
  data.js              content
  index.css            design tokens / global styles
  App.jsx              page composition
  components/
    Nav.jsx            floating glass nav
    Hero.jsx            headline + 3D terrain field
    HeroField.jsx       React Three Fiber canvas
    Projects.jsx        sticky stacking-card project showcase
    About.jsx           education / background
    Skills.jsx          technical arsenal grid
    Log.jsx             achievements + internship
    Footer.jsx          glassmorphism contact panel
```

## Notes

- Motion respects `prefers-reduced-motion`.
- The 3D field is `aria-hidden` and purely decorative; all content is
  readable with it disabled.
- Design tokens (color, type) are centralized in `tailwind.config.js` if you
  want to reskin the palette.
