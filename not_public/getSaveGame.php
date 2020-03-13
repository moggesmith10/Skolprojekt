<?php

function getSaveGame($token){
    $db = new SQLite3("accounts.db");

    return $db->query($db->escapeString("SELECT SaveGame FROM Accounts WHERE Token = \"$token\""))->fetchArray(SQLITE3_ASSOC); //Queries a sanitized request, fetches as assoc and returns
}