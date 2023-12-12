#1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals
#
#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())
#
# class Cat():
#     is_lazy = True
#
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def walk(self):
#         return f'{self.name} is just walking around'
#
# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
#
# beng, char, siam = Bengal('beng', 4), Chartreux('char', 2), Siamese('siam', 6)
#
# all_cats = [beng, char, siam]
#
# sara_pets = Pets(all_cats)
#
# sara_pets.walk()


#2
# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight
#
#     def bark(self):
#         return  f'{self.name} is barking'
#
#     def run_speed(self):
#         return self.weight / self.age * 10
#
#     def fight(self, dog):
#          return f'{self.name}' if (dog.run_speed() * dog.weight) < (self.run_speed() * self.weight) else f'{dog.name}'
#
# bos = Dog('Bos', 10, 15)
# Axe = Dog('Axe', 4, 12)
#
# print(Axe.fight(bos))


#4
class Family():
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **child):
        print('Congratulations')
        self.members.append(child)

    def is_18(self, name):
        item = [i for i in self.members if i['name'] == name]
        return True if len(item) and item[0]['age'] > 18 else False

    def family_presentation(self):
        print(f'Family {self.last_name} with members {[list(i.values()) for i in self.members]}')

Bob = Family('Bobs')
Bob.born( name='Michael', age=31, gender="Male", is_child=False)
Bob.born( name='GGGG', age=1, gender="Male", is_child=False)
print(Bob.is_18('ff'))
print(Bob.is_18('Michael'))
Bob.family_presentation()


#5

class TheIncredibles(Family):
    def __init__(self, lastname):
        super().__init__(last_name = lastname)

    def use_power(self, name):
        item = [i for i in self.members if i['name'] == name]
        return item[0]['power'] if len(item) and item[0]['power'] and item[0]['age'] > 18 else 'not over 18 years old'

    def incredible_presentation(self):
        print(f'Here is our powerful family {self.last_name} with members {[list(i.values()) for i in self.members]}')


superr = TheIncredibles('Suoerfamily')
superr.born( name='Michael', age=31, gender="Male", is_child=False, power='fly',incredible_name='MikeFly')

print(superr.use_power('Michael'))

superr.incredible_presentation()