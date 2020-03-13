let token, savegame;
function login(type) {
    username = document.getElementById("usernameInput").Value;
    password = document.getElementById("passwordInput").Value;

    let request = new XMLHttpRequest();

    switch (type) {
        case 1:
            request.open("POST", "API/login.php");
            break;
        case 2:
            request.open("POST", "API/register.php");
            break;
    }
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //Important for some reason?
    request.onload = function () {
        returned = JSON.parse(this.response);
        if (returned["error"]) {
            document.getElementById("tokenDisplay").innerHTML = returned["error"];
        }
        else {
            token = returned["token"];
            document.getElementById("tokenDisplay").innerHTML = "token: " + token;
        }
    }

    request.send("username=" + username + "&password=" + password);
}

function saveSaveGame(){ //epic titles lmao
    request.open("API/setSaveGame.php");
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //Important for some reason?
    request.onload = function(){
        returned = JSON.parse(this.response);
        //do shiz here sometime
    }
    request.send("token=" + token + "&savegame=" + JSON.stringify(savegame));
}