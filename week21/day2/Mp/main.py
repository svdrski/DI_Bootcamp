class Character:
    def __init__(self,name, life=20, attack=10):
        self.name = name
        self.life = int(life)
        self.attack = int(attack)

    def basic_attack(self, char):
        char.life - self.attack
        return char



class Druid(Character):
    def __init__(self, name, life, attack):
        super().__init__(name, life, attack)
        print('I am druid, hello')

    def meditate(self):
        self.life += 10
        self.attack -= 2
        print('Meditation complete')

    def animal_help(self):
        self.attack +=5
        print('Attack complete')

    def fight(self, char):
        char.life -= (0.75* self.life + 0.75 * self.attack)
        print('Fight complete')


class Warrior(Character):
    def __init__(self, name, life, attack):
        super().__init__(name, life, attack)
        print('I am Warrior, hello')

    def brawl(self, char):
        char.life -= (2 * self.attack)
        self.life += (0.5 * self.attack)
        print('Brawl')

    def train(self):
        self.life *=2
        self.attack *=2
        print('train')

    def roar(self, char):
        char.attack -= 3
        print('Roar to', char.name)

class Mage(Character):
    def __init__(self, name, life, attack):
        super().__init__(name, life, attack)
        print('I am Mage, hello')

    def curse(self, char):
        char.attack -=2
        print('curse to', char.name)

    def summon(self):
        self.attack +=3
        print('summon')

    def cast_spell(self, char):
        char.life -= self.attack / self.life
        return  print('cast_spell', char.name)



Konod = Druid('Konod', 100, 20)
Borod = Druid('Borod', 80, 80)

Boez = Warrior('Boez', 100, 200)

Antimag = Mage('Antimag', 100, 60)
Konod.fight(Borod)

print(Borod.life)

Borod.meditate()
Borod.meditate()
Borod.meditate()

print(Borod.life)

Boez.brawl(Borod)
print(Borod.life)
Boez.roar(Borod)

print(Boez.life)
Antimag.cast_spell(Boez)
print(Boez.life)
