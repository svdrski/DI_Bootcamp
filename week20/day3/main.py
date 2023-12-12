# # class Animal():
# #      def __init__(self, type, number_legs, sound):
# #          self.type = type
# #          self.number_legs = number_legs
# #          self.sound = sound
# #
# #      def make_sound(self):
# #          print(f"I am an animal, and I love saying {self.sound}")
# #
# #
# #
# # class Dog(Animal):
# #     pass
# #
# # rex= Dog("dog", 4, "wouaf")
# #
# # rex.make_sound()
# #
# #
# #
# # class Circle:
# #     color = "red"
# #
# # class NewCircle(Circle):
# #     color = "blue"
# #
# # nc = NewCircle
# # print(nc.color)
# #
# #
# #
# # class Circle:
# #     def __init__(self, diameter):
# #       self.diameter = diameter
# #
# #     def grow(self, factor=2):
# #         """grows the circle's diameter by factor"""
# #         self.diameter = self.diameter * factor
# #
# # class NewCircle(Circle):
# #     def grow(self, factor=2):
# #         """grows the area by factor..."""
# #         self.diameter = (self.diameter * factor * 2)
# #
# # nc = NewCircle(1)
# # print(nc.diameter)
# #
# # nc.grow()
# #
# # print(nc.diameter)
# #
# #
# # class Parent:
# #     def __init__(self, name):
# #         self.name = name
# #
# # class Child(Parent):
# #     def __init__(self, name, age):
# #         # Вызываем инициализатор родительского класса
# #         super().__init__(name)
# #         # Добавляем дополнительную логику для инициализации подкласса
# #         self.age = age
# #
# # # Пример использования
# # child_obj = Child(name="John", age=25)
# #
# # print(child_obj.name)  # Выведет: John
#
#
# class Door():
#     def __init__(self, open=True):
#         self.is_opened = open
#
#     def open_door(self):
#         if self.is_opened:
#             print('Door opened')
#         else:
#             self.close_door()
#
#     def close_door(self):
#         print("DOOR CLOSE")
#
#
# class BlockedDoor(Door):
#     def __init__(self):
#         super().__init__(False)
#
#
# d = BlockedDoor()
#
# d.open_door()

# class A():
#
#     def dothis(self):
#         print("doing this in A")
#
#
# class B(A):
#     pass
#
#
# class C():
#     def dothis(self):a
#         print("doing this in C")
#
#
# class D(B, C):
#     pass
#
# d_instance = D()
# d_instance.dothis()