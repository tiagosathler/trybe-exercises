def combine_words(words: list[str], chars: str) -> list[str]:
    chars_dict = dict.fromkeys([char for char in chars], None)
    result = []
    for word in words:
        if all([char in chars_dict for char in word]):
            result.append(word)
    return result


words = ["cat", "bt", "hat", "tree"]
chars = "atach"
print(combine_words(words, chars))

words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(combine_words(words, chars))
