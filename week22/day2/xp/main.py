#1

#  o(1)
# for i in range(10):
#     print(i)
#
# o(n^2)
# for i in range(n):
#     for j in range(n):
#         print(i, j)
#
#
# o(log n)
# i = 1
# while i < n:
#     i *= 2
#     print(i)





numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list):

    for i in range(1, len(numbers)):
        while i > 0 and numbers[i] < numbers[i - 1]:
            numbers[i], numbers[i -1] = numbers[i -1], numbers[i]
            i -=1
    return numbers

print(insertion_sort(numbers))





numbers2 = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int):
    low = 0
    high = len(numbers) - 1

    while low <= high:
        mid = (low + high) // 2
        if numbers[mid] < value:
            low = mid + 1
        elif numbers[mid] > value:
            high = mid - 1
        elif numbers[mid] == value:
            return mid; break

    return 'not found'

print(binary_search(numbers2, 3))


