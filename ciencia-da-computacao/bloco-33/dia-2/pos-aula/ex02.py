from random import choice, sample


WORDS = ['banana', 'maçã', 'mamão', 'laranja']
TRAILS = 3


def scramble_word(word: str):
    return "".join(sample(word, len(word)))


def sort_word(words: list[str]):
    return choice(words)


def main():
    word = sort_word(WORDS)
    scrambled_word = scramble_word(word)

    print(f"Adivinha a palavra: {scrambled_word}")

    count = 0
    attempt = ""
    while attempt != word and count < TRAILS:
        count += 1
        attempt = input(f"Tentativa {count} de {TRAILS}: ")

    print(f"A palavra é: {word}")


main()
