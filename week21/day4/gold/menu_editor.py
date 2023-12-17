from  menu_manager import  MenuManager

def load_manager(name):
    name = MenuManager()
    return name

def add_item_to_menu(manager):
    name = input('Enter item name')
    price = input('Enter item price')
    manager.add_item(name, price)
    print('item was added successfully')

def remove_item_from_menu(manager):
    item = input('Enter item')
    result = manager.remove_item(item)
    if result:print('message to let the user know this was completed')
    else: print('message which states that there was an error')

def show_restaurant_menu(manager):
    manager.printMenu()




def showMenu(manager):
    value = input('''
           Menu
       (a) Add an item
       (d) Delete an item
       (v) View the menu
       (x) Exit
       ''')

    if value == 'a':
        add_item_to_menu(manager)
    elif value == 'b':
        remove_item_from_menu(manager)
    elif value == 'v':
        show_restaurant_menu(manager)
    elif value == 'x':
        manager.save_to_file()
        return False
    return True


def show_user_menu():
    manager = input('Enter your name')
    manager = load_manager(manager)
    while showMenu(manager):
      pass





show_user_menu()