# Our Story — Website

A four-page site: **Home**, **Timeline**, **Albums**, and **The Film** (a Netflix-style page with a looping background video and a "Play Video" button that opens your YouTube video).

It's plain HTML/CSS/JS — no build step, no dependencies to install. Everything can be edited in a text editor and hosted free on GitHub Pages.

## 1. Add your content (one file for almost everything)

Open **`js/data.js`**. It's split into four sections:

- `SITE` — couple names, landing page headline/subtext, hero photo
- `TIMELINE` — one entry per milestone (date, title, story text, photo)
- `ALBUMS` — one album per group of photos, each with a list of photos + captions
- `FILM` — the Netflix-style page: your YouTube video ID, headline, and synopsis text

Every placeholder is written in plain English telling you what to replace. Until you add real images, the site shows soft pink placeholder tiles so you can preview the layout.

## 2. Add your photos

Drop image files into `assets/images/` (e.g. `assets/images/hero.jpg`), then reference that path in `js/data.js`, for example:

```js
heroImage: "assets/images/hero.jpg",
```

Same idea for `TIMELINE[i].image`, `ALBUMS[i].cover`, and `ALBUMS[i].photos[i].image`.

## 3. Add your "trailer" background video (optional)

For the looping silent background on the Film page, export a short (10–20 second) muted clip and save it as:

```
assets/video/memories-reel.mp4
```

Keep the file small (ideally under ~15MB) since it autoplays for every visitor. If you skip this, the page falls back to a warm gradient background automatically — nothing breaks.

## 4. Connect your YouTube video (important)

The "Play Video" button opens the video from your channel as an embedded player, right on the page.

1. Upload your video to YouTube.
2. Set its visibility to **Unlisted** — *not* Private. A Private video only plays for you while logged into your own YouTube account; an Unlisted video isn't searchable or listed on your channel, but will play for anyone who visits your site. This is the standard way to keep a video off-the-record while still embedding it publicly.
3. Copy the video ID from the URL — the part after `v=`:
   `https://www.youtube.com/watch?v=`**`XXXXXXXXXXX`**
4. Paste it into `js/data.js`:
   ```js
   youtubeId: "XXXXXXXXXXX",
   ```

## 5. Preview it locally

Just open `index.html` in a browser — everything works without a server. (Some browsers restrict local video/script loading slightly; if something looks off, right-click the folder and "Open with Live Server" in VS Code, or run `python3 -m http.server` from inside the folder and visit `http://localhost:8000`.)

## 6. Deploy free on GitHub Pages

1. Create a new **public** repository on GitHub (private repos need a paid plan for Pages... unless you use GitHub's free "Pages" on public repos, which is the free route).
2. Upload everything in this folder to the repo (drag-and-drop on github.com works, or `git push`).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a URL like `https://yourusername.github.io/your-repo-name/` within a minute or two.

That's it — no build tools, no npm, nothing to install.

## File map

```
index.html      → Home
timeline.html   → Timeline
albums.html     → Albums
film.html       → The Film (Netflix-style page)
css/style.css   → Shared design system (all pages)
css/film.css    → Dark theme just for the Film page
js/data.js      → ALL your content lives here
js/main.js      → Shared behaviour (nav, header, thread motif)
js/timeline.js  → Renders the Timeline page from data.js
js/albums.js    → Renders Albums + the photo lightbox
js/film.js      → Film page hero + the YouTube play modal
assets/images/  → Put your photos here
assets/video/   → Put your looping background clip here
```
