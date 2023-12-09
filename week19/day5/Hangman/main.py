def printMan(index):
    hangman_art = [
        '''
         ------
         |    |
         |
         |
         |
         |
        ---
        '''
        ,
        '''
         ------
         |    |
         |    O
         |
         |
         |
        ---
        '''
        ,
        '''
         ------
         |    |
         |    O
         |    |
         |
         |
        ---
        '''
        ,
        '''
         ------
         |    |
         |    O
         |   /|
         |
         |
        ---
        '''
        ,
        '''
         ------
         |    |
         |    O
         |   /|\\
         |
         |
        ---
        '''
        ,
        '''
         ------
         |    |
         |    O
         |   /|\\
         |   /
         |
        ---
        '''
        ,
        '''
         ------
         |    |
         |    O
         |   /|\\
         |   / \\
         |
        ---
        '''
    ]
    print(hangman_art[index])

import random

wordslist = [ 'rush', 'south']
word = random.choice(wordslist)


activeWord = list((wordslist[random.randint(0, len(wordslist) - 1)]))
hiddenWord = ['*' for i in range(len(activeWord))]
def game():
    mistakes = 0
    while True:

        #check lose
        if mistakes >= 6:
            print('YOU LOSE')
            break

        #check win
        if '*' not  in hiddenWord:
            print('YOU WIN')
            break

        print(hiddenWord)
        letter = input('Enter letter')
        if letter in activeWord:
            for i, value in enumerate(activeWord):
                if value == letter: hiddenWord[i] = letter
        else:
            print('WRONG')
            mistakes +=1
            printMan(mistakes)
game()