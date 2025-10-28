use("FATECCOTIA");
db.POKEMON.updateOne(
    {Name: "Bela"},
    {$set: {Name: "Isabela"}}
);