#o(1)
def first_and_last(numbers: list):
    return numbers[0] + numbers[-1]

print(first_and_last([1,5,4,3,23,5,6,66]))


#o(n)
def duplicates_count(numbers: list):
    result = 0
    for i in numbers:
        if numbers.count(i) == 2: result+=1
    return result // 2

print(duplicates_count([1,5,4,3,23,5,6,66]))


#o(n^2)
def pair_sum_zero(numbers: list):
    result = []
    for i in numbers:
        for x in numbers:
            if i + x == 0:
                result.append([i, x])
                numbers.pop(i)
                numbers.pop(x)
    return result



print(pair_sum_zero([1,5,4,3,23,-5,6,66]))

