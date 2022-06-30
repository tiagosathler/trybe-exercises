def fizz_buzz(n: int):
    result = list()
    for number in range(1, n + 1):
        if number % 15 == 0:
            result.append("FizzBuzz")
        elif number % 3 == 0:
            result.append("Fizz")
        elif number % 5 == 0:
            result.append("Buzz")
        else:
            result.append(number)
    return result


def phone_alpha_to_numbers(string: str):
    if len(string) >= 30:
        return None
    result = []
    for char in string.strip().upper():
        if char.isdecimal():
            result.append(char)
        elif char in "ABC":
            result.append("2")
        elif char in "DEF":
            result.append("3")
        elif char in "GHI":
            result.append("4")
        elif char in "JKL":
            result.append("5")
        elif char in "MNO":
            result.append("6")
        elif char in "PQRS":
            result.append("7")
        elif char in "TUV":
            result.append("8")
        elif char in "WXYZ":
            result.append("9")
        elif char in "-":
            result.append("-")
    return "".join(result)
