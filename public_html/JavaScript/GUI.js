function productionGUI(production, values, id) {
    let productionsElement = document.getElementById("productions");
    this.production = production;
    this.values = values;
    this.id = id;

    this.running = false;

    this.levelUpCost = this.production.levelUpBaseCost;
    for (i = 0; i < this.values.level; i++) {//Loop makes cost logarithmic
        this.levelUpCost *= this.production.expenseScale;
    }

    this.updateLevel = function () {
        this.levelUp.innerHTML = "Level up (" + Math.round(this.levelUpCost) + " " + this.production.currency + "), Currently level: " + this.values.level;
    }
    this.updateAmount = function () {
        this.valueAmountText.innerHTML = Math.round(this.values.valueAmount);
    }
    this.breakLine = function () {
        this.element.innerHTML += "<br>";
    }

    this.values.ownedUpgrades.forEach(element => {
        switch (element.type) {
            case "0":
                this.values.valueMultiplier += element.value;
                break;
            case "1":
                this.values.timeMultiploer -= element.value
        }
    });
    this.upgradeElementConstruct = function (nextUpgrade, id, elementId) {
        nextUpgrade.innerHTML = upgradeObj.name + "<br>" + upgradeObj.description + "<br>";
        //JS big bad, no got isset() :,(
        if (typeof (this.values.ownedUpgrades[id]) == "undefined") {
            nextUpgrade.innerHTML += "<div onclick=\"upgrade(" + elementId + ", " + id + ")\">Buy</div>";
        }
        else {
            nextUpgrade.innerHTML += "Owned";
        }
    }

    //Prep element
    this.element = document.createElement("div");
    productionsElement.appendChild(this.element);
    this.element.setAttribute("id", "child" + productionsElement.children.length);
    this.element.setAttribute("class", "production");
    this.element.style.backgroundColor = this.production.colorSecondary;

    //Create HTML
    this.title = document.createElement("div");
    this.title.setAttribute("class", "title");
    this.title.style.backgroundColor = this.production.color;
    this.title.innerHTML = this.production.name;
    this.element.appendChild(this.title);

    //Button
    this.button = document.createElement("div");
    this.button.setAttribute("onclick", "startProd(" + id + ")");
    this.button.setAttribute("class", "ldBar label-center");
    this.button.setAttribute("data-value", "0");
    this.button.setAttribute("data-preset", "circle");

    //this.button.innerHTML = "click";
    this.element.appendChild(this.button);
    this.button.ldBar = new ldBar(this.button);

    //Currency
    this.value = document.createElement("div");
    this.valueAmountText = document.createElement("span");
    this.valueCurrency = document.createElement("span");
    this.value.appendChild(this.valueAmountText);
    this.value.appendChild(this.valueCurrency);
    this.updateAmount();
    this.valueCurrency.innerHTML = " " + this.production.currency;
    this.element.appendChild(this.value);

    //Level up
    this.levelUp = document.createElement("div");
    this.element.appendChild(this.levelUp);
    this.levelUp.setAttribute("onclick", "levelUp(" + this.id + ")");
    this.updateLevel();

    this.upgradeScreen = document.createElement("div");
    this.upgradeScreen.setAttribute("class", "upgradeScreen hidden");
    this.element.appendChild(this.upgradeScreen);

    this.upgradeScreen.closeButton = document.createElement("div");
    this.upgradeScreen.closeButton.innerHTML = "x";
    this.upgradeScreen.closeButton.setAttribute("onclick", "closeUpgradeScreen()");
    this.upgradeScreen.appendChild(this.upgradeScreen.closeButton);
    this.upgradeScreen.closeButton.setAttribute("class", "closeButton");

    this.upgradesElements = [];
    for (i = 0; i < this.production.upgrades.length; i++) {
        nextUpgrade = document.createElement("div");
        upgradeObj = this.production.upgrades[i];
        this.upgradeScreen.appendChild(nextUpgrade);
        this.upgradeElementConstruct(nextUpgrade, i, this.id);
        nextUpgrade.setAttribute("class", "upgradeItem");
        this.upgradesElements.push(nextUpgrade);
    }
    this.upgradeButton = document.createElement("div");
    this.element.appendChild(this.upgradeButton);
    this.upgradeButton.setAttribute("onclick", "showUpgradeScreen(" + this.id + ")");
    this.upgradeButton.innerHTML = "Upgrades";

}