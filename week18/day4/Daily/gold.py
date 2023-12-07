from  datetime import  datetime

cur_date = datetime.now()
date = input('Enter birth date as DD/MM/YYYY')
try:
    inp_date = datetime.strptime(date, '%d/%m/%Y')
    age = int((cur_date - inp_date).days/365)
    candles = age % 10
    print(f'''
          {'_' * int(((13 - candles) /2))}{'i' * candles}{'_' * int(((13 - candles) /2))}
          |:H:a:p:p:y:|
        __|___________|__
       |^^^^^^^^^^^^^^^^^|
       |:B:i:r:t:h:d:a:y:|
       |                 |
       ~~~~~~~~~~~~~~~~~~~

    ''')
except ValueError:
    print('Errorrr')


