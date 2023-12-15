def asker():
    result = []
    for i in range(5):
        name = input('Enter name')
        age = int(input('Enter age'))
        score = int(input('Enter score'))
        result.append((name, age, score))

    result = sorted(result, key=lambda x: (x[0], int(x[1]), int(x[2])))
    print(result)

asker()