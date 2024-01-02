#1

def recursive_sum(input_list):
    if not  input_list:
        return 0
    else:
        return input_list[0] + recursive_sum(input_list[1:])


print(recursive_sum([2, 4, 5, 6, 7]))



#2

def reverse_string(input_string):
    if len(input_string) < 1:
        return input_string
    else:
        return reverse_string(input_string[1:]) + input_string[0]


print(reverse_string('Hello World'))



def power(base, exponent):
    if exponent == 0:
        return 1
    else: return base * power(base, exponent - 1)


print(power(2,3))