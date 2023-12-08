import random
def throw_dice():
    return  random.randint(1,6)

def throw_until_doubles():
    total = 0
    while True:
        num1 = throw_dice()
        num2 = throw_dice()
        if num2 == num1:
            return total
        else:total +=1

def main():
    result = []
    for i in range(100):
        result.append(throw_until_doubles())
    return (result)

#4
value = main()
print(sum(value))
print(round(sum(value)/len(value), 2))
