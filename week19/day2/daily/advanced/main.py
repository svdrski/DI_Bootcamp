import random
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
# list_of_numbers = [i for i in range(20000)]

target_number   = 3728


result = 0
for value in list_of_numbers:
        for i in list_of_numbers:
                if i <= value and i + value == target_number:
                    result +=1

print(result)