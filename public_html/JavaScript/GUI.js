function productionGUI(production, values, id) {
    let productionsElement = document.getElementById("productions");
    this.production = production;
    this.values = values;
    this.id = id;
    parent = this;

    this.running = false;


    this.levelUpCost = this.production.levelUpBaseCost;
    for(i = 0; i < this.values.level; i++){//Loop makes cost logarithmic
        this.levelUpCost *= this.production.ExpenseScale;
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
}