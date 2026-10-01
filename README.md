# Yadiki Naveed Ahammed — Portfolio

A single-page personal portfolio built from both resumes and the cover letter.
Pure HTML + CSS + JavaScript. No build step, no dependencies.

Live site: https://portfolio2-phi-five-37.vercel.app/#gaming

## Files
- `index.html` — page structure and all content
- `styles.css` — dark theme + gaming "HUD" styling
- `script.js` — animations (scroll reveal, counters, typewriter) and interactions

## View it
Just double-click `index.html`, or serve the folder locally:

```bash
python -m http.server 8123
# then open http://127.0.0.1:8123
```

## Links
GitHub (`github.com/Ynahammed`) is wired up in the `profiles` object in `script.js`.
Every `[data-link="github"]` button across the page picks it up.

The four "View on GitHub →" links on project cards are hardcoded to their individual
repos and open in a new tab.

## Sections
1. Hero — animated title, rotating role typewriter, live "player card" stats
2. About — engineering philosophy, quick facts, and a cover-letter callout
3. Experience — Salesforce Developer Intern timeline
4. Projects — 4 systems with stack tags, metrics, and per-repo links
5. Skills — 8 categories merged from both resumes
6. Gaming — 15+ years, 700+ games, 10+ genres, favourites & genres,
   review log, non-biased evaluation, GTA V vs RDR II deep-dive, PSN ID
7. Cover Letter — the full Game Tester (Rockstar India QA) cover letter
8. Credentials — certifications, achievements, education
9. Contact — emails, phone, location

## Where the gaming data lives
All the gaming copy sits in the `#gaming` section of `index.html`:
- **Genres** are `span.tag--genre` chips
- **Favourites** are the three `.favcol` columns (personal favourites, formative,
  across the catalogue)
- **GTA V vs RDR II** is the `.vs` table — each winning cell carries `vs__win`

The cover letter is the `#qa` section, one paragraph per `.letter__p`.
