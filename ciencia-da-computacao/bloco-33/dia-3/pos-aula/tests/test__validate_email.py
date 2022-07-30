import pytest

from src.exercises import validate_email, check_emails_list


@pytest.fixture
def wrong_emails():
    return [
        "email.domain.com",
        "email4@domain.com",
        "email@domain.cm",
        "email@domain",
        "4email@domain.com",
    ]


@pytest.fixture
def valid_emails():
    return [
        "nome@dominio.com",
        "outro@dominio.com",
        "e-mail@domain.com",
        "e_mail@domain.com",
        "sathler@gmail.com",
    ]


@pytest.fixture
def emails_list():
    return [
        "nome@dominio.com",
        "outro@dominio.com",
        "e-mail@domain.com",
        "e_mail@domain.com",
        "sathler@gmail.com",
        "email.domain.com",
        "email4@domain.com",
        "email@domain.cm",
        "email@domain",
        "4email@domain.com",
    ]


def test__validate_email_wrong_cases(wrong_emails):
    with pytest.raises(ValueError, match="Email inválido"):
        for email in wrong_emails:
            validate_email(email)


def test__validate_check_emails_list(emails_list, valid_emails):
    checked_emails = check_emails_list(emails_list)
    assert all([(email in valid_emails) for email in checked_emails])
