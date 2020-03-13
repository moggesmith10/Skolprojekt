<?php

function setSaveGame($token, $newSaveGame){
    $db = new SQLite3("accounts.db");

    $res = $db->query($db->escapeString("UPDATE Accounts SET SaveGame = \"$newSaveGame\" WHERE Token = \"$token\""));

    if($res != false) return true; //$res should be a SQLite3Return if success, not true
    else return false;
    
}