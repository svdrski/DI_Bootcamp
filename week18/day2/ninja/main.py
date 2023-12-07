# >> > 3 <= 3 < 9 T
# >> > 3 == 3 == 3 T
# >> > bool(0) F
# >> > bool(5 == "5") F
# >> > bool(4 == 4) == bool("4" == "4") T
# >> > bool(bool(None)) F


x = (1 == True)  #t
y = (1 == False) #f
a = True + 4 #5
b = False + 10 #10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)


#2

my_text = '''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit
           esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum.'''


print(len(my_text))

#3

longest = ''
while True:
    word = input('Ener word')
    if 'a' in word.lower(): print('Error - !A!')
    if len(word) > len(longest): longest = word; print('BEST')
    print(longest)