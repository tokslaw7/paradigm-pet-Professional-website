# Pet Paradigm Professionals

A professional pet care consultation and information website. Pet Paradigm Professionals connects pet owners with certified "Pexperts" who provide evidence-based guidance on pet health, nutrition, and care.

## Overview

Pet Paradigm Professionals is a static website serving as both an educational resource and a consultation lead generation platform. It features dedicated care guides for dogs, cats, and fish, as well as a consultation request form.

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript (ES6+)**
- **Webpack 5** — bundling, dev server, and production optimization
- **webpack-dev-server** — live reload and hot module replacement
- **html-webpack-plugin** — HTML processing
- **copy-webpack-plugin** — static asset copying

## Pages

| Page | Description |
|---|---|
| `index.html` | Home / landing page with company overview and CTAs |
| `dog.html` | Dog care guide: diet, exercise, grooming, vaccinations |
| `cat.html` | Cat care guide organized by life stage |
| `fish.html` | Fish care guide: freshwater and saltwater parameters |
| `about.html` | Company background and certifications |
| `consultation.html` | Consultation request form |
| `404.html` | Custom error page |

## Project Structure

```
pet-paradigm/
├── index.html
├── dog.html
├── cat.html
├── fish.html
├── about.html
├── consultation.html
├── 404.html
├── site.webmanifest          # PWA manifest
├── robots.txt
├── webpack.common.js
├── webpack.config.dev.js
├── webpack.config.prod.js
├── package.json
├── css/
│   └── style.css
├── js/
│   ├── app.js                # Search, routing, and form logic
│   └── vendor/               # Third-party libraries
└── img/                      # All site images and favicon variants
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 16 or higher
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/tokslaw7/paradigm-pet-Professional-website.git
cd pet-paradigm
npm install
```

### Development

```bash
npm start
```

Starts webpack-dev-server, opens `http://localhost:8080` in your browser, and watches for file changes with live reload.

### Production Build

```bash
npm run build
```

Outputs optimized, minified assets to the `dist/` directory. Deploy the contents of `dist/` to any static hosting provider.

## Deployment

The production build produces a self-contained `dist/` folder that can be hosted on any static platform:

- **GitHub Pages** — push `dist/` or configure the repo root as the source
- **Netlify / Vercel** — connect the repo and set build command to `npm run build`, publish directory to `dist`
- **Traditional hosting** — upload `dist/` contents via FTP or SSH
- **AWS S3 + CloudFront** — sync `dist/` to an S3 bucket configured for static hosting

## Features

- **Search / routing** — search box in the header routes users to the relevant care guide page
- **Responsive design** — mobile-first layout with breakpoints at 600px, 768px, and 900px
- **PWA-ready** — includes `site.webmanifest` and favicon variants for installability
- **SEO** — `robots.txt`, Open Graph meta tags, and semantic HTML throughout

## Contact

- **Location:** Duluth, GA, US
- **Phone:** (678) 551-0906
- **Email:** paradigm@example.com

## License

This project is licensed under the terms of the MIT License. See [LICENSE.txt](LICENSE.txt) for details.