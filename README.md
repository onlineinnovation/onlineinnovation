# onlineinnovation.se

Källkoden till onlineinnovation.se, byggd med Astro och Tailwind CSS.

## Köra lokalt

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # färdiga filer i dist/
```

## Publicering

1. Ändringar pushas till `main`.
2. GitHub Actions bygger sajten och lägger resultatet i grenen `deploy`.
3. Plesk (Git-tillägget) hämtar `deploy` till webbroten via webhook.

## Kontaktformuläret

`public/kontakt.php` skickar förfrågningar till info@onlineinnovation.se. För att även skicka dem till Make, skapa filen `kontakt-config.php` en nivå ovanför webbroten på servern:

```php
<?php return ['make_webhook' => 'https://hook.eu1.make.com/...'];
```
