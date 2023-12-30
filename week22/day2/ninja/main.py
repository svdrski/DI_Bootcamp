
# def factorial(n):
#     print(f"Calling factorial({n})")  # This line will help in debugging
#     if n == 0:  # Base Case
#         return 1
#     else:       # Recursive Case
#         print(n * factorial(n - 1))
#         return n * factorial(n - 1)
#
# print(factorial(5))
# def factorial_with_callback(n, callback=None):
#     result = factorial(n)
#     if callback:
#         callback(result)
#
# def callback_function(result):
#     print(f"The result is: {result}")
#
# factorial_with_callback(5, callback_function)


# n +1 times
# every step - calling with n - 1
# untill n != 0
# return everything that was in recursion


# #o(n)
# def subsetsum(numbers: list, target: int) -> bool:
#     seen = set()
#
#     for num in numbers:
#         complement = target - num
#         if complement in seen:
#             print(f"True: {num}, {complement}")
#             return True
#         seen.add(num)
#
#     print("False")
#     return False
#
#
# #o(n^2)
# def subsetsum(numbers: list, target: int):
#     for i in numbers:
#         for x in numbers:
#             if i + x == target:
#                 return True
#     return False
#
# nums = [12, -7, 20, 1, 4, -10, -1]
#
# print(subsetsum(nums, 1),
# subsetsum(nums, 2),
# subsetsum(nums, 3),
# subsetsum(nums, 4))


# def longest_sequence(nums: list):
#     nums = sorted(nums)
#     result = []
#     current = []
#     for i in range(len(nums)):
#         if i > 0 and  nums[i] == nums[i - 1] + 1:
#             current.append(nums[i])
#         else:
#             current = [nums[i]]
#             result.append(current)
#     return max(result, key=len)
#
# print(longest_sequence([6, 4, 100, 5, 200, 201,202, 2, 3]))


class Superstack():
    def __init__(self):
        self.stack = []

    def push(self, v):
        self.stack.append(int(v))
        self.printTop()

    def pop(self):
        self.stack.pop()
        self.printTop()

    def inc(self, i, v):
        for x in range(i):
            self.stack[x] += v
        self.printTop()

    def printTop(self):
        print(self.stack[-1])

    def show(self):
        print(self.stack)


a = Superstack()

a.push(3)
a.push(3)

a.push(3)

a.inc(2, 55)

a.pop()

a.show()