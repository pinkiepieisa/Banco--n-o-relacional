use('Fatec')
db.Pessoas.updateMany(

    {Salario: {$lte: 2000 }},
    {$set: {Salario: 4000 }}
    
);