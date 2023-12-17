import sqlite3

# import sqlite3
# conn = sqlite3.connect('database.sqlite')
# cursor = conn.cursor()
# print("Opened database successfully")
#
#
# # cursor.execute('''CREATE TABLE EMPLOYEE
# #          (ID INT PRIMARY KEY     NOT NULL,
# #          NAME           TEXT    NOT NULL,
# #          AGE            INT     NOT NULL);''')
# # cursor.close()
#
#
# cursor.execute("INSERT INTO EMPLOYEE (ID,NAME,AGE) \
#       VALUES (22, 'Razi', 14)");
#
#
#
# print(list(conn.execute("SELECT * FROM EMPLOYEE"))
# )

import psycopg2

# DB_NAME = "Hollywood"
# USER = "postgres"
# PASSWORD = "123456"
# HOST = "localhost"
# PORT = "5432" # or 5433

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '123456'
DATABASE = 'Hollywood'


connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )

cursor = connection.cursor()

cursor.execute("SELECT * FROM actors")
output = cursor.fetchall()

print(output)




