# import  re
# def inpt():
#     name = input('Enter name')
#     price = input('Enter price')
#     rule1 = re.fullmatch(r'^V(?:[A-Z][a-z]*)*(?:\sV(?:[A-Z][a-z]*)*)*$', name)
#
#     rule2 = not re.search(r'(?<=\s)(of|the|and|for|in)(?=\s)', name)
#
#     rule3 = re.search(r'(?=(?:.*[e]){2})^[^0-9]+$', name)
#
#     rule4 = re.fullmatch(r'^\d{2},14$', price)
#
#     return rule1 and rule2 and rule3 and rule4




import json
class Character:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.attributes = self.generate_attributes()

    def generate_attributes(self):
        attributes = {}
        abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

        for ability in abilities:
            dice_rolls = self.roll_dice()
            total_score = sum(dice_rolls) - min(dice_rolls)
            attributes[ability] = total_score

        return attributes

    @staticmethod
    def roll_dice():
        import random
        return sorted([random.randint(1, 6) for _ in range(4)], reverse=True)[0:3]


class Game:
    def __init__(self):
        self.characters = []

    def create_characters(self):
        num_players = int(input("How many players are playing? "))
        for _ in range(num_players):
            name = input("Enter character name: ")
            age = input("Enter character age: ")
            character = Character(name, age)
            self.characters.append(character)

    def export_to_txt(self):
        with open('characters.txt', 'w') as file:
            for character in self.characters:
                file.write(f"Name: {character.name}, Age: {character.age}\n")
                for ability, score in character.attributes.items():
                    file.write(f"{ability}: {score}\n")
                file.write("\n")

    def export_to_json(self):
        data = {'characters': []}
        for character in self.characters:
            char_data = {'name': character.name, 'age': character.age, 'attributes': character.attributes}
            data['characters'].append(char_data)

        with open('characters.json', 'w') as file:
            json.dump(data, file, indent=2)


def main():
    game = Game()
    game.create_characters()
    game.export_to_txt()
    game.export_to_json()
    print("Character information has been exported to characters.txt and characters.json")


if __name__ == "__main__":
    main()




