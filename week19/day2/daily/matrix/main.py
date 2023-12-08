strng = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

matrix = [list(row) for row in strng.split('\n')]
result = []

for i in range(len(matrix[0])):
    lastSpase = False
    for row in  matrix:
        if row[i].isalpha():
            result.append(row[i])
        elif lastSpase:
            lastSpase = False
        else:
            result.append(' ')
            lastSpase = True
print(''.join(result))


