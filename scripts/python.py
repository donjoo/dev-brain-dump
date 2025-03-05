#hours since new year


from datetime import datetime
def hour_since_newyear():
    now = datetime.now()
    new_year = datetime(now.year,1,1,0,0,0)
    return (now - new_year).total_seconds() / 3600

print(hour_since_newyear())




# make a decrator , so that a function can be only be runnable once
import functools
def run_only_once(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        if wrapper.has_run:
            raise RuntimeError(f"{func.__name__} can only be run once.")
        wrapper.has_run  = True
        return func(*args, **kwargs)
    wrapper.has_run = False
    return wrapper



@run_only_once
def function():
    print('hey bro')


function()
# function()




# Date formating...
from datetime import timedelta


formated_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
print(type(formated_date))

ff = datetime.strptime(formated_date, "%Y-%m-%d %H:%M:%S")
print(type(ff), ff)


now = datetime.now()
future_date = now + timedelta(days = 10)
print(future_date)

past_time = now - timedelta(hours = 5)
print(datetime.strftime(past_time, "%Y-%m-%d %I:%M:%S"))






# lambda function random number between 0 to 100
import random

random_number = lambda : random.randint(0,100)
print("random number : " , random_number())