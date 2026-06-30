# MY-PORTFOLIO

A cozy, teen developer portfolio site built with HTML, Tailwind CSS, and vanilla JavaScript.

## Project structure

```
MY-PORTFOLIO/
├── index.html              # Main page (GitHub Pages entry point)
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── tailwind.config.js  # Tailwind theme configuration
│   ├── projects.js         # Project cards + GitHub links
│   └── contact.js          # Contact form logic
├── LICENSE
└── README.md
```

## Features

- Sticky navigation with smooth scroll
- Hero, about, projects, and contact sections
- Contact form with client-side validation
- Purple night-theme aesthetic with sketch-style project cards

## Run locally

Open `index.html` in your browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch** → `main` → `/ (root)`
4. Your site will be live at `https://<username>.github.io/MY-PORTFOLIO/`
