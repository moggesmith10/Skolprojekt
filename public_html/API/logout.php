<?php

include "../../not_public/logout.php";

$token = filter_input(INPUT_POST, "token", FILTER_SANITIZE_STRING);

if ($token != null) {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["sucess" => logout($token)], JSON_PRETTY_PRINT);
}
