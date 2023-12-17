import json


class MenuManager:
    def __init__(self):
        with open('restaurant_menu.json', 'r') as file:
            self.menu = json.loads(file.read())

    def add_item(self, name, price):
        self.menu['items'].append({"name": name, 'price': price})

    def remove_item(self, name):
        for i, item in enumerate(self.menu['items']):
            if item['name'] == name:
                del self.menu['items'][i]
                return True
        return False

    def save_to_file(self):
        with open('restaurant_menu.json', 'w') as file:
            json.dump(self.menu, file)
            print('Saved')

    def printMenu(self):
        print(self.menu)




# s = MenuManager()
# s.add_item('ffff','3333')
# print(s.menu)
#
# print(s.remove_item('Vegetable soup'))
# print(s.menu)

# s.save_to_file()
