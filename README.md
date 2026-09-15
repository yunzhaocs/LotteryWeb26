# Lottery Web App

A lightweight browser-based lottery application built with HTML, CSS,
and JavaScript.

## Features

-   Optimized for 16:9 displays
-   Randomly selects 6 winners per draw
-   Approximately 5-second lottery animation
-   Local MP3 sound playback
-   Responsive winner-card layout
-   Static frontend with no backend or build process

## Project Structure

``` text
├── index.html
├── styles.css
├── script.js
├── sound.mp3
├── README.md
└── assets/
```

## Run Locally

Open `index.html` directly in a browser, or run a local HTTP server:

``` bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

Upload all project files to the repository root, then enable GitHub
Pages from:

**Settings → Pages → Deploy from a branch → main → / (root)**

## Audio

The lottery sound is loaded locally:

``` javascript
new Audio('sound.mp3')
```

Keep `sound.mp3` in the project root alongside `index.html`.

## Tech Stack

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   Web Audio / HTML Audio
-   GitHub Pages
