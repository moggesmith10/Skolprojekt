<?php

function setSaveGame($token, $newSaveGame){
    $db = new SQLite3("../../not_public/accounts.db");

    $query = ("UPDATE Accounts SET `SaveGame` = '$newSaveGame' WHERE `Token` = \"$token\"");
    //echo ($query);
    $res = $db->query($query);

    if($res != false) return true; //$res should be a SQLite3Return if success, not true
    else return false;
    
}