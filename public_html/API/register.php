<?php

include "../../not_public/directory.php";
include $_dir["register"];

$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);

header("Content-Type: application/json; charset=UTF-8");
echo json_encode(["token" => register($username, $password)], JSON_PRETTY_PRINT);