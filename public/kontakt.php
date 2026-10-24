<?php
/**
 * Kontaktformulär för onlineinnovation.se
 * Skickar förfrågan som mejl och (valfritt) till en Make-webhook.
 * Webhook-adressen läggs i filen ../kontakt-config.php UTANFÖR webbroten (httpdocs)
 * så att den aldrig hamnar i GitHub:
 *   <?php return ['make_webhook' => 'https://hook.eu1.make.com/....'];
 */

const TO_EMAIL   = 'info@onlineinnovation.se';
const FROM_EMAIL = 'no-reply@onlineinnovation.se';

function back(string $query): void {
    header('Location: /kontakt/?' . $query, true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    back('');
}

// Spamfälla: människor ser inte fältet
if (!empty($_POST['webbplats'])) {
    back('skickat=ja');
}

$clean = fn($k, $max = 200) => trim(mb_substr(strip_tags((string)($_POST[$k] ?? '')), 0, $max));

$data = [
    'namn'       => $clean('namn'),
    'foretag'    => $clean('foretag'),
    'epost'      => $clean('epost'),
    'telefon'    => $clean('telefon', 40),
    'amne'       => $clean('amne', 80),
    'meddelande' => $clean('meddelande', 5000),
    'tid'        => date('c'),
];

if ($data['namn'] === '' || $data['meddelande'] === '' || !filter_var($data['epost'], FILTER_VALIDATE_EMAIL)) {
    back('fel=1');
}

// Stoppa header-injektion
foreach (['namn', 'epost'] as $k) {
    $data[$k] = str_replace(["\r", "\n"], ' ', $data[$k]);
}

$body = "Ny förfrågan från onlineinnovation.se\n\n"
      . "Namn: {$data['namn']}\n"
      . "Företag: {$data['foretag']}\n"
      . "E-post: {$data['epost']}\n"
      . "Telefon: {$data['telefon']}\n"
      . "Ämne: {$data['amne']}\n\n"
      . $data['meddelande'] . "\n";

$headers = [
    'From: Online Innovation <' . FROM_EMAIL . '>',
    'Reply-To: ' . $data['namn'] . ' <' . $data['epost'] . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$subject = '=?UTF-8?B?' . base64_encode('Förfrågan: ' . $data['amne'] . ' – ' . $data['namn']) . '?=';
$mailOk = @mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers));

// Valfri Make-webhook
$webhookOk = false;
$configFile = dirname(__DIR__) . '/kontakt-config.php';
if (is_file($configFile)) {
    $config = include $configFile;
    if (!empty($config['make_webhook']) && function_exists('curl_init')) {
        $ch = curl_init($config['make_webhook']);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($data, JSON_UNESCAPED_UNICODE),
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 8,
        ]);
        curl_exec($ch);
        $webhookOk = curl_getinfo($ch, CURLINFO_HTTP_CODE) < 300;
        curl_close($ch);
    }
}

back(($mailOk || $webhookOk) ? 'skickat=ja' : 'fel=2');
