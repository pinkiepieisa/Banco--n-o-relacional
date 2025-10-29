use('Fatec')
db.Pessoas.insertMany ([
    {"nome": "Fernanda Souza","CPF": 821,"UF": "SP", "Idade": 20, "Sexo": "feminino", "CNH": 331,"Salario": 2500,"Ensino Superior": false},
    {"nome": "Katia Maria", "CPF": 171,"UF": "PR","Idade": 57,"Sexo": "feminino", "Salario": 2100, "Ensino Superior": true},
    {"nome": "Bruno Senna", "CPF": 921,"UF": "SC","Idade": 29, "Sexo": "masculino", "CNH": 431,"Salario": 1100,"Ensino Superior": true},
    {"nome": "Anderson Alves", "CPF": 471,"UF": "SP","Idade": 17, "Sexo": "masculino", "Salario": 800, "Ensino Superior": false}
]);