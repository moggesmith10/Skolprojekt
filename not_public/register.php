<?php
require "univFunctions.php";
function register(string $username, string $password){
    $db = new SQLite3("../../not_public/accounts.db");

    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    $createdTime = date("Y-m-d G:i:s");

    $token = generateRandomString();

    $db->query($db->escapeString("INSERT INTO Accounts(Username, Password_Hash, CreatedDate, PasswordChangeDate, SaveGame, Token)
    VALUES (\"$username\", \"$passwordHash\", \"$createdTime\", \"$createdTime\", \"\", \"$token\")"));

    return $token;
}