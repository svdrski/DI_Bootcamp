#1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
#
# cat1 = Cat('Kit', 4)
# cat2 = Cat('Pes', 5)
# cat3 = Cat('Kup', 6)
#
# cats = [cat1, cat2, cat3 ]
# oldest = max(cats, key= lambda cat: cat.age)
# print(f'The oldest cat is {oldest.name}, and is {oldest.age} years old')


#2
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#
#     def bark(self):
#         print(f'{self.name} goes Wooff')
#
#     def jump(self):
#         print(f'{self.name} jumps {self.height * 2} cm high')
#
#
# davids_dog = Dog('Rex', 50)
# print(davids_dog.name, davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()
#
# sarahs_dog = Dog('Teacup', 20)
# print(sarahs_dog.name, sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()
#
# if sarahs_dog.height > davids_dog.height:
#     print(sarahs_dog.name)
# else:print(davids_dog.name)


#3

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         for i in self.lyrics:
#             print(i)
#
# stairway = Song(
#     ["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
#
# stairway.sing_me_a_song()


#4

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if self.animals.count(new_animal) < 1 : self.animals.append(new_animal)

    def get_animals(self):
        for i in self.animals:
            print(i)

    def sell_animal(self, animal_sold):
        self.animals = [item for item in self.animals if item != animal_sold]

    def sort_animals(self):
        self.animals = sorted(self.animals)
        result = []
        for i in self.animals:
          arr = [x for x in self.animals if x[0] == i[0]]
          if arr not in result: result.append(arr if len(arr) > 1 else i)
        for i in  result:
            print(i)


ramat_gan_safari = Zoo('ramat_gan_safari')
ramat_gan_safari.add_animal('Lion')
ramat_gan_safari.add_animal('Ape')
ramat_gan_safari.add_animal('Baboon')
ramat_gan_safari.add_animal('Bear')
ramat_gan_safari.add_animal('Cat')
ramat_gan_safari.add_animal('Cougar')
ramat_gan_safari.add_animal('Co3ugar')
ramat_gan_safari.sell_animal('Lion')
# ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()

