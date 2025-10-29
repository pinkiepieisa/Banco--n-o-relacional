use('Fatec')
db.Pessoas.updateMany(
    { "UF" : "SP", "Ensino Superior": true},
    { $set: { Salario: 8700 } }
);