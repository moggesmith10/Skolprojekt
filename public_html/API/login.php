<?php

include "../../not_public/directory.php";
include $_dir["login"];

$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);

if ($username != null && $password != null) {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["token" => login($username, $password)], JSON_PRETTY_PRINT);
} else {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["error" => "no username or password"], JSON_PRETTY_PRINT);
}
