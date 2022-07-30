def somatorio(n: int):
    sum = 0
    while n > 0:
        sum += n
        n -= 1
    return sum


def summation(n: int):
    sum = 0
    for number in range(1, n + 1):
        sum += number
    return sum


def soma(n: int):
    return sum(range(0, n + 1))


print(somatorio(4))
print(summation(4))
print(soma(4))
