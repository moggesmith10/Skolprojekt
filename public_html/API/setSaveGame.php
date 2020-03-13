<?php

require "../../not_public/setSaveGame.php";

$token = filter_input(INPUT_POST, "token", FILTER_SANITIZE_STRING);
$saveGame = filter_input(INPUT_POST, "savegame", FILTER_SANITIZE_STRING);

if($token != null & $saveGame != null){
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["sucess" => setSaveGame($token, $saveGame)], JSON_PRETTY_PRINT);
    
}