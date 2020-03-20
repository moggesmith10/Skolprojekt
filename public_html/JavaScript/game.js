//Generic values, used in saveGame Object
emptyProductionValues = {
    "valueAmount": 0,
    "level": 1,
    "auto": false,
    "valueMultiplier": 1,
    "timeMultiplier": 1,
    "ownedUpgrades": []
}

//Constant values
Productions = {
    "0": {
        "name": "Production 1", //Name of Production
        "currency": "Currency 1", //Name of currency
        "expenseScale": 1.1, //Levelupcost = levelUpCost * expensescale^level (i think, no good at math, logmarithmic atleast)
        "requiredAmount": "free", //Required until vissible and cost of prev production to run once
        "levelUpBaseCost": 10, //Cost for first level up (times expenseScale once, might fix eventually)
        "timer": 1000, //milliseconds
        "color": "#f0000050", //Title background
        "colorSecondary": "#f0000025", //Element background, usually lighter primary color
        "upgrades": [
            {
                "type": 0,
                "value": 0.2,
                "name": "Upgrade 1",
                "description": "This upgrade gives a 20% boost to production, which also entails a 20% increase in maintenance",
                "cost": 10
            },
            {
                "type": 1,
                "value": 0.1,
                "name": "Upgrade 2",
                "description": "This upgrade gives a 10% decrease in production time",
                "cost": 10

            }
        ]
    },
    "1": {
        "name": "Production 2",
        "currency": "Currency 2",
        "expenseScale": 1.2,
        "requiredAmount": 10,
        "levelUpBaseCost": 100,
        "timer": 2000,
        "color": "#00f00050",
        "colorSecondary": "#00f00025",
        "upgrades": []
    },
    "2": {
        "name": "Production 3",
        "currency": "Currency 3",
        "expenseScale": 1.5,
        "requiredAmount": 5,
        "levelUpBaseCost": 1000,
        "timer": 5000,
        "color": "#0000f050",
        "upgrades": []
    }
}