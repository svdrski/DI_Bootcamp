users = {
    'frolo':'123',
    'kwazi':'1234',
    'esmeral': '3333'
}

logged_in = []

import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '123456'
DATABASE = 'xpgoldpyt'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()


while True:
    value = input('Login or exit')
    if value == 'exit': break
    if value == 'login':
        username = input('Enter username')
        password = input('Enter password')
        cursor.execute(f"select * FROM Users WHERE username = '{username}'")
        user = cursor.fetchone()
        if user == None:
             print('would like to sign up')
             username = input('Enter username')
             password = input('Enter password')
             cursor.execute(f"Insert INTO Users (username, password) VALUES ('{username}', '{password}')")
             connection.commit()
             logged_in.append(username)
             print('success sign up')
             print('you are now logged in')

        elif user[2] == password:
            print('you are now logged in')
            logged_in.append(username)
            break
        else:print('Wrong details')


        # if username not in users.keys():
        #      print('would like to sign up')
        #      username = input('Enter username')
        #      password = input('Enter password')
        #      users[username] = password
        #      logged_in.append(username)
        #      print('success sign up')
        #      print('you are now logged in')
        #
        # elif users[username] == password:
        #     print('you are now logged in')
        #     logged_in.append(username)
        #     break
        # else:print('Wrong details')