function productionGUI(production, values, id) {
    let productionsElement = document.getElementById("productions");
    this.production = production;
    this.values = values;
    this.id = id;

    this.running = false;

    this.levelUpCost = this.production.levelUpBaseCost;
    for (i = 0; i < this.values.level; i++) {//Loop makes cost logarithmic
        this.levelUpCost *= this.production.ExpenseScale;
    }
    this.levelUpFunc = function () {
        if (this.values.ValueAmount >= this.levelUpCost) {
            this.values.Level += 1;
            this.values.ValueAmount -= this.levelUpCost;
            this.levelUpCost *= this.production.ExpenseScale;

            //Round Values
            this.levelUpCost = Math.round(this.levelUpCost * 100) / 100;
            this.values.ValueAmount = Math.round(this.values.ValueAmount * 100) / 100;

            //Update GUI
            this.valueAmountText.innerHTML = this.values.ValueAmount;
            this.updateLevel();
        }
    }
    this.updateLevel = function(){
        this.levelUp.innerHTML = "Level up (" + this.levelUpCost + " " + this.production.Currency + "), Currently level: " + this.values.Level;
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
    this.valueAmountText.innerHTML = this.values.ValueAmount;
    this.valueCurrency.innerHTML = " " + this.production.Currency;
    this.element.appendChild(this.value);

    //Level up
    this.levelUp = document.createElement("div");
    this.element.appendChild(this.levelUp);
    this.levelUp.setAttribute("onclick", "levelUp(" + this.id + ")");
    this.updateLevel();
}