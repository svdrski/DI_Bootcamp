from game import Game
def get_user_menu_choice():
    values = ['play', 'scores', 'quit']
    value = input('Enter (Play) a new game or Show (Scores) or (Quit)')
    if value.lower() in values:
        return value
    else: print('Wrong value')


def print_results(results):
    print(f'''
    Game results:\n
         You won {results['Win']} times
         You lose {results['Lose']} times
         Draw {results['Draw']} times
    ''')

def main():
    results = {
        'Win':0,
        'Lose':0,
        'Draw':0
    }
    while True:
        choise = get_user_menu_choice()
        if choise == 'quit':print_results(results); break
        if choise.lower() == 'scores': print_results(results)
        game = Game()
        result = game.play()
        results[result] +=1

main()