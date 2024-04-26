<?php

$email = $_POST['email'];

$file = fopen('../subscribe.txt', 'a');

fwrite($file,  "\n" . $email . "\n");

fclose($file);

header("Location: ../index.html");
