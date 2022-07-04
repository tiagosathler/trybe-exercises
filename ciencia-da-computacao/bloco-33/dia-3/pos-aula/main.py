from src.exercises import validate_email, check_emails_list
from src.sorting import sort_by

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


jobs = [
    {"min_salary": 1000, "max_salary": 25000, "date_posted": "2020-05-05"},
    {"min_salary": 500, "max_salary": 20000, "date_posted": "2019-05-05"},
    {"min_salary": 2000, "max_salary": 30000, "date_posted": "2021-05-05"},
]

sort_by(jobs, "min_salary")
print("===> SORTING BY 'min_salary:'\n", jobs)

sort_by(jobs, "max_salary")
print("===> SORTING BY 'max_salary:'\n", jobs)

sort_by(jobs, "date_posted")
print("===> SORTING BY 'date_posted':'\n", jobs)

print("===> RAINSING ERROR:")
sort_by(jobs, "xablau")
