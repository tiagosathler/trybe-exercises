import pytest

from src.exercises import phone_alpha_to_numbers


@pytest.fixture
def examples():
    return [
        {"input": "1-HOME-SWEET-HOME", "expected": "1-4663-79338-4663"},
        {"input": "MY-MISERABLE-JOB", "expected": "69-647372253-562"},
        {
            "input": "The quick brown fox jumps over the lazy dog",
            "expected": None,
        },
    ]


def test__phone_numbers_first_example(examples):
    assert (
        phone_alpha_to_numbers(examples[0]["input"]) == examples[0]["expected"]
    )


def test__phone_numbers_second_example(examples):
    assert (
        phone_alpha_to_numbers(examples[1]["input"]) == examples[1]["expected"]
    )


def test__phone_numbers_third_example(examples):
    assert (
        phone_alpha_to_numbers(examples[2]["input"]) == examples[2]["expected"]
    )
