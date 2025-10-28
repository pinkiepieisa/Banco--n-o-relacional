import pandas as pd;
from pymongo import MongoClient;

#Conectar ao MongoDB
client = MongoClient("mongodb://localhost:27017");
db = client["Teste"];
collection = db["Baseball"];

try:

    #Carregar CSV com pandas
    df = pd.read_csv("MLBaseball_All_Star_Game.csv");

    #Converter para dicionário e inserir no MongoDB
    collection.insert_many(df.to_dict(orient="records"));

    print("✔️ Importação concluída com sucesso!");

except Exception as e:

    print(f"❌ Erro na importação: {e}");

finally:

    client.close();
