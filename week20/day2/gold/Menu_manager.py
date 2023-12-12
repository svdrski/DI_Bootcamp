class MenuManager:
    def __init__(self, menu):
        self.menu = menu

    def add_item(self, name, price=0, spice="A", gluten=False):
        self.menu.append({
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten,
        })
        print('Successfuly added')

    def update_item(self, **values):
        item = list(filter(lambda i: i['name'] == values['name'], self.menu))
        if len(item):
            dish = item[0]
            if 'price' in values: dish['price'] = values['price']
            if 'spice' in values: dish['spice'] = values['spice']
            if 'gluten' in values: dish['gluten'] = values['gluten']
        else: print('WAS NOT FOUND IN MENU')

    def remove_item(self, name):
        item = list(filter(lambda i: i['name'] == name, self.menu))
        if len(item):
            self.menu.remove(item[0])
            print('Successfuly deleted')
        else:
            print('WAS NOT FOUND IN MENU TO DELETE')


MyMenu = MenuManager([])

MyMenu.add_item('Soup', gluten=True, price=200)
MyMenu.update_item(name='Soup',price=400, spice='C',  gluten=False)
MyMenu.remove_item('Soup')
print(MyMenu.menu)
