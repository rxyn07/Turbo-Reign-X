# Turbo Reign X — Static Valorant Team Website

A modern, responsive static site made with plain HTML, CSS and JavaScript.

## Files

- `index.html` — site content and page structure
- `styles.css` — all design and responsive styling
- `script.js` — team roster data + interactions

## Editing team names, players and Tracker links

Open `script.js`.

At the very top you will see:

```js
const teams = {
  knights: {
    name: "TRX Knights",
    ...
    players: [
      { name: "Player One", role: "DUELIST", tracker: "https://tracker.gg/valorant" }
    ]
  }
}
```

Change:

- `name` to the player's in-game name
- `role` to their role
- `tracker` to their personal Tracker.gg link

Do the same for all four teams.

## Optional coach

Each roster now also has:

```js
coach: { name: "", tracker: "" },
```

Leave `name` blank and the coach section will not appear at all.

To show a coach:

```js
coach: {
  name: "CoachName",
  tracker: "https://tracker.gg/valorant/profile/..."
},
```

The tracker link is optional too. If you add a coach name but leave the tracker blank, only the coach name will show.

## Editing trophies

Open `index.html` and search for:

`TROPHIES & RESULTS`

Replace the placeholder tournament names, placements and dates.

## Editing About Us

Open `index.html` and search for:

`ABOUT TURBO REIGN X`

The paragraphs underneath are intentionally basic and easy to replace.

## Social links / Contact

At the bottom of `index.html`, replace:

- `your-email@example.com`
- Discord `href="#"`
- X / Twitter `href="#"`
- YouTube `href="#"`

## Running the site

You can simply double-click `index.html`.

For best results during development, use a small local server such as VS Code Live Server.

## Hosting

This site works on static hosting including:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel


## Brand assets

The site now uses the uploaded TRX visual identity.

Files in `assets/`:

- `trx-mark.png` — transparent TRX mark used in the header/footer and hero card
- `trx-logo-bg.png` — original teal/purple logo artwork
- `trx-logo-alt.gif` — alternate uploaded logo asset

The main color system is controlled near the top of `styles.css`:

```css
--accent: #56b9c1;
--accent-2: #6f5f74;
--gold: #e2c783;
```

Change those three variables if you ever want to adjust the theme globally.
