# cópia do gabarito

def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


if __name__ == "__main__":
    string = "serdevemuitolegalmasehprecisoestudarbastante"
    substring = longer_no_repeating_substring_len(string)
    # saída: 9
    print(substring)
