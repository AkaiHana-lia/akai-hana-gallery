# Akai Hana Design Studio

Premium bilingual website for a design studio focused on custom visual artwork, Japanese-inspired art direction, anime, gaming, branding, apparel, album covers and future merchandising.

## Structure

- `index.html`: language-neutral layout, SEO hooks and mounting points.
- `src/i18n/es.json`: Spanish content, design showcase, custom design service, SEO text and form messages.
- `src/i18n/en.json`: English content, design showcase, custom design service, SEO text and form messages.
- `src/styles/styles.css`: responsive visual system, brand hero, animations and lightbox styles.
- `src/scripts/main.js`: language loader, showcase rendering, filters, lightbox, custom design form flow and SEO updates.
- `assets/images/`: hero image and initial artwork collection.
- `assets/logo/`: brand logo assets.
- `assets/icons/`: prepared folder for future icon assets.
- `assets/collections/`: collection cover placeholders.

## Extending the showcase

Add design services or visual concepts inside `gallery.items` in both language files. Keep the same `id`, `categoryId` and image path in each locale, and localize the visible text.

## Service and store-ready points

Each showcase item exposes a stable `id` and a Discord/contact CTA. The custom design form is prepared as a lead-capture flow and can be extended later for store, checkout or commission workflows.

## Brand identity

The homepage now includes a cinematic studio-style hero, five collection cards, a gallery lightbox and prepared asset folders for logo, icons and collection covers.

## Local preview

Because translations are loaded from JSON files, preview the site through a local static server instead of opening `index.html` directly.
