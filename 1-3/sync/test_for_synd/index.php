<?php
header('Content-Type: application/x-javascript; charset=utf-8');

sleep(3);

$js = <<<EOM
const p = '<p>from JS with 3 sec. delay</p>';
const currentScript = document.currentScript
if (currentScript) {
    currentScript.insertAdjacentHTML('beforebegin', p);
}
EOM;

if (isset($_GET['dw'])) {
  $js = <<<EOM
const p = '<p>from JS with 3 sec. delay</p>'; 
document.write(p);
EOM;
}

echo $js;