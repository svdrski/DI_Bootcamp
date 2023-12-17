import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '123456'
DATABASE = 'python'


connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()
class MenuManager:
    def get_by_name(self, name):
       cursor.execute(f"SELECT * FROM Menu_Items WHERE item_name = '{name}'")
       value = cursor.fetchone()
       print(value)

    def all_items(self):
        cursor.execute(f"SELECT * FROM Menu_Items")
        value = cursor.fetchall()
        print(value)
