# onlineinnovation.se

Företagssajt för Online Innovation: en paraplysida (startsida) och tre affärsområden med egna landningssidor: /hotell (försäljningsmotor för konferens- och företagsbokningar), /ehandel (från leverantörsfil till publicerad Shopify-produkt) och /automation (integrationer och dashboards). All text på svenska. Strategi och copy finns i dokumentet "Online Innovation – sajtstruktur och erbjudanden".

Nämn inte Ekenäs Havshotell eller andra kunder som case på sajten; sajten presenterar lösningen.

## Teknik
- Astro (statisk), Tailwind CSS v4 via `@tailwindcss/vite`, `@astrojs/sitemap`.
- Typsnitt: Bricolage Grotesque (rubriker), Instrument Sans (brödtext), IBM Plex Mono (endast kvittona i heron).
- Färger som tokens i `src/styles/global.css` (`@theme`). Ljus grund, gul `#fdd444` till knappar och markeringar. Varje område har en egen färg (hotell havsblå, ehandel korall, automation violett) som sätts med `data-area` och läses via `--area` / `--area-soft` (klasserna `area-text`, `area-bg`, `area-soft`, `area-border`). Ingen mörkgrön färg.

## Struktur
- `src/data/site.ts` – kontaktuppgifter, de tre områdena (meny, dörrar, kontaktformulär) och arbetssättet.
- `src/layouts/Base.astro` – head, meta, header/footer.
- `src/layouts/AreaPage.astro` – gemensam mall för områdessidorna: hero med kvitto, problem, flöde, extra, kalkylator, ingår, paket, garanti, frågor, avslut.
- `src/pages/hotell/`, `ehandel/`, `automation/` – områdessidornas innehåll. `index.astro`, `om-oss.astro`, `kontakt.astro` (läser `?omrade=`).
- `src/components/Calculator.astro` – kalkylatorn; formlerna per område ligger i komponentens script.
- `src/components/Receipt.astro` – kvittot i heron på områdessidorna. Enda animationen på sajten; lägg inte till fler.
- `public/kontakt.php` – formulärhanterare (PHP på Plesk). Make-webhook konfigureras i `../kontakt-config.php` utanför webbroten.
- `public/.htaccess` – 301-omdirigeringar från gamla WordPress-adresser, noindex på `ny.`-subdomänen.

## Deploy
Push till `main` → GitHub Actions (`.github/workflows/deploy.yml`) bygger och lägger `dist/` i grenen `deploy` → Plesk Git hämtar `deploy` automatiskt via webhook.
Commita aldrig byggda filer till `main`.

## Att göra
- Riktig logotyp (`public/images/logo.svg`) i stället för ordmärket i `src/components/Logo.astro`.
- Flytta blogginläggen från gamla sajten till en `/blogg/`-samling och uppdatera omdirigeringen i `.htaccess`.
- Prisuppgifter ("från"-pris) när paketen är satta.
- Case och resultatsiffror per område.
