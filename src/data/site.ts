// Centrala uppgifter för hela sajten. Ändra här så uppdateras alla sidor.

export const site = {
  name: 'Online Innovation',
  tagline: 'Digital infrastruktur för besöksnäringen',
  description:
    'Vi kopplar ihop hotellets och restaurangens system, automatiserar administrationen och ger ägaren marginalerna i realtid. Kombinerat med marknadsföring som går att mäta i kronor.',
  email: 'info@onlineinnovation.se',
  hours: 'Mån–fre 09–17',
  instagram: 'https://www.instagram.com/onlineinnovationsverige/',
  facebook: 'https://www.facebook.com/onlineinnovation.se',
};

export const nav = [
  { href: '/tjanster/', label: 'Tjänster' },
  { href: '/marknadsforing/', label: 'Marknadsföring' },
  { href: '/case/', label: 'Case' },
  { href: '/om-oss/', label: 'Om oss' },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  problem: string;
  price: string;
  priceNote: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: 'automation',
    name: 'Zero-Touch Administration',
    short: 'Systemen pratar med varandra, så att personalen slipper flytta data för hand.',
    problem: 'Bokning, kassa, schema och bokföring lever i varsitt system. Någon sitter varje vecka och för över siffror manuellt.',
    price: '25 000–40 000 kr',
    priceNote: 'Fast pris för kartläggning och uppsättning, beroende på antal system.',
    href: '/tjanster/automation/',
  },
  {
    slug: 'dashboard',
    name: "The Operator's Dashboard",
    short: 'Personalkostnad, RevPAR och snittnota per dag, samlat i mobilen.',
    problem: 'Månadsrapporten från redovisningsbyrån kommer den 15:e. Då är det för sent att ändra något i schemat för helgen som redan varit.',
    price: '15 000 kr + 3 000–5 000 kr/mån',
    priceNote: 'Engångsavgift för uppsättning, sedan licens och underhåll per månad.',
    href: '/tjanster/dashboard/',
  },
  {
    slug: 'tech-partner',
    name: 'Fractional Head of Tech',
    short: 'En extern teknikchef för hotell- och restauranggrupper.',
    problem: 'Tech-stacken har vuxit fram system för system. Ingen äger helheten, och avtalen med leverantörerna förhandlas sällan om.',
    price: '15 000–30 000 kr/mån',
    priceNote: 'Månatlig retainer med strategimöte om marginaler varje månad.',
    href: '/tjanster/tech-partner/',
  },
];

export type Case = {
  name: string;
  sector: string;
  url?: string;
  summary: string;
  work: string[];
};

// Casetexterna bygger på beskrivningarna från tidigare sajt.
// Lägg gärna till konkreta resultat (siffror) när kunden godkänt det.
export const cases: Case[] = [
  {
    name: 'Pensionat Ekenäs Koster',
    sector: 'Hotell, konferens och restaurang',
    url: 'https://pekoster.com/sv/konferens',
    summary:
      'Vi sköter hela den digitala marknadsföringen och bygger landningssidorna som annonserna leder till, separat för hotell, konferens och restaurang.',
    work: ['Google Ads', 'Landningssidor', 'Konverteringsoptimering'],
  },
  {
    name: 'Kust Event AB',
    sector: 'Event och konferens',
    url: 'https://kustevent.com/sv/',
    summary:
      'Digital marknadsföring för hela koncernen, främst via Google Ads, och optimering av deras webbplatser för högre konverteringsgrad och bättre synlighet i sök.',
    work: ['Google Ads', 'Sökoptimering', 'Webbdesign'],
  },
  {
    name: 'Rocket Diner',
    sector: 'Restaurang',
    url: 'https://rocketdiner.se/',
    summary:
      'Marknadsstrategi för e-handel tillsammans med kunden och löpande sökoptimering av rocketdiner.se.',
    work: ['Sökoptimering', 'E-handel', 'Strategi'],
  },
  {
    name: 'Plant Art',
    sector: 'E-handel, B2C och B2B',
    url: 'https://plantart.se/',
    summary:
      'En komplett e-handel för konstväxter till både privatkunder och företag. Digital strategi, sökoptimering, Google Ads och utveckling i Shopifys Liquid.',
    work: ['Shopify', 'Google Ads', 'Sökoptimering'],
  },
  {
    name: 'KGH Accountancy & VAT Services',
    sector: 'Redovisning',
    summary:
      'En av våra längsta kundrelationer. Löpande digital marknadsföring, sökoptimering, webbdesign och webbutveckling.',
    work: ['Sökoptimering', 'Webbutveckling', 'Marknadsföring'],
  },
  {
    name: 'Dead By April',
    sector: 'E-handel, artist',
    url: 'https://www.deadbyapril.com/pages/about-us',
    summary: 'En komplett Shopify-butik med specialbyggda funktioner som shoppen behövde.',
    work: ['Shopify', 'Utveckling'],
  },
];
