use("FATECCOTIA");
db.POKEMON.find().projection({_id:0, Name:1}).sort({Name: 1});