current_player = 'X'


def display_board(board):
    print('*' * 9)
    for i, value in enumerate(board):
        print(' | '.join(value))
        if i > 1: break
        print( '_' * 9)
    print('*' * 9, '\n')


board = [list(' ' for i in range(3)) for x in range(3)]
def checkWinner(board, current_player):
    for i in range(3):
        if (all(board[i][x] == current_player for x in range(3)) or\
                all(board[x][i] == current_player for x in range(3))) or\
                    all(board[i][i] == current_player for i in range(3)) or\
                        all(board[i][2 - i] == current_player for i in range(3)):
            return True
    return False


def game(current_player):
    while True:
        coord = input( f'{current_player} Enter Row and col 1-3 (ex - 1,2) : \n')
        coord = [int(i) - 1 for i in coord.split(',')]
        if board[coord[0]][coord[1]] == ' ':
            board[coord[0]][coord[1]] = current_player
        else:
            print('You LOSE, try to use empty cells!')
            break
        display_board(board)
        if checkWinner(board, current_player):
            print(f'{current_player} WIN')
            break
        current_player = 'O' if current_player == 'X' else 'X'


def play():
    print('Welcome to TIC TAC TOE')
    print('Current player -->', current_player, "\n")
    display_board(board)
    game(current_player)
play()