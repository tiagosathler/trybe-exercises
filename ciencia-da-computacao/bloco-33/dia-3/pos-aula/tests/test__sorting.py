from src.sorting import sort_by
import pytest


@pytest.fixture
def mock_jobs():
    return [
        {"min_salary": 1000, "max_salary": 25000, "date_posted": "2018-05-05"},
        {"min_salary": 500, "max_salary": 20000, "date_posted": "2019-05-05"},
        {"min_salary": 2000, "max_salary": 30000, "date_posted": "2021-05-05"},
    ]


def test_sort_by_min_salary_asc(mock_jobs):
    expected = [
        {"min_salary": 500, "max_salary": 20000, "date_posted": "2019-05-05"},
        {"min_salary": 1000, "max_salary": 25000, "date_posted": "2018-05-05"},
        {"min_salary": 2000, "max_salary": 30000, "date_posted": "2021-05-05"},
    ]

    test_subject = list(mock_jobs)
    sort_by(test_subject, "min_salary")
    assert all([expected[i] == test_subject[i] for i in range(len(mock_jobs))])


def test_sort_by_max_salary_desc(mock_jobs):
    expected = [
        {"min_salary": 2000, "max_salary": 30000, "date_posted": "2021-05-05"},
        {"min_salary": 1000, "max_salary": 25000, "date_posted": "2018-05-05"},
        {"min_salary": 500, "max_salary": 20000, "date_posted": "2019-05-05"},
    ]

    test_subject = list(mock_jobs)
    sort_by(test_subject, "max_salary")
    assert all([expected[i] == test_subject[i] for i in range(len(mock_jobs))])


def test_sort_by_date_posted_desc(mock_jobs):
    expected = [
        {"min_salary": 2000, "max_salary": 30000, "date_posted": "2021-05-05"},
        {"min_salary": 500, "max_salary": 20000, "date_posted": "2019-05-05"},
        {"min_salary": 1000, "max_salary": 25000, "date_posted": "2018-05-05"},
    ]

    test_subject = list(mock_jobs)
    """
    try:
        sort_by(test_subject, "date_posted")
    except TypeError:
        assert True
    else:
        """
    sort_by(test_subject, "date_posted")
    assert all([expected[i] == test_subject[i] for i in range(len(mock_jobs))])


def test_sort_by_value_error(mock_jobs):
    test_subject = list(mock_jobs)
    with pytest.raises(ValueError, match="invalid sorting criteria: xablau"):
        sort_by(test_subject, "xablau")
