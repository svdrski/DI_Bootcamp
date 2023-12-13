import random

class Game:
    def __init__(self):
        self.options = ['rock', 'paper', 'scissors']
    def get_user_item(self):
        while True:
            value = input('Choose item (r)ock (p)aper (s)cissors')
            if value.lower() in self.options :
                return value

    def get_computer_item(self):
        return random.choice(self.options)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item: return 'Draw'
        if user_item == 'rock' and computer_item == 'scissors' or\
                user_item == 'paper' and computer_item == 'rock' or\
                    user_item == 'scissors' and computer_item == 'paper':
            return 'Win'
        else: return 'Lose'

    def play(self):
        user = self.get_user_item()
        comp = self.get_computer_item()
        result = self.get_game_result(user, comp)
        print(f'You selected {user}. The computer selected {comp}. You {result}')
        return result






