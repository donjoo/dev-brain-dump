'''
Casting
If you want to specify the data type of a variable, this can be done with casting.

 What is Type Casting?
Type casting means converting one data type to another — for example, 
converting a string to an integer, a float to a string, etc.

Unpacking.
If you have a collection of values in a list, tuple etc. 
Python allows you to extract the values into variables. This is called unpacking.
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits



List Comprehension

List comprehension offers a shorter syntax when you want to create a new list 
based on the values of an existing list.

Indexing
Indexing means accessing elements using their position (index) in a sequence.
Negative indexes allow you to access elements from the end of a sequence.


🔹 What is Slicing?
Slicing means extracting a portion of a sequence using a start:stop:step pattern.


Scope refers to the region of code where a variable is accessible (visible and usable).




🔹 What is an Exception?
An exception is an error that occurs during the execution of a program, which 
interrupts the normal flow.
Examples:
    ZeroDivisionError – dividing by zero
    ValueError – invalid type conversion
    FileNotFoundError – file doesn't exist



🔹 What is the with Statement?
The with statement is used to wrap the execution of a block of code within methods 
defined by a context manager.
It ensures:
    Setup is done before the block runs
    Cleanup (like closing a file) is automatically done after the block runs, 
    even if errors occur


Docstring (Documentation String)
A multi-line string that describes what the function does. It's written right 
below the function definition


🔹 What Is “Call by Sharing”?
Python uses a Call by Sharing (also called Call by Object Reference) mechanism when 
passing arguments to functions.
✅ What It Means:
    Function gets a reference to the same object, not a copy.
    If you modify the object (mutable) inside the function → the change affects the original.
    If you reassign the parameter to a new object → the original remains unchanged.


🔹 What is a Generator?
A generator is a function that behaves like an iterator. Instead of returning all values 
at once, it yields values one by one — only when asked.


 2. What is yield?
    yield pauses the function and remembers its state.
    On next call, it resumes from where it left off.
    Returns a generator object, not final output.




🧨 What is a Stack Overflow?
A stack overflow occurs when your program uses more stack memory 
than is available, usually due to too much recursion.
~A stack overflow happens when a recursive function goes too deep 
without stopping — consuming all the space in the call stack.~
🔹 Why Does This Happen?
Every time a function calls another function (including itself recursively),
 Python adds a stack frame to the call stack — a structure that keeps track 
 of function calls.


The map() function applies a function to each item of an iterable 
(like a list or tuple) and returns a map object (which is iterable).
The filter() function lets you keep only the elements that satisfy a condition.

What is reduce()?
The reduce() function applies a function cumulatively to the items 
of an iterable — reducing it to a single result.
    ✅ You need to import it from the functools module.


🔹 What is eval()?
eval() evaluates a string as a Python expression and returns the result.


🔹 2. Class Methods
    Use @classmethod decorator
    First argument is cls (the class itself)
    Can access/modify class variables, not instance ones.



🔹 What is Method Overriding?
Method Overriding means that a child class redefines a method 
from its parent class with the same name and signature, providing 
its own implementation.
✅ Why Use It?`
To customize or extend the behavior of a method inherited from a parent class.

🔹 What is Method Overloading?
In general (in other languages), method overloading means having multiple 
methods in the same class with the same name but different parameters (number/type).
❗ But in Python?
Python does not support method overloading in the traditional sense because:
    You cannot define multiple methods with the same name.
    Only the last definition overrides the previous ones.
We use default arguments, *args, or @singledispatch to simulate method overloading. 


🔷 What is a Metaclass?
A metaclass is a class that creates classes — just like a class 
creates objects, a metaclass creates classes.
    Objects are instances of classes
    Classes are instances of metaclasses
By default, the metaclass for all classes in Python is type.


📚 What Are Standard Library Modules?
Python’s Standard Library is a collection of built-in modules 
that come pre-installed with Python.


🔹 What is Pickling?
Pickling is the process of converting a Python object into a byte stream so it can be:
    Saved to a file
    Sent over a network
    Stored for later use
The reverse process is called Unpickling.


What is the assert statement?
    assert is used for debugging — it tests a condition, and if the condition is False,
     it raises an AssertionError.
    It’s a way to make sure something must be true at a point in the code.
    Useful for catching bugs early.



✅ What is a Closure?
A closure is a function that remembers the variables from the enclosing scope 
even if that scope is no longer active.
In simpler terms:
    A closure is a nested function that captures non-local variables from its 
    enclosing function.


✅ What is the Ternary Operator?
A ternary operator in Python is a one-liner conditional expression that 
lets you assign a value or return a result based on a condition.
.eg:  status = "Adult" if age >= 18 else "Minor"


Use str() when displaying to end users (clean output).
Use repr() for debugging and logs, or when you want
an output that you can use to recreate the object.


Currying is the process of transforming a function that takes multiple arguments 
into a series of functions that take one argument at a time.
    Instead of:
    f(a, b, c)
    You write:
    f(a)(b)(c)


Operator overloading allows you to define or customize the behavior of 
operators (+, -, *, ==, etc.) for your user-defined objects.


An Enum is a class that lets you define a set of symbolic names (members)
 bound to unique constant values.




✅ What is a Data Class?
A data class is a class primarily used to store data, and Python's @dataclass 
decorator automatically adds special methods like:
    __init__()
    __repr__()
    __eq__()
from dataclasses import dataclass
@dataclass
class Person:
    name: str
    age: int




✅ What is __anext__?
__anext__() is the asynchronous version of the __next__() method.
It's used in asynchronous iterators (usually with async for) and
 returns an awaitable object (like a coroutine)



✅ What is subprocess?
The subprocess module allows you to run system commands 
(like ls, mkdir, or even Python scripts) from within a Python script.
    Think of it as a way to control the terminal/command line from Python.



✅ What are PEPs?
PEP stands for Python Enhancement Proposal.
    It’s a design document providing information, suggestions, or changes 
    for the Python language.




A context manager in Python is anything that implements:
    __enter__() → runs when entering the block
    __exit__() → runs when exiting the block (even on error)
It's used with the with statement to automatically handle setup and cleanup.





'''