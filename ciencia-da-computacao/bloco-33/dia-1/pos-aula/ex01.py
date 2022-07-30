def which_is_the_biggest(a: int, b: int):
    if a > b:
        return a
    elif b > a:
        return b
    else:
        return None


result = which_is_the_biggest(3, 4)
print(result)  # 4

result = which_is_the_biggest(5, 3)
print(result)  # 5

result = which_is_the_biggest(4, 4)
print(result)  # None

result = which_is_the_biggest("5", "3")
print(result)  # 5

result = which_is_the_biggest("a", "d")
print(result)  # b

result = which_is_the_biggest("d", "e")
print(result)  # e

result = which_is_the_biggest("e", "e")
print(result)  # None
