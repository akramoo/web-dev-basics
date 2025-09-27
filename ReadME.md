# 🌍 NASA Space Apps: Web Dev Basics Project (Demo Site)

This project was created as part of the **NASA Space Apps Challenge** to
introduce beginners to the **fundamentals of web development** (HTML, CSS,
JavaScript) through a simple demo site and learning resources.

**Author:** Samir Akram OUNIS.
**Project:** `example_web_demo` — small static demo showing HTML + CSS + JavaScript working together.

---

## Table of contents

1. [Overview](#overview)
2. [Files in this repo](#files-in-this-repo)
3. [How to run locally](#how-to-run-locally)
4. [Explanation of the code](#explanation-of-the-code)
5. [Useful learning & tooling links (categorized)](#useful-learning--tooling-links-categorized)
6. [Deployment suggestions](#deployment-suggestions)
7. [Customization & tips](#customization--tips)
8. [License](#license)

---

# Overview

This repository contains a compact example website (static) intended for a short demo or presentation about basic web development. It demonstrates the separation of concerns:

* **HTML** — structure and content (`index.html`)
* **CSS** — styling and responsive layout (`style.css`)
* **JavaScript** — lightweight interactivity & persistence (`script.js`)

The site includes a profile card, two buttons (greet + theme toggle), a small modal dialog, and a fake API demo to show asynchronous behavior.

---

# Files in this repo

* `index.html` — main HTML page (document structure, content, references to CSS & JS).
* `style.css` — styles, layout, responsive rules, and theme variables (light/dark).
* `script.js` — client-side JS: modal open/close, greet counter persisted to `localStorage`, theme toggle, small fake API call.
* `example_web_demo.zip` — a zip of the files (if you received one).

---

# How to run locally

You can run the demo in several simple ways:

**Option A — Open file directly**

* Double-click `index.html` (works for most demos; some features like fetch from local files may be limited by browser security).

**Option B — Simple local server (recommended)**

* With Python (available on most systems):

```bash
# from inside the project directory
python -m http.server 8000
# then open http://localhost:8000
```

* With Node (serve package):

```bash
npx serve
# or install: npm i -g serve
serve
```

* With VS Code: install **Live Server** extension, then click *Live Server*.

---

# Explanation of the code

## `index.html` — structure & purpose

Key parts:

* `<head>` includes meta tags and `<link rel="stylesheet" href="style.css">` to include styles.
* `<main class="container">` holds the profile card and a notes section.
* Buttons:

  * **Say hello** (`#greetBtn`) triggers the JS greeting counter and opens a modal.
  * **Toggle theme** (`#themeBtn`) switches between light/dark themes.
* Accessible modal:

  * `<div id="modal" class="modal" role="dialog" aria-modal="true" aria-hidden="true">` — toggled by JS.
  * `aria-hidden` is used to indicate visibility to assistive tech.
* `script.js` is included at the end of `<body>` to ensure DOM is loaded.

Why structure this way:

* Keeps content (HTML) separate from style (CSS) and behavior (JS).
* Ensures progressive enhancement: the page remains readable even if JS is disabled.

---

## `style.css` — styling & themes

Highlights:

* CSS variables (`:root { --bg: ... }`) define color tokens for easy theme switching.
* `[data-theme="dark"]` contains overrides for dark mode.
* Layout:

  * `.container` uses flexbox for responsive layout.
  * `.card` has `box-shadow`, `border-radius`, and padding to emphasize visual grouping.
* Modal styling uses `.modal[aria-hidden="false"]` to show/hide via `aria-hidden` toggled by JS.
* Responsive rule: `@media (max-width:640px)` adjusts layout for narrow screens.

Why this is useful:

* Uses modern CSS practices (variables + flexbox).
* Easy to customize theme colors by changing variables.
* Accessibility-focused visual cues and proper modal semantics.

---

## `script.js` — interactivity & persistence

Behavior summary:

* **Greet counter**:

  * Stored in `localStorage` under `demo.greetCount`.
  * Each click increments the counter, updates the UI (`#greetCount`), and opens the modal with a message like: “Hello — you've clicked X times!”
* **Modal handling**:

  * `openModal()` sets `aria-hidden="false"`; `closeModalFn()` sets it back to `true`.
  * Keyboard accessibility: `Escape` closes the modal; focus management returns focus to the greet button.
  * Clicking outside modal panel closes it.
* **Theme toggle**:

  * Persisted in `localStorage` under `demo.theme`.
  * On load, theme is initialized from storage or `prefers-color-scheme`.
  * Theme is toggled by `data-theme="dark"` attribute on `<html>`.
* **Fake API demo**:

  * `fakeFetchProfile()` uses `setTimeout` to simulate an async fetch; result appended to `.notes`.

Why these patterns matter:

* `localStorage` shows persistence across refreshes — a great beginner-friendly example.
* Focus and `aria-hidden` show simple accessibility considerations.
* The fake fetch demonstrates async integration without needing a server.

---

# Useful learning & tooling links (categorized)

Below are the links you supplied, organized with a short description for each.

## Learning resources / tutorials

* [freeCodeCamp.org](https://www.freecodecamp.org/) — Hands-on, free interactive lessons and projects for web dev.
* [freeCodeCamp YouTube channel](https://www.youtube.com/@freecodecamp/) — Full-length tutorial videos and course playlists.
* [MDN Web Docs](https://developer.mozilla.org/) — Authoritative documentation for HTML, CSS, and JavaScript (highly recommended).
* [W3Schools](https://www.w3schools.com/) — Quick examples and interactive editors (good for fast lookups, but prefer MDN for accuracy).

## Frontend frameworks & ecosystems

* [React](https://react.dev/) — Official React docs (component-based UI library).
* [Next.js](https://nextjs.org/) — React framework for server-side rendering, static-site generation, and fullstack apps.

## Backend / Server

* [Node.js](https://nodejs.org/) — JavaScript runtime for building servers and tooling.
* [Express.js](https://expressjs.com/) — Opinionated Node.js framework for building servers and tooling.
* [NestJS](https://nestjs.com) — Opinionated Node.js framework based on TypeScript, ideal for structured backend APIs.

## Deployment & hosting

* [Vercel](https://vercel.com/) — Fast deployment for static and Next.js apps (recommended for quick demos).

## Roadmaps & career guidance

* [roadmap.sh](https://roadmap.sh/) — Interactive developer roadmaps for frontend, backend, DevOps and more.

---

# Deployment suggestions

* **Static deploy (this demo)**: Use Vercel, Netlify, or GitHub Pages. For Vercel:

  1. Create a new project in Vercel and connect your GitHub repo.
  2. For a static site with `index.html`, the default build settings usually work (no build command required).
* **Simple alternative**: Push the files to a repo and enable GitHub Pages (repository settings → Pages).
* **If you decide to migrate to Next.js**: the same components can be integrated into a Next.js project and deployed to Vercel with server-side rendering or static export.

---

# Customization & tips

* To change the displayed name, update `<h2 id="profile-name">Samir Akram OUNIS</h2>` in `index.html`.
* To change accent color: edit `--accent` in `style.css`.
* To reset greet count: open browser DevTools → Application → `localStorage` → delete `demo.greetCount`.
* Add more accessibility improvements:

  * Trap focus inside the modal while it’s open.
  * Add `aria-describedby` for more context.
  * Announce state changes with an ARIA live region if desired.
* To expand the fake API to a real one: replace `fakeFetchProfile()` with `fetch('/api/profile')` and serve an API from a backend (Node / NestJS).

---

# Troubleshooting

* If modal doesn't appear: check `script.js` is included and no JS errors in Console.
* If localStorage values aren’t updating: ensure site is served over HTTP/HTTPS (some browsers restrict local files in certain contexts).
* If styles look different: confirm `style.css` is loaded (Network tab in DevTools) and that caching isn’t serving an older file (hard refresh: Ctrl+F5).

---

# License

This demo is provided under the **MIT License** — feel free to reuse and adapt for your presentation or teaching.
