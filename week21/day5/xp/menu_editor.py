from menu_item import MenuItem
from menu_manager import  MenuManager
def show_user_menu():
    value = input("""
    Menu
    -------------
    Add an Item (A)
    Delete an Item (D)
    Update an Item (U)
    Show the Menu (S)
    """)

    if value == 'A':
        add_item_to_menu()
    elif value == 'D':
        remove_item_from_menu()
    elif value == 'U':
        update_item_from_menu()
    elif value == 'S':
        show_restaurant_menu()


def add_item_to_menu():
    print('Add new item to menu')
    name = input('Enter name')
    price = input('Enter price')
    obj = MenuItem(name, price)
    obj.save()
    print('item was added successfully')

def remove_item_from_menu():
    print('Remove item from menu')
    name = input('Enter name')
    obj = MenuItem(name)
    obj.delete()

def update_item_from_menu():
    print('Updatre item from menu')
    name = input('Enter name')
    price = input('Enter price')
    obj = MenuItem(name)
    obj.update(price)
def show_restaurant_menu():
    a = MenuManager()
    a.all_items()

# show_restaurant_menu()
# update_item_from_menu()
# add_item_to_menu()
# remove_item_from_menu()


show_user_menu()