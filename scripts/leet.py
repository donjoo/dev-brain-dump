"""  remove duplicates from an iterable without using list, 
set, or dict by utilizing generators and tuples."""




def remove_duplicates(iterable):
    seen = ()
    for item in iterable:
        if item not in seen:
            seen += (item,)
            yield item
    print(seen)


data = (1,2,3,4,2,1,6,2,4)
unique_data = tuple(remove_duplicates(data))
print(unique_data)




# Solution (Modifying the input in-place):



def remove_duplicates_inplace(arr):
    i = 0
    while i < len(arr):
        j = i + 1
        while j < len(arr):
            if arr[j] == arr[i]:
                del arr [j]
            else:
                j += 1
        i += 1

data = [1,2,3,4,2,1,7,7,9,6,2,4]
remove_duplicates_inplace(data)
print(data)





# Duck typing



def make_it_speak(animal):
    return animal.speak()



class Dog:
    def speak(self):
        return "woof"
    
class Cat:
    def speak(self):
        return "Meow!"



class Duck:
    def speak(slef):
        return "quack"



print(make_it_speak(Dog()))
print(make_it_speak(Cat()))
print(make_it_speak(Duck()))









def sum_n_recursion(n):
    if n == 0:
        return 0
    return n + sum_n_recursion(n - 1)


print(sum_n_recursion(10))







# fibonacii


def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

result = list(fibonacci(50))
print(result)  # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





def fibonacci_iter(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1


    a, b = 0,1
    for _ in range(2, n + 1):
        a, b = b ,  a + b

    return b




# factorial iterative

def factorial_iterative(n):
    result = 1
    for i in range(2,n+1):
        result *= i
    return result



def factorial_recursive(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

print(factorial_recursive(5))  # Output: 120






#  is Prime?



