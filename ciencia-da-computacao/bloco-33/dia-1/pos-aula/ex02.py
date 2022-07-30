def calculate_average(numbers: list[int | float]):
    sum = 0
    if len(numbers) == 0:
        return None
    for number in numbers:
        sum += number
    average = sum / len(numbers)
    return average


my_list = list(range(0, 11))
average = calculate_average(my_list)
print(average)

my_list = [4.5, 4, 4, 4]
average = calculate_average(my_list)
print(average)

my_list = []
average = calculate_average(my_list)
print(average)
