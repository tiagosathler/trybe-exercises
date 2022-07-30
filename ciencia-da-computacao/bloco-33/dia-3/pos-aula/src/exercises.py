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


def check_username(prefix: str):
    if not prefix[0].isalpha():
        return False
    elif not all([char.isalpha() or char in ".-_" for char in prefix]):
        return False
    else:
        return True


def check_uri(domain: str):
    if "." not in domain:
        return False
    else:
        separated_domain = domain.split(".")
        domain_name = separated_domain[0]
        extension = separated_domain[1]

        if not (
            all([letter.isalpha() for letter in domain_name])
            and all([letter.isalpha() for letter in extension])
        ):
            return False
        elif len(extension) != 3 or len(domain_name) < 3:
            return False
        else:
            return True


def validate_email(email: str):
    email = email.strip()
    checked = True

    if "@" not in email:
        checked = False
    else:
        separated_email = email.split("@")

        prefix = separated_email[0]

        domain = separated_email[1]

        checked = check_username(prefix) and check_uri(domain)

    if checked:
        return email
    else:
        raise ValueError("Email inválido")


def check_emails_list(emails: list[str]):
    checked_emails = []
    for email in emails:
        try:
            checked_email = validate_email(email)
        except ValueError:
            print(f"Email inválido: {email}")
        else:
            checked_emails.append(checked_email)
    return checked_emails
