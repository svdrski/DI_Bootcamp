from time import time

def timer(func):

    def wrapper(*args, **kwargs):
        start = time()
        func(*args, **kwargs)
        end = time()
        print(f"Time <{func.__name__}>: {end-start}")

    return wrapper

@timer
def calc(a, b):
    return a+b

calc(1,3)