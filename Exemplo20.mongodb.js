use('Fatec')
db.Pessoas.find(

    {Salario: { $lte: 2000 }}

);