use('Fatec')
db.Pessoas.updateMany(
    {"Ensino Superior": true },
    {$set: {UF: "SP" } }
);