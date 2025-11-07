import numpy as np 


print(np.__version__, '\n\n\n')


array = np.array([1,2,3,4])

print(array)

print(type(array),'\n')


# To multipy all of the elements by 2 :
# in a normal array it would be: [1,2,3,4,1,2,3,4]  
# which is not what we want

# But by using numpy:
  
array = array * 2

print(array)


