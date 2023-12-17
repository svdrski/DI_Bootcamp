import psycopg2
from  menu_manager import  MenuManager

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '123456'
DATABASE = 'python'


connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()

# cursor.execute('create table Menu_Items(item_id SERIAL PRIMARY KEY, item_name  VARCHAR(30) NOT NULL, item_price SMALLINT DEFAULT 0)')
# connection.commit()
class MenuItem:
    def __init__(self,name, price=0):
        self.name = name
        self.price = price

    def save(self):
        cursor.execute(f"INSERT INTO Menu_Items (item_name, item_price) VALUES('{self.name}', {self.price}) RETURNING item_id;")
        connection.commit()
        print('Saved')

    def update(self, price):
        cursor.execute(f"Update Menu_Items SET item_price = {price} WHERE item_name = '{self.name}'")
        connection.commit()
        if cursor.rowcount > 0:
            print(f"Updated item with name '{self.name}'")
        else:
            print(f"Item with name '{self.name}' not found")

    def delete(self):
        cursor.execute(f"Delete from Menu_Items WHERE item_name = '{self.name}'")
        connection.commit()
        if cursor.rowcount > 0:
            print(f"Deleted item with name '{self.name}'")
        else:
            print(f"Item with name '{self.name}' not found")


