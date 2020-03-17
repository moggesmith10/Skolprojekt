let token, savegame;
function login(type) {
    username = document.getElementById("usernameInput").value;
    password = document.getElementById("passwordInput").value;

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
            Cookies.set("token", token);
            window.location.replace("game.html");
        }
    }

    request.send("username=" + username + "&password=" + password);
}

