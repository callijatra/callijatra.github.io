# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Interactive Learn Page (`/learn`)**:
  - New learning space with sidebar topics (Ranjana Lipi live; Nepal Lipi and calligraphy pen marked soon).
  - Ranjana letter explorer with vowels/consonants, Devanagari mappings, and interactive matra chips (ka → kaa → ki → …).
  - Letter characteristic color coding from calligraphy practice: normal (black/white), headless (red), hand-down (green), hand-up (blue), with filter chips, legend, and matra-attachment tips.
  - Nepalbhasa trait labels shown in Devanagari for easier reading.
  - Homepage Learning Materials leads with an interactive preview CTA; YouTube tutorials kept as a secondary row.
  - Learn link added to site navigation.
- **About Us Page Refresh**:
  - Expanded mission, story, and “how we work” content with hero logo and section quick-links.
  - Founding Members portfolio with photo placeholders and hover/tap reveal details.
- **Search Engine Optimization (SEO)**:
  - Added [public/robots.txt](file:///Users/srt/Personal/MyProjects/callijatra.github.io/public/robots.txt) allowing search engine crawlers with direct pointer to `sitemap-index.xml`.
  - Added comprehensive meta tags across pages targeting "Callijatra", "Ranjana", "Ranjana Lipi", "Nepal Lipi", and calligraphy keywords.
  - Added Open Graph and Twitter Card tags with absolute image URLs, dimensions, and locale metadata.
  - Implemented Schema.org JSON-LD structured data (`Organization` and `WebSite` graph entities) for rich search engine snippets.
  - Added search engine directives (`robots`, `googlebot`, `bingbot`) with `max-image-preview:large` and `max-snippet:-1`.
  - Added accessible heading text (`sr-only`) and optimized page titles across Home, Resources, About, and Gallery pages for keyword indexing.
  - Added Google Search Console site verification meta tag and verification HTML file (`google70c79cec13865349.html`).
  - Added standalone [public/sitemap.xml](file:///Users/srt/Personal/MyProjects/callijatra.github.io/public/sitemap.xml) for direct submission in Google Search Console.

### Changed
- **Home Resource Cards**: Replaced per-tool pill clusters with single “View all apps / fonts / web tools” CTAs; thumbnails deep-link to matching Resources sections.
- **Home Page Section Ordering**: Moved Learning Materials section before Events & Gallery on the homepage to mirror the navbar hierarchy (Resources → Learn → Gallery) with balanced alternating section backgrounds.
- **Resources Hero Quick Links**: Harmonized light mode styling to use the same frosted glass white aesthetics (`bg-white/10`, `border-white/20`, `text-white/80`) as dark mode against the dark hero background.

## [0.2.0] - 2026-10-08

### Added
- **Astro & Tailwind CSS v4 Redesign**: Modernized site architecture using Astro static site generation and Tailwind CSS v4 with system/toggle dark mode support.
- **Automated GitHub Pages Deployment**: Added `.github/workflows/deploy.yml` using GitHub Actions with Node 22 for automated builds and deployment on push to `main` and `ui-enhance`.
- **Multi-Thumbnail Previews**:
  - Home page Mobile Apps card displays thumbnails for all 3 apps: Nepal Lipi Type Newa, Nepal Lipi Keyboard, and Callijatra Calligraphy.
  - Home page Fonts card displays side-by-side animated previews for Durga Lal Shrestha Font and Nithya Ranjana / Newa Fonts.
- **Dedicated Subpages**: Added dedicated pages for Resources (`/resources`), Gallery (`/gallery`), and About Us (`/about`).
- **Interactive Resource Cards**: Full-card clickable navigation to anchor sections in `/resources` while allowing direct clicks on specific resource pills.

### Changed
- **Unified Section Ordering**: Reordered resources on both Home page and Resources page to follow a consistent sequence:
  1. Mobile Apps
  2. Fonts (Durga Lal Shrestha Font, Nithya Ranjana / Newa Fonts)
  3. Web Tools (Unicode Converter, Ranjana Webfont, Font Switcher, Transliteration Keyboard)
- **Refined Title Icons**: Replaced raw emojis with clean SVG icons in styled containers for resource categories.
- **Aligned App Thumbnails**: Set mobile app thumbnails to `object-left` so key graphics and app icons are prominently framed.
- **Hero Quick-Nav Pills**: Reordered frosted glass quick-links in the Resources hero section to mirror the updated section hierarchy.

### Fixed
- **Tailwind v4 Theme Specificity**: Migrated custom brand color utilities in `global.css` to `@theme` directives to resolve CSS specificity issues that caused red text on pills in dark mode.
- **CI Dependency Resolution**: Resolved cross-platform lockfile differences (`@emnapi` platform bindings) by tuning npm installation steps in GitHub Actions.

---

## [0.1.0] - 2026-10-03

### Added
- **Initial Static Website**: Original responsive site built with HTML, CSS, and Bootstrap 5.
- **Fonts Section**: Downloads and documentation for Durga Lal Shrestha handwritten font and Newa typefaces.
- **Web Tools Integration**: Links and live embeds for Nepal Lipi Unicode Converter, Ranjana Webfont, and Newa Font Switch Widget.
- **Mobile Apps Release**: Android and iOS download links for Nepal Lipi – Type Newa, Nepal Lipi Keyboard, and Callijatra Calligraphy (v1.0.0-build2).
- **Event Photo Gallery**: Highlights and photo records from calligraphy workshops and cultural events.
