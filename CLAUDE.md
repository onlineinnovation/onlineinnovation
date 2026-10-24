# onlineinnovation.se

Företagssajt för Online Innovation: digital infrastruktur (automation, dashboards, extern teknikchef) och marknadsföring för hotell och restauranger. All text på svenska.

## Teknik
- Astro (statisk), Tailwind CSS v4 via `@tailwindcss/vite`, `@astrojs/sitemap`.
- Typsnitt: Bricolage Grotesque (rubriker), Instrument Sans (brödtext), IBM Plex Mono (endast dagrapporten i heron).
- Färger definieras som tokens i `src/styles/global.css` (`@theme`). Gul `#fdd444` är varumärkesfärgen från gamla sajten.

## Struktur
- `src/data/site.ts` – kontaktuppgifter, meny, tjänster (namn, pris, problem) och case. Ändra priser och case här.
- `src/layouts/Base.astro` – head, meta, header/footer.
- `src/layouts/ServicePage.astro` – mall för de tre tjänstesidorna under `src/pages/tjanster/`.
- `src/components/DayReport.astro` – heroelementet (kvittot). Enda animationen på sajten; lägg inte till fler.
- `public/kontakt.php` – formulärhanterare (PHP på Plesk). Make-webhook konfigureras i `../kontakt-config.php` utanför webbroten.
- `public/.htaccess` – 301-omdirigeringar från gamla WordPress-adresser, noindex på `ny.`-subdomänen.

## Deploy
Push till `main` → GitHub Actions (`.github/workflows/deploy.yml`) bygger och lägger `dist/` i grenen `deploy` → Plesk Git hämtar `deploy` automatiskt via webhook.
Commita aldrig byggda filer till `main`.

## Att göra
- Riktig logotyp (`public/images/logo.svg`) i stället för ordmärket i `src/components/Logo.astro`.
- Flytta blogginläggen från gamla sajten till en `/blogg/`-samling och uppdatera omdirigeringen i `.htaccess`.
- Konkreta resultat (siffror) i casen när kunderna godkänt det.
