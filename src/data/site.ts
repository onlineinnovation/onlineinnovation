// Centrala uppgifter för hela sajten. Ändra här så uppdateras alla sidor.

export const site = {
  name: 'Online Innovation',
  tagline: 'Fler konferensbokningar för hotell',
  description:
    'Ett system för konferensförsäljning på hotell. Annonser som når företag som planerar konferens, förfrågningar som besvaras direkt och uppföljning som sker av sig själv.',
  email: 'info@onlineinnovation.se',
  hours: 'Mån–fre 09–17',
  instagram: 'https://www.instagram.com/onlineinnovationsverige/',
  facebook: 'https://www.facebook.com/onlineinnovation.se',
};

export const nav = [
  { href: '/sa-fungerar-det/', label: 'Så fungerar det' },
  { href: '/om-oss/', label: 'Om oss' },
];

// Konferenstyperna. Varje typ får egna annonser och landningssidor,
// eftersom de söks på olika sätt och bokas av olika personer.
export const conferenceTypes = [
  {
    name: 'Dagkonferens',
    text: 'Möteslokal, teknik och lunch för en dag. Bokas ofta med kort varsel av en assistent eller HR.',
  },
  {
    name: 'Konferens med övernattning',
    text: 'Ett eller flera dygn med rum, middag och aktivitet. Högst ordervärde och längst beslutstid.',
  },
  {
    name: 'Ledningsgrupp och styrelse',
    text: 'Små grupper som vill ha avskildhet och hög service. Återkommer gärna varje år.',
  },
  {
    name: 'Kick-off och teambuilding',
    text: 'Större grupper där aktiviteten säljer platsen. Toppar inför vår och höst.',
  },
];

// Flödet från annons till bokning. Detta är en verklig ordningsföljd.
export const steps = [
  {
    name: 'Synas',
    short: 'Annonser och sidor per konferenstyp',
    text: 'Google Ads och landningssidor för varje typ av konferens. Den som söker dagkonferens möter en annan sida än den som planerar ledningsgruppens internat. Budgeten flyttas mot det som ger bokningar.',
  },
  {
    name: 'Fånga',
    short: 'En förfrågan som ställer rätt frågor',
    text: 'Datum, antal deltagare, rum, mat, teknik och budget samlas in direkt. Säljaren slipper mejla fram och tillbaka för att få grunderna.',
  },
  {
    name: 'Svara',
    short: 'Offertunderlag samma timme',
    text: 'Beställaren får en bekräftelse med prisindikation och nästa steg direkt. Säljaren får ett ifyllt offertunderlag och kan skicka offerten på några minuter.',
  },
  {
    name: 'Följa upp',
    short: 'Påminnelser som går av sig själva',
    text: 'Obesvarade offerter följs upp automatiskt. Företag som konferenserat tidigare får en inbjudan inför nästa säsong, innan de hunnit leta någon annanstans.',
  },
  {
    name: 'Mäta',
    short: 'Bokat värde per annons och vecka',
    text: 'En veckorapport visar förfrågningar, offererat och bokat värde per konferenstyp och kanal. Ni ser vad varje annonskrona gav i konferensintäkt.',
  },
];
