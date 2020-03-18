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
        "name": "Production 1",
        "currency": "Dirt",
        "expenseScale": 1.1,
        "requiredAmount": "free",
        "levelUpBaseCost": 10,
        "timer": 10,
        "upgrades": [
            {
                "type": 0,
                "value": 0.2,
                "name": "big upgrade",
                "description": "this be a big upgraed that does teh 20% boozt",
                "cost": 10
            },
            {
            "type": 1,
            "value": 0.1,
            "name": "big upgrade",
            "description": "this be a big upgraed that does teh 10 % boozt in speeeeed",
            "cost": 10

            }
        ]
    },
    "1": {
        "name": "Production 2",
        "currency": "Sand",
        "expenseScale": 1.2,
        "requiredAmount": 10,
        "levelUpBaseCost": 100,
        "timer": 10,
        "upgrades": []
    },
    "2": {
        "name": "Production 3",
        "currency": "Wood",
        "expenseScale": 1.5,
        "requiredAmount": 1000,
        "levelUpBaseCost": 1000,
        "timer": 10,
        "upgrades": []
    }
}