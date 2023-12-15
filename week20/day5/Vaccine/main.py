class Human:
    def __init__(self, id_number, name, age, priority, blood_type, family=[]):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.family = family


    def add_family_member(self, person):
        self.family.append(person)
        person.family.append(self)

class Queue:
    def __init__(self, humans=[]):
        self.humans = humans

    def add_person(self, person):
        if person.age < 60:
            self.humans.append(person)
        else: self.humans.insert(0, person)

    def find_in_queue(self, person):
        return self.humans.index(person)

    def swap(self, person1, person2):
        index1 = self.humans.index(person1)
        index2 = self.humans.index(person2)
        self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]
        return 'Swaped'

    def get_next(self):
        return self.humans.pop(0)

    def get_next_blood_type(self, blood_type):
        for item in self.humans:
            if item.blood_type == blood_type: return self.humans.pop(self.humans.index(item))
        else: return 'Not found'

    def sort_by_age(self):
        self.humans.sort(key=lambda x:x.age > 60)
        self.humans.sort(key=lambda x:( x.priority, x.age), reverse=True)

    def rearrange_queue(self):
        new_queue = []
        families_in_queue = set()

        for person in self.humans:
            if any(member in families_in_queue for member in person.family):
                continue

            new_queue.append(person)
            families_in_queue.update(person.family)

        self.humans = new_queue


person1 = Human(11, 'Alex', 22, False, 'АВ')
person2 = Human(22, 'Bob', 44, True, 'A')
person3 = Human(55, 'ASSA', 66, False, 'A')


print(person2.age)

li = Queue()
li.add_person(person1)
li.add_person(person2)
li.add_person(person3)


print([i.name for i in li.humans])
print(li.get_next().name, 'R$$I$I')

print(li.find_in_queue(person1))
li.swap(person1,person2)
print([i.name for i in li.humans])

print(li.get_next_blood_type('A').name)
print(li.get_next_blood_type('A2'))


print([i.name for i in li.humans])
li.sort_by_age()
print([i.name for i in li.humans])

