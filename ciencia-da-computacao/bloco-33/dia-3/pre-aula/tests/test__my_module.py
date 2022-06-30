import pytest
from src.my_module import (
    is_odd,
    divide,
    get_most_ordered_dish_per_costumer,
    get_order_frequency_per_costumer,
)


def test_is_odd_when_number_is_odd_returns_true():
    "Para um número ímpar a função deve retornar o valor True"
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "Para um número par a função deve retornar o valor False"
    assert is_odd(2) is False


def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)


@pytest.fixture
def orders():
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]


def test_get_most_ordered(orders):
    assert get_most_ordered_dish_per_costumer(orders, "maria") == "pizza"


def test_get_order_frequency(orders):
    assert get_order_frequency_per_costumer(orders, "maria", "hamburger") == 1
