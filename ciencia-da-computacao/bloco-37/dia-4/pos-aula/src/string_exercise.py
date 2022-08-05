from src.classes.stack import Stack


def reverse_word(stack: Stack) -> None:
    """
    Complexidade: O(n) por causa do loop - pop = O(1) e push = O(1)
    """
    char = ")"
    reversed_word = []
    while char != "(":
        char = stack.pop()
        if char != "(":
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase: str) -> str:
    """
    Complexidade: O(n) por causa do loop - pop = O(1) e push = O(1)
    """
    stack = Stack()
    for char in phrase:
        if char != ")":
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return "".join(reversed(reversed_phrase))


print(reverse_letters("teste(lagel)"))
print(reverse_letters("(abcd)"))
print(reverse_letters("(u(love)i)"))
print(reverse_letters("(ed(et(oc))el)"))
print(reverse_letters("a(bcdefghijkl(mno)p)q"))
