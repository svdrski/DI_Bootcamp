# class Dog():
#     def __init__(self):
#         print('A new dog has been initialized !')
#
#
# shelter_dog = Dog()
# shelter_dog.color = 'Red'
#
# class Cat():
#     def __init__(self, name_of_cat):
#         self.name = name_of_cat
#         print('New cat was created')
#         print(f'His name is{name_of_cat}')
#
#     def printt(self):
#         print(self.name)
#
#     def meow(self):
#         print('{} MEEEEOWWWW'.format(self.name))
#
#     def walk(self, steps):
#         print('{} go to {} steps'.format(self.name, steps))
#
#     def rename(self, name):
#         self.name = name
#
# boby = Cat('Boby')
# # boby.printt()
# #
# # print(boby.name)
#
# boby.meow()
# boby.walk(5)
#
# boby.rename('ROBY')
#
# boby.meow()



# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#
#   def show_details(self):
#     print("Hello my name is " + self.name)
#
# first_person = Person("John", 36)
# first_person.show_details()

# class Computer():
#
#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)
#
# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)
#
# dell_computer = Computer()
#
# Computer.description(dell_computer, "Mark")
# # IS THE SAME AS:
# dell_computer.description("Mark")



# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y
#
# ## create an instance of the class
# p = Point(3,4)
#
# ## access the attributes
# print("p.x is:", p.x)
# print("p.y is:", p.y)



class PlayerCharacters():
    membership = True
    def __init__(self, name='Alex', age=0):
        if(PlayerCharacters.membership):
            self.name = name
            self.age = age

    def run(self):
        print('Run')
        return self

player1 = PlayerCharacters()

print(player1.name)

print(player1.run())

print(player1.membership)