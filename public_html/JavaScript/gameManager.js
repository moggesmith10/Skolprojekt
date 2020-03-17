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
        if (saveGame.productionValues) { //Make sure productionValues is set, else create a new one
            if (saveGame.productionValues[i]) { //If has saved values, assume is unlocked
                productionElements[i] = new productionGUI(Productions[i], saveGame.productionValues[i], i);
                i++;
            }
            else {
                unlockProductions(i); //Else check if next is to be unlocked
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
    updateSaveGame();
    //If free or enough value
    //JSON.parse(JSON.stringify(emptyProductionValues)) is needed to clone and not refer
    if ((Productions[startAt].requiredAmount == "free")) {
        productionElements[startAt] = new productionGUI(Productions[startAt], JSON.parse(JSON.stringify(emptyProductionValues)), startAt);//Create new GUI-element
        saveGame.productionValues[startAt] = emptyProductionValues;//Add new values into savegame
        startAt++;
    }
    else if (saveGame.productionValues[startAt - 1].valueAmount >= Productions[startAt].requiredAmount) {
        productionElements[startAt] = new productionGUI(Productions[startAt], JSON.parse(JSON.stringify(emptyProductionValues)), startAt);//Create new GUI-element
        saveGame.productionValues[startAt] = emptyProductionValues;//Add new values into savegame
        startAt++;
    }
    nextUnlock = startAt;
}
function logOut() {
    updateSaveGame();
    saveSaveGame(saveGame, token);
    discardToken(token);
    token = null; //Clear for safetys sake
    Cookies.set("token", null);
    location.replace("index.html");
}
function startProd(id) {
    prodElement = productionElements[id];

    if (prodElement.running == false) {
        setTimeout(function () { stopProd(id) }, prodElement.production.timer);
        prodElement.running = true;
        prodElement.loading.style.animationDuration = prodElement.production.timer / 1000 + "s";
        prodElement.loading.style.animationPlayState = "initial";
    }
}

function stopProd(id) {
    prodElement = productionElements[id];

    prodElement.values.valueAmount += prodElement.values.level * prodElement.values.multiplier;
    if (prodElement.values.auto) prodElement.startProd();
    prodElement.valueAmountText.innerHTML = prodElement.values.valueAmount;
    prodElement.running = false;
    prodElement.loading.style.animationPlayState = "initial";
    prodElement.loading.style.animationPlayState = "paused";
    unlockProductions(nextUnlock); //Check if next prod is unlocked yet
}
function levelUp(id) {
    prodElement = productionElements[id];

    if (prodElement.values.valueAmount >= prodElement.levelUpCost) {
        prodElement.values.level += 1;
        prodElement.values.valueAmount -= prodElement.levelUpCost;
        prodElement.levelUpCost *= prodElement.production.expenseScale;

        //Round Values
        prodElement.levelUpCost = Math.round(prodElement.levelUpCost * 100) / 100;
        prodElement.values.valueAmount = Math.round(prodElement.values.valueAmount * 100) / 100;

        //Update GUI
        prodElement.valueAmountText.innerHTML = prodElement.values.valueAmount;
        prodElement.updateLevel();
    }
}
function updateSaveGame() {
    for (i = 0; i < productionElements.length; i++) {
        saveGame.productionValues[i] = productionElements[i].values;
    }
}