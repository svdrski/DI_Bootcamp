#1
# for i in range(8):
#     message = 'Hello world' if i < 4 else "I love python"
#     print(message)

#2
month = int(input('Enter month'))
season = 'Spring' if 3 <= month  <= 5 else\
    ( "Summer" if 6 <= month  <= 8 else
      ( 'autumn' if 9<= month <=11 else 'winter' ))
print(season)