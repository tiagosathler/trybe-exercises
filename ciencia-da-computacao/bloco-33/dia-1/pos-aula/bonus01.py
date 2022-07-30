def find_smallest_number(numbers: list[int]):
    numbers.sort()
    return numbers[0]


print(find_smallest_number([1, 2, 0, -2]))
