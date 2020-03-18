<?php

function logout($token){
    $db = new SQLite3("../../not_public/accounts.db");

    $res = $db->query($db->escapeString("UPDATE Accounts SET Token = null WHERE Token = \"$token\""));

    if($res != false) return true;
    else return false;
}