import numpy as np
#
# array = np.array([1, 2, 3, 4, 5])
#
#
# dob = array * 2
#
# print(dob)
#
# fe = np.array([1,2,3,33,])
# print(fe)
#
#
#
# arrr = np.arange(10,21)
# print(arrr.ndim)
# print(arrr.shape)
# print(arrr.size)
# print(arrr.dtype)
#
# float = np.array(arrr, dtype=float)
# print(float)
# float *=2
#
# print(float)



# array_2d = np.array([[1, 2, 3], [4, 5, 6]])
#
# # Access element at row 1 and column 2
# print(array_2d[1, 2])  # Output: 6



# arrr = np.arange(10,21)
# print(arrr[3])
#
# array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# print(array_2d[1,2])
#
# arrr = np.arange(0,10)
# print(arrr[2:6])
#
# array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
#
# print(array_2d[:2, -2:])



val = np.arange(20,31)
val = np.arange(10,21,2)
val = np.linspace(0, 1, 5)
val = np.random.rand(2)
val = np.random.randint(0, 10, 4)

print(val)

identity_matrix = np.eye(10)
print(identity_matrix)