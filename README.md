# spare.parts

A static React site for a commercial vehicle and industrial spare parts
distributor. Six pages, animated with Framer Motion, built with Vite.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the built output
```

`dist/` is plain HTML, CSS and JS — drop it on any static host, or open
`dist/index.html` directly. Routing uses `HashRouter` (`/#/about`) so deep
links work without server rewrite rules.

## Pages

| Route       | Page         | What it does                                              |
| ----------- | ------------ | --------------------------------------------------------- |
| `/`         | Home         | Hero with the exploded hub diagram, stats, catalogue, process |
| `/about`    | About us     | Story, operating rules, customer types                     |
| `/journey`  | Our journey  | 1978–2024 timeline with a scroll-driven progress rail      |
| `/partners` | Our partners | Brand marks and a cross-reference table of stocked lines   |
| `/team`     | Our team     | Staff cards plus a "who to ask" routing table              |
| `/contact`  | Contact us   | Enquiry form, call checklist, six branch addresses         |

## Before you publish

Everything below is a deliberate placeholder. Nothing here is a real number,
address or registration — an invented-but-plausible phone number would ring a
stranger, so unset values are rendered as plain text instead of clickable
links until you replace them.

| What | Where | Replace with |
| --- | --- | --- |
| Phone, WhatsApp, email, GSTIN, address | `company` in `src/data/site.js` | Your own details |
| Branch addresses and numbers | `branches` in `src/data/site.js` | Your branches |
| Partner brand names | `partners` in `src/data/site.js` | Your real suppliers |
| Team names and roles | `team` in `src/data/site.js` | Your staff |
| All photography | `src/data/images.js` | Your own warehouse/counter photos |

`isPlaceholder()` in `src/data/site.js` is what decides whether a detail
becomes a link — it matches values containing `XXXXX`, starting with "Add ",
or using `example.com`. Real values light the links up automatically.

## Animations

- **Exploded hub assembly** (`src/components/ExplodedHub.jsx`) — the signature
  element. Parts separate along the axle centreline on load; hovering a part or
  a chip isolates it and shows its part number.
- **Page transitions** — `AnimatePresence` in `src/App.jsx` cross-fades routes.
- **Scroll reveals** — `src/components/Reveal.jsx` wraps every section block.
- **Timeline rail** — `useScroll` drives the yellow fill on Our journey.
- **Counters** — stats count up the first time they enter view.
- **Nav pill** — the active-page marker slides between links (`layoutId`).
- Everything respects `prefers-reduced-motion`.

## Changing the content

All copy, part data, team, partners, branches and nav labels live in
`src/data/site.js`. Design tokens (colour, type, spacing) are the CSS custom
properties at the top of `src/styles/global.css`.

## Design

Dark ground end to end, with two bright surfaces used sparingly: the cadmium
stat band and the prussian call-to-action. Photography is graded through one
filter in `Figure.jsx` so stock images from different sources read as a single
shoot. Display type is Archivo (width axis), body is IBM Plex Sans, and
anything that behaves like data — part numbers, section codes, series
prefixes — is IBM Plex Mono.

## Notes

- The contact form has no backend. `handleSubmit` in `src/pages/Contact.jsx`
  currently just shows a confirmation panel; point it at your mail service,
  Formspree, or WhatsApp Business endpoint, and update the confirmation copy.
- Fonts (Archivo, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via
  `index.html`. Self-host them if the site must work offline.
- Images load from Unsplash's CDN, so the site needs an internet connection
  until you swap in your own files.
