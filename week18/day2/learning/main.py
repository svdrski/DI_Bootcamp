# print((5 + 4) * 10 / 2) #45
#
# print(((5 + 4) * 10) / 2) #45
#
# print((5 + 4) * (10 / 2)) #45
#
# print(5 + (4 * 10) / 2) #25
#
# print(5 + 4 * 10 // 2) #25
#


# print(bin(34))
# #
# # str = '''
# # jgsajg
# # gg
# # 3443
# # g43
# # y
# # jjj  hrfdh
# #
# # '''
# #
# # print(str)


# name = input('Enter name')
# password = input('Password')
#
# pass_len = len(password)
#
# print(f'{name}, your password {'*' * pass_len } is {pass_len} long')


#
# if 2 > 1:
#     print('fsafas')
#
#
# lett = False
#
# result = 'Yess' if lett else 'NOO'
#
# print(result)


# print(not(0))
#
#
# user = {
#     (1,2,3): 'loh',
#     'age': '122'
# }
#
# print( user[1,2,3])


# myset = {1,2,3,4,5,6,6,6,7,6}
#
# new_set = myset.copy()
#
# myset.clear()
#
# print(myset, new_set)
#
# # for _ in range(10, 0, -2):
# #     print('rwrqr')
# #
# #
# # for _ in range(22, 122, 3):
# #     print('rwrqr')
#
#
# print(list(range(10)))


#
# # добавляет индекс к элементу лупа
# for i, ss in enumerate(range(105)):
#     if ss == 50:
#         print(i)
#     # print(i, ss)


mylist = list(range(0,11))

result = 0

for item in mylist:
    result += item

print(result)

