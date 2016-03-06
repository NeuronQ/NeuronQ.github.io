<?php
// Router

require __DIR__ . '/config.php';

$uri = $_SERVER["REQUEST_URI"];
if (!$uri || $uri[0] != '/') $uri = '/' . $uri;

if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)$/', $uri)) {
    return false; // serve the requested resource as-is

} elseif ($uri == '/') {    
    require __DIR__ . '/views/index.php';

} elseif ($uri == '/about.html') {
    require __DIR__ . '/views/about.php';

} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
    require __DIR__ . '/views/404.php';
}
