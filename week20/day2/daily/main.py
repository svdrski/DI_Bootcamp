class Farm():
    def __init__(self,name):
        self.name = name
        self.animals = []
    def add_animal(self, type, count=1):
        for animal in self.animals:
            if type in animal: animal[type] +=1; break
        else: self.animals.append({type: count})
    def get_info(self):
        msg = f'{self.name}\'s farm \n'
        for i in self.animals:
            msg +=f'{list(i.keys())[0]} : {list(i.values())[0]} \n'
        return msg

    def get_animal_types(self):
        return sorted([list(i.keys())[0] for  i in self.animals])

    def get_short_info(self):
        return f'McDonald’s farm has {', '.join(self.get_animal_types())}'




macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

print(macdonald.get_animal_types())
print(macdonald.get_short_info())