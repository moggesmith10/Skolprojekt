<?php

require_once("../../not_public/getSaveGame.php");

$token = filter_input(INPUT_POST, "token");

if ($token != false && $token != "") {

    $res = getSaveGame($token);

    $arr = [];

    while ($row = $res->fetchArray(SQLITE3_ASSOC)) {
        $arr[] = $row; //$arr[] adds into array, unlike just $arr
    }

    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["saveGame" => $arr], JSON_PRETTY_PRINT);
}
else{
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(400);
    echo json_encode(["error" => "no token found"], JSON_PRETTY_PRINT);
}