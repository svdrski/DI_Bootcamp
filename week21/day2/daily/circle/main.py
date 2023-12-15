class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        else:
            self.radius = diameter // 2
            self.diameter = diameter

    def __repr__(self):
        return (f'{self.__class__.__name__}: Radius: {self.radius}, Diameter: {self.diameter}')

    def __add__(self, other):
        return Circle(radius=(self.radius + other.radius))

    def __gt__(self, other):
        return self.radius > other.radius\

    def __eq__(self, other):
        return self.radius == other.radius

    @staticmethod
    def sort(list):
        return  sorted(list, key=(lambda x: x.radius))



krug = Circle(diameter=66)
krug2 = Circle(radius=22)

print(krug.radius, krug.diameter)
print(krug)
print(krug2)
krug3 = krug2 + krug
krug5 = krug2 + krug


print(krug3)
print(krug5)

print('krug > krug3', krug > krug3)
print('krug = krug3', krug == krug3)
print('krug5 = krug3', krug5 == krug3)

listt = [krug, krug2, krug3, krug5]

print(Circle.sort(listt))

import turtle
turtle.speed(1)
for circle in listt:
    turtle.circle(circle.radius)
turtle.done()