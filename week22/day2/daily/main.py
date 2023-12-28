import re
pattern = r"[^(){}\[\]]+"

def checker(value):
    open = ['(', '[', '{']
    close = [')', ']', '}']
    value = list(re.sub(pattern, "", value))
    if len(value )%2 != 0: return False
    i = 0
    while len(value) > 0:
        if value[i] in open:
            symbolindex = open.index(value[i])
            closeindex = value.index(close[symbolindex])
            value.pop(closeindex)
            value.pop(i)
        else: return False
    return True

print(checker('[1 + 2) * (3 - 4)]}'))
print(checker('(1 + 2) * {[(3 / 4) - 5]}'))
print(checker('((1 + 2)'))
print(checker('{[{()}]}'))
