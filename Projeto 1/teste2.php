<?php


$a ='';
$xml = new DOMdocument();
$a = $_FILES['file'] ['tmp_name'];


echo '<pre>';
print_r($a);
echo '<pre/>';


echo '<pre>';
print_r($xml);
echo '<pre/>';



$xml->load($a); // Carrega o XML

// Aqui você pode visualizar o conteúdo
echo "<pre>" . htmlentities($xml->saveXML()) . "</pre>";





?>
