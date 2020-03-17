<?php

function getSaveGame($token)
{
    $db = new SQLite3("../../not_public/accounts.db");

    return $db->query($db->escapeString("SELECT SaveGame FROM Accounts WHERE token=\"$token\""));
}
