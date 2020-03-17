function saveSaveGame(savegame, token){ //epic titles lmao
    request = new XMLHttpRequest();
    request.open("POST","API/setSaveGame.php");
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //Important for some reason?
    request.onload = function(){
        returned = JSON.parse(this.response);
        //do shiz here sometime
    }
    request.send("token=" + token + "&savegame=" + JSON.stringify(savegame));
}
function getSaveGame(token){
    
    let request = new XMLHttpRequest();
    request.open("POST" ,"API/getSaveGame.php", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //Important for some reason?
    request.onload = function(){
        saveGame = JSON.parse(JSON.parse(this.response)["saveGame"][0]["SaveGame"]); //Do not do the dare question this
        prepProductions();
    }
    request.send("token=" + token);
}
function discardToken(token){
    let request = new XMLHttpRequest();
    request.open("POST" ,"API/logout.php", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //Important for some reason?
    request.onload = function(){
    }
    request.send("token=" + token);
}