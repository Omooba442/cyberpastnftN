<?php

$email = $_POST['email'];

$file = fopen('subscribe.txt', 'a');

fwrite($file, $email . "\n");

fclose($file);

header("Location: index.html");
