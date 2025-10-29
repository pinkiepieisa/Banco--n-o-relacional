use('Fatec')
db.Pessoas.find( {
    $or: [
        { "nome": /Va/ },
        { "nome": /Pe/ }
    ]
});