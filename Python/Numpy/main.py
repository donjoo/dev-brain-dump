import numpy as np 


print(np.__version__, '\n\n\n')



# To multipy all of the elements by 2 :
# in a normal array it would be: [1,2,3,4,1,2,3,4]  
# which is not what we want

# But by using numpy:
  
array = np.array([1,2,3,4])

print(array)

print(type(array),'\n')

array = array * 2

print(array)

print("\n\n\n<-----Multidimensional array----->\n\n\n")

array1 = np.array([[['A','B','L'],['C','D','J'],['P','Q','R']],[['E','F','K'],['G','H','M'],['I','N','O']]])

print(array1.ndim)
print(array1.shape)


word = array1[0,1,1] + array1[1,2,2] + array1[1,2,1]
print('the word is')
print(word)

