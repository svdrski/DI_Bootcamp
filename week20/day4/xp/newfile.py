#4

import random

from  main import  Dog
from  main import  Axe

class PetDog(Dog):
    def __init__(self,name, age, weight, trained=False):
        super().__init__(name= name, age=age, weight=weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *dogs):
            print(f'{ ', '.join([i.name for i in dogs])} all play together')

    def do_a_trick(self):
        sents = [f'{self.name} does a barrel roll', f'{self.name} stands on his back legs', f'{self.name} shakes your hand',f'{self.name} plays dead']
        return sents[random.randint(0, len(sents) - 1)]
x = PetDog('Bubs', 12, 200)

print(x.do_a_trick())
x.play(Axe)
