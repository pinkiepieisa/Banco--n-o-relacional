use("FATECCOTIA");
db.getCollection("POKEMON").insertMany([{
    "#": 1,
    "Name": "Bela",
    "Type 1": "Fairy",
    "Type 2": "Grass",
    "Total": 500,
    "HP": 600,
    "Attack": 1000,
    "Defense": 1000,
    "Sp": {
        " Atk": 900,
        " Def": 800
    },
    "Speed": 100,
    "Generation": 1,
    "Legendary": true
}])