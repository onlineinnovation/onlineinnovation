// Centrala uppgifter för hela sajten. Ändra här så uppdateras alla sidor.

export const site = {
  name: 'Online Innovation',
  tagline: 'Mindre administration. Mer affär.',
  description:
    'Online Innovation bygger automatiserade system som tar hand om försäljning och administration, för hotell, e-handlare och företag som är trötta på att göra samma sak två gånger.',
  email: 'info@onlineinnovation.se',
  hours: 'Mån–fre 09–17',
  instagram: 'https://www.instagram.com/onlineinnovationsverige/',
  facebook: 'https://www.facebook.com/onlineinnovation.se',
};

export type AreaKey = 'hotell' | 'ehandel' | 'automation';

// De tre affärsområdena: används av menyn, startsidans dörrar, sidfoten och kontaktformuläret.
export const areas: { key: AreaKey; href: string; label: string; door: string; doorText: string; who: string }[] = [
  {
    key: 'hotell',
    href: '/hotell/',
    label: 'Hotell',
    door: 'Fler konferens- och företagsbokningar',
    doorText: 'Förfrågningar som besvaras direkt och följs upp tills de är bokade.',
    who: 'För fristående hotell och herrgårdar',
  },
  {
    key: 'ehandel',
    href: '/ehandel/',
    label: 'E-handel',
    door: 'Från leverantörsfil till publicerad produkt',
    doorText: 'Produktsidor med text, SEO och översättning på minuter i stället för dagar.',
    who: 'För e-handlare på Shopify',
  },
  {
    key: 'automation',
    href: '/automation/',
    label: 'Automation',
    door: 'Sluta flytta data för hand',
    doorText: 'Vi kopplar ihop era system och samlar er data där ni behöver den.',
    who: 'För företag i alla branscher',
  },
];

export const nav = [...areas.map((a) => ({ href: a.href, label: a.label })), { href: '/om-oss/', label: 'Om oss' }];

export const contactHref = (area?: AreaKey) => (area ? `/kontakt/?omrade=${area}` : '/kontakt/');

// Så arbetar vi, gemensamt för alla områden (verklig ordningsföljd).
export const method = [
  { name: 'Genomgång', text: 'Vi går igenom hur det fungerar idag, vilka system ni har och var tiden och pengarna försvinner.' },
  { name: 'Uppsättning', text: 'Vi bygger flödena på era befintliga system och testar dem med riktig data innan något går live.' },
  { name: 'Drift', text: 'Vi övervakar, rättar när en leverantör ändrar något och bygger vidare när ni växer.' },
];
