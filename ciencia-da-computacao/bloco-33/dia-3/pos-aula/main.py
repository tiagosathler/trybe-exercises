from src.exercises import validate_email, check_emails_list

wrong_emails = [
    "email.domain.com",
    "email4@domain.com",
    "email@domain.cm",
    "email@domain",
    "4email@domain.com",
]

valid_emails = [
    "nome@dominio.com",
    "outro@dominio.com",
    "e-mail@domain.com",
    "e_mail@domain.com",
    "sathler@gmail.com",
]

emails_list = [
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

checked = [validate_email(email) for email in valid_emails]
print(checked)


checked_list = check_emails_list(emails_list)
print(emails_list)
print(checked_list)
