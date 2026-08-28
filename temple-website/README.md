# Temple Website Template

A reusable React + Vite + Tailwind template modeled on the structure of a
typical temple devasthanam site (nav, hero, quick-action cards, about,
sevas, accommodation, gallery, announcements ticker, footer).

## Reuse this for another temple

Everything temple-specific — name, deity, colors used are Tailwind tokens,
nav links, sevas, accommodation, gallery captions, announcements, footer
links, contact info — lives in **`src/config/siteConfig.js`**. Edit that
one file first; you usually won't need to touch the components at all.

To change the color palette, edit the `maroon` / `gold` / `turmeric` /
`sandal` / `ink` values in `tailwind.config.js`.

To swap the gallery/photo placeholders for real images, replace the
placeholder `<div>` blocks in `src/components/Gallery.jsx` and
`src/components/Accommodation.jsx` with `<img>` tags pointing at your
own photos (e.g. in `src/assets/`).

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
```
