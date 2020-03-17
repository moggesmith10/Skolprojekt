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

    this.updateLevel = function(){
        this.levelUp.innerHTML = "Level up (" + this.levelUpCost + " " + this.production.currency + "), Currently level: " + this.values.level;
    }

    //Prep element
    this.element = document.createElement("div");
    productionsElement.appendChild(this.element);
    this.element.setAttribute("id", "child" + productionsElement.children.length);
    this.element.setAttribute("class", "production");

    //Create HTML
    //Button
    this.button = document.createElement("div");
    this.button.setAttribute("onclick", "startProd(" + id + ")");
    this.button.innerHTML = "click";
    this.element.appendChild(this.button);

    //Currency
    this.value = document.createElement("div");
    this.valueAmountText = document.createElement("span");
    this.valueCurrency = document.createElement("span");
    this.value.appendChild(this.valueAmountText);
    this.value.appendChild(this.valueCurrency);
    this.valueAmountText.innerHTML = this.values.valueAmount;
    this.valueCurrency.innerHTML = " " + this.production.currency;
    this.element.appendChild(this.value);

    //Level up
    this.levelUp = document.createElement("div");
    this.element.appendChild(this.levelUp);
    this.levelUp.setAttribute("onclick", "levelUp(" + this.id + ")");
    this.updateLevel();

    this.loading = document.createElement("div");
    this.loading.setAttribute("class", "loading");
    this.element.appendChild(this.loading);
    this.loading.style.animationPlayState = "paused";
}