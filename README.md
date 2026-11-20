# Sammi Suñga — Portfolio

CSE 316 final project. React + Vite + Tailwind CSS + Motion for React.

## Run it on your computer

You need **Node.js 18 or newer** (https://nodejs.org, get the LTS version).

```bash
npm install      # first time only: downloads the packages
npm run dev      # starts the site at http://localhost:5173
```

Stop the dev server with `Ctrl + C`.

## Where to edit things

| What | File |
|---|---|
| All text, links, awards, skills, case study copy | `src/data/content.js` |
| GitHub / LinkedIn links | `src/data/content.js` → `profile.github`, `profile.linkedin` |
| Frontline screenshots | Put images in `public/images/frontline/`, then set each `src` in `frontline.screens` |
| Pinboard items | Put images in `public/images/work/`, then add to `forefront.board` |
| Colors and fonts | `src/index.css` (the `@theme` block) |
| ID card design | `src/components/IdCard.jsx` |
| Lanyard physics | `src/components/Lanyard.jsx` |

Anything in `[square brackets]` is a placeholder.

## Pages

| URL | Page |
|---|---|
| `/` | Home: name, lanyard ID, work strip |
| `/about` | About & Skills: typing laptop doc, cards, skills |
| `/projects` | Projects: three folders |
| `/projects/frontline` | The Frontline |
| `/projects/forefront` | The Forefront: Heyzine flipbooks and pinboard |
| `/case-study` | Case study |
| `/contact` | Business cards |

## Build and deploy

```bash
npm run build    # makes the production site in /dist
npm run preview  # check the built site locally
```

**Vercel (easiest):** push this folder to GitHub, go to vercel.com → Add New Project → import the repo → Deploy. Vercel detects Vite automatically. `vercel.json` already handles page refreshes on routes like `/about`.

**Netlify:** same idea, or drag the `dist` folder onto app.netlify.com/drop. `public/_redirects` handles the routes.

## Stack

- React 18, Vite 6, React Router 6
- Tailwind CSS 4
- Motion for React (lanyard drag and spring)
- Lucide React icons
- Fonts: Anton, Antonio, DM Sans (self-hosted via Fontsource)
- Heyzine embeds for the Luto and Kontesera flipbooks
