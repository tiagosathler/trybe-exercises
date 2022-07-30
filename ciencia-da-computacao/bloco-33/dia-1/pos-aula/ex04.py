def find_biggest_word(words: list[str]):
    """Find the the biggest word in a list of words"""
    if len(words) == 0:
        return None
    result = words[0]
    for word in words:
        if len(word) > len(result):
            result = word
    return result


my_words = ['Xablau', 'X-Xablau']
word = find_biggest_word(my_words)
print(word)

my_words = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
word = find_biggest_word(my_words)
print(word)
