#1
my_fav_numbers = {9,1,3,6,7}
my_fav_numbers.update({5,8})

my_fav_numbers.remove(9)
friend_fav_numbers = {2,4,66,44,631,5,3}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# our_fav_numbers = my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)

#2
#No, only create new

#3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#
# basket.remove('Banana')
# basket.remove('Blueberries')
#
# basket.append('Kiwi')
# basket.insert(0, 'Apples')
#
# apples = basket.count("Apples")
# print(apples)
#
# basket.clear()
# print(basket)

#4
# ints = list(range(2, 6))
# floats = ints.copy()
# for i in range(len(floats)):
#     floats[i] -= 0.5
# result = sorted(ints + floats)
# print(result)

#5
# for i in range(21):
#  if i % 2 == 0:  print(i)

#6
# while True:
#     myname = 'Hleb'
#     name = input( 'Enter name')
#     if name.lower() == myname.lower(): print('Win') ; break

#7
# fruits = list(input('Enter fruits with space').lower().split(' '))
# ask = input('Enter one')
# message = 'You chose one of your favorite fruits! Enjoy!' if ask.lower() in fruits else 'You chose a new fruit. I hope you enjoy'
# print(message)

#8
# lst = []
# while True:
#     topping = input('Enter toppint or quit')
#     if not topping  == 'quit':
#         lst.append(topping)
#         print(topping, 'added')
#     else:  print('Price', 10 + 2.5 * len(lst)) ; break

#9
# sum = 0
# while True:
#     age = input('Enter age, or calc to get results')
#     if age == 'calc':
#         print('Sum', sum)
#         break
#     age = int(age)
#     if 3 < age < 12:
#         sum += 10
#     elif age > 12:
#         sum +=15

#10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []

while 'Pastrami sandwich' in sandwich_orders:
    sandwich_orders.remove('Pastrami sandwich')

while len(sandwich_orders) > 0:
    active_sandwitch = sandwich_orders.pop()
    finished_sandwiches.append(active_sandwitch)
    print('I made your ', active_sandwitch)
