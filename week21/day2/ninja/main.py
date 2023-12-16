# class Temperature:
#     def __init__(self, value):
#         self.value = value
#
# class Celsius(Temperature):
#     def convert(self, target):
#         if isinstance(target, Kelvin):
#             return Kelvin(self.value + 273.15)
#         elif isinstance(target, Fahrenheit):
#             return  Fahrenheit((self.value * 9/5) + 32)
#         else:
#             return target
# class Kelvin(Temperature):
#     def convert(self, target):
#         if isinstance(target, Celsius):
#             return Celsius(self.value - 273.15)
#         elif isinstance(target, Fahrenheit):
#             return  Fahrenheit((self.value - 273.15) * 9/5 + 32)
#         else:
#             return target
#
# class Fahrenheit(Temperature):
#     def convert(self, target):
#         if isinstance(target, Celsius):
#             return Celsius((self.value - 32) * 5/9)
#         elif isinstance(target, Kelvin):
#             return  Kelvin((self.value - 32) * 5/9 + 273.15)
#         else:
#             return target
#
#
#
# cels = Celsius(25)
# kelvs = Kelvin(44)
#
# print(cels.value)
# print(kelvs.value)
#
# celsToKelvs = cels.convert(kelvs)
# print(celsToKelvs.value)
import random


class QuantumParticle:
    def __init__(self, position, momentum, spin):
        self.position = position
        self.momentum = momentum
        self.spin = spin

    def met_position(self):
        self.position =  random.randint(0, 10000)

    def  met_momentum(self):
        self.momentum =   random.randint(0,100) * 0.01

    def spinner(self):
        self.spin = random.choice([0.5, -0,5])


    def __repr__(self):
        return f'QuantumParticle(position={self.position}, momentum={self.momentum}, spin={self.spin})'


    def entangle(self, item):
        self.position = random.randint(0, 10000)
        self.momentum = random.randint(0, 100) * 0.01
        self.spin = random.choice([0.5, -0,5])

        item.position = random.randint(0, 10000)
        item.momentum = random.randint(0, 100) * 0.01
        item.spin = random.choice([0.5, -0, 5])
        print('Particle p1 is now in quantum entanglement with Particle p2')


ss = QuantumParticle(1,2,3)
ff = QuantumParticle(2,3,1)
print(ss)
ss.entangle(ff)
print(ss)

