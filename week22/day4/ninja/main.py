def bubble(arr):
    for i in range(len(arr)):
        for x in range(0, len(arr) - 1):
            if arr[x] > arr[i]:
                arr[x], arr[i] = arr[i], arr[x]
    return arr





print(bubble([5, 2, 9, 1, 5, 6]))



# def sort(arr):
#     if len(arr) <= 1:
#         return arr
#     mid = len(arr)//2
#     left = arr[:mid]
#     right = arr[mid:]
#
#
# def merge_sort(arr):
#     if len(arr) <= 1:
#         return arr
#
#     mid = len(arr) // 2
#     left_half = arr[:mid]
#     right_half = arr[mid:]
#
#     left_half = merge_sort(left_half)
#     right_half = merge_sort(right_half)
#
#     print(left_half, right_half)
#
#
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]

    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)

    return merge(left_half, right_half)

def merge(left, right):
    result = []
    left_idx, right_idx = 0, 0

    while left_idx < len(left) and right_idx < len(right):
        if left[left_idx] < right[right_idx]:
            result.append(left[left_idx])
            left_idx += 1
        else:
            result.append(right[right_idx])
            right_idx += 1

    result.extend(left[left_idx:])
    result.extend(right[right_idx:])

    return result

# Input and Output
input_arr2 = [38, 27, 43, 3, 9, 82, 10]
output_arr2 = merge_sort(input_arr2)
print(f"Input: {input_arr2}")
print(f"Sorted Output: {output_arr2}")

