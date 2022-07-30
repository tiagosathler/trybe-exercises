from src.exercises import (
    fizz_buzz,
)


def test__fizz_buzz_with_2():
    expected = [1, 2]
    assert fizz_buzz(2) == expected


def test__fizz_buzz_with_3():
    expected = [1, 2, "Fizz"]
    assert fizz_buzz(3) == expected


def test__fizz_buzz_with_5():
    expected = [1, 2, "Fizz", 4, "Buzz"]
    assert fizz_buzz(5) == expected


def test__fizz_buzz_with_16():
    expected = [
        1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz",
        "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16,
    ]
    assert fizz_buzz(16) == expected
