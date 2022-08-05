from src.classes.stack import Stack
from src.classes.limit_stack import LimitStack
from src.classes.stack_overflow import StackOverflow


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack)
    # saída:
    # Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    print(content_stack.size())
    # saída:
    # 10

    print(content_stack.peek())
    # saída:
    # 10

    print(content_stack.pop())
    # saída:
    # 10, pois a função retorna o elemento que está sendo retirado

    print(content_stack.peek())
    # saída:
    # 9, pois, após o 10 ter sido removido,
    # o 9 se tornou o elemento do topo da pilha

    print(content_stack.size())
    # saída:
    # 9

    print(content_stack.min_value())
    # saída:
    # 1

    print(content_stack.clear())
    # saída:
    # None, pois a função não retorna nada!

    print(content_stack.size())
    # saída: 0

    content_stack = LimitStack(3)
    content_stack.push(1)
    content_stack.push(2)
    content_stack.push(3)
    try:
        content_stack.push(4)
    except StackOverflow:
        print("A pilha está cheia")
