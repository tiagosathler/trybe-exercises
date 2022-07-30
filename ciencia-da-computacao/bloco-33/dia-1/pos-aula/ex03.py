def n_square(n: int):
    if n <= 1 or n % 1 != 0:
        return None
    string = "*" * n
    while n > 0:
        print(string)
        n -= 1


n_square(4)

n_square(2)

n_square(1)

n_square(2.3)

n_square(-3)
