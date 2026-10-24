# onlineinnovation.se

Företagssajt för Online Innovation. Ett enda erbjudande: ett system för konferensförsäljning på hotell (annonser per konferenstyp → förfrågan → direktsvar → automatisk uppföljning → mätning av bokat värde). All text på svenska.

Nämn inte Ekenäs Havshotell eller andra kunder som case på sajten; sajten presenterar lösningen.

## Teknik
- Astro (statisk), Tailwind CSS v4 via `@tailwindcss/vite`, `@astrojs/sitemap`.
- Typsnitt: Bricolage Grotesque (rubriker), Instrument Sans (brödtext), IBM Plex Mono (endast dagrapporten i heron).
- Färger definieras som tokens i `src/styles/global.css` (`@theme`). Gul `#fdd444` är varumärkesfärgen från gamla sajten.

## Struktur
- `src/data/site.ts` – kontaktuppgifter, meny, konferenstyper och de fem stegen i flödet.
- `src/layouts/Base.astro` – head, meta, header/footer.
- `src/pages/index.astro`, `sa-fungerar-det.astro`, `om-oss.astro`, `kontakt.astro` – sajtens sidor.
- `src/components/DayReport.astro` – heroelementet (kvittot). Enda animationen på sajten; lägg inte till fler.
- `public/kontakt.php` – formulärhanterare (PHP på Plesk). Make-webhook konfigureras i `../kontakt-config.php` utanför webbroten.
- `public/.htaccess` – 301-omdirigeringar från gamla WordPress-adresser, noindex på `ny.`-subdomänen.

## Deploy
Push till `main` → GitHub Actions (`.github/workflows/deploy.yml`) bygger och lägger `dist/` i grenen `deploy` → Plesk Git hämtar `deploy` automatiskt via webhook.
Commita aldrig byggda filer till `main`.

## Att göra
- Riktig logotyp (`public/images/logo.svg`) i stället för ordmärket i `src/components/Logo.astro`.
- Flytta blogginläggen från gamla sajten till en `/blogg/`-samling och uppdatera omdirigeringen i `.htaccess`.
- Prisuppgifter när paketet är satt.
- Resultatsiffror när systemet har körts en säsong.
