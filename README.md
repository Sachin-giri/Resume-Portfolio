# Sachin Girepanoor — Portfolio

A starter portfolio built with React, Vite, and Tailwind CSS. Sections:
Hero, Projects, a dedicated Mission Alpha game embed, About, Resume, and
Contact.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## What to customize first

1. **Projects** — edit `src/data/projects.js`. Add your live demo and
   GitHub repo URLs for each project (Mission Alpha, the AI chatbot, the
   cloud app). Add new projects by copying the object shape.
2. **Mission Alpha embed** — deploy your Phaser 3 build (Vercel, Netlify,
   or GitHub Pages all work for static builds), then drop the URL into
   the `<iframe>` in `src/components/GameEmbed.jsx` (currently commented
   out with a placeholder in its place).
3. **Resume PDF** — put your resume as `resume.pdf` inside `public/` and
   the download button in `src/components/Resume.jsx` will serve it.
4. **Contact links** — edit `src/components/Contact.jsx` with your real
   GitHub and LinkedIn URLs.
5. **About copy** — `src/components/About.jsx` has a placeholder
   paragraph asking you to add one specific story (a bug, a decision, a
   system you designed). Specifics read stronger than adjectives.

## Deploy

Push this project to a GitHub repo, then either:

- **Vercel** — import the repo at vercel.com/new, framework preset
  "Vite", no config needed.
- **Netlify** — import the repo, build command `npm run build`, publish
  directory `dist`.

Both offer free custom domains or you can point your own domain
(`yourname.dev`) at either.

## Design notes

- Colors, type, and spacing are token-based in `tailwind.config.js` —
  change the palette there and it propagates everywhere.
- The hero's "boot sequence" and starfield are in
  `src/components/Hero.jsx` and `src/components/Starfield.jsx` — pure
  canvas/React, no extra libraries.
- Respects `prefers-reduced-motion` throughout.
