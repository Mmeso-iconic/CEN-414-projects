def fibonacci_series(n: int) -> list:
    """
    Fibonacci series using recursion
    """
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        fib_list = fibonacci_series(n - 1)
        fib_list.append(fib_list[-1] + fib_list[-2])
        return fib_list


fibonacci_series(10)
