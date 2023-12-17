import random
import  requests
import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '123456'
DATABASE = 'countries'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()

data = requests.get('https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population')
result = random.sample(data.json(),10)

query = ''
for index, i in enumerate(result):
    query += f"('{i['name']['common']}', '{i['capital'][0]}', '{i['flag']}', '{i['subregion']}', '{i['population']}'), "

query = query[:-2]

print(result)
print(query)

cursor.execute(f"INSERT INTO Countries (name, capital, flag, subregion, population) VALUES {query}")
connection.commit()

