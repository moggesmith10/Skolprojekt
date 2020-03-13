<?php

include "univFunctions.php";

function login(string $username, string $password){
    $db = new SQLite3("../../not_public/accounts.db");

    $res = $db->query($db->escapeString("SELECT * FROM Accounts WHERE Username=\"$username\""));

    $acc = $res->fetchArray(SQLITE3_ASSOC);

    if(password_verify($password, $acc["Password_Hash"])){
        $token = generateRandomString();
        $db->query("UPDATE Accounts SET Token=\"$token\" WHERE ID=$acc[ID]");
        return $token;
    }
    else{
        return false;
    }
}
