# jagged_array = [
#     [1,2,3],
#     [4,5],
#     [6,7,8,9]
# ]

# print(jagged_array[0])
# print(jagged_array[2][1])



# # fuction to create a jagged array where  each row i has i + 1 elements


# def create_jagged_array(num_rows):
#     jagged_array = []
#     for i in range(num_rows):
#         row = [j for j in range(i + 1)]
#         jagged_array.append(row)
#     return jagged_array



# jagged_array = create_jagged_array(5)
# for now in jagged_array:
#     print(now)






def reverse_arary(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        arr[left] , arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

    return arr


arr = [1,2,3,4,5,6]
print(reverse_arary(arr))