let saveGame, productionElements = [], nextUnlock;

function loaded() {

    //Check if logged in
    if (Cookies.get("token") == undefined) {
        alert("Not logged in. Returning to login page...");
        window.location.replace("index.html");
    }
    token = Cookies.get("token");

    //Get saveGame
    saveGame = getSaveGame(token);
}


function prepProductions() {
    let i = 0;
    //Load unlocked productions
    while (true) {
        if (saveGame.productionValues) {
            if (saveGame.productionValues[i]) {
                productionElements[i] = new productionGUI(Productions[i], saveGame.productionValues[i], i);
                i++;
            }
            else {
                unlockProductions(i);
                break;
            }
        }
        else {
            saveGame.productionValues = {};
            unlockProductions(i);
            break;
        }
    }
}
function unlockProductions(startAt) {
    //If free or enough value
    if ((Productions[startAt].RequiredAmount == "free")) {
        productionElements[startAt] = new productionGUI(Productions[startAt], emptyProductionValues, startAt);//Create new GUI-element
        saveGame.productionValues[startAt] = emptyProductionValues;//Add new values into savegame
        startAt++;
    }
    else if (saveGame.productionValues[startAt - 1].ValueAmount >= Productions[startAt].RequiredAmount) {
        productionElements[startAt] = new productionGUI(Productions[startAt], emptyProductionValues, startAt);//Create new GUI-element
        saveGame.productionValues[startAt] = emptyProductionValues;//Add new values into savegame
        startAt++;
    }
    nextUnlock = startAt;
}
function logOut() {
    for (i = 0; i < productionElements.length; i++) {
        saveGame.productionValues[i] = productionElements[i].values;
        saveSaveGame(saveGame, token);
        discardToken(token);
        location.replace("index.html")
    }
}
function startProd(id){
    if(productionElements[0].running == false){
    setTimeout(function(){ stopProd(id)}, productionElements[id].production.Timer);
    productionElements[0].running = true;
    }
}

function stopProd(id){
    prodElement = productionElements[id];
    prodElement.values.ValueAmount += prodElement.values.Level * prodElement.values.Multiplier;
    if (prodElement.values.Auto) prodElement.startProd();
    prodElement.valueAmountText.innerHTML = prodElement.values.ValueAmount;
    prodElement.running = false;
    unlockProductions(nextUnlock);
}