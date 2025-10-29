use('Fatec')
db.Pessoas.update(

    {nome: "Fernanda Souza "},
    { $set: {UF: "SP"}}
    
);