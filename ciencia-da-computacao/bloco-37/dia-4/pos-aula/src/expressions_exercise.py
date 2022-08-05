from src.classes.stack import Stack


def solve_expression(expr: str) -> float:
    """
    Calculadora do tipo RPN usando pilhas
    Complexidade: O(1) - pop e push
    """
    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "-":
            # Minus operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 - op2
            stack.push(result)
        elif token == "/":
            # Division operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 / op2
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


# A = 5, B = 10, C = 30

# A + B - C / A -> 5 10 + 30 5 / -
print(solve_expression("5 10 + 30 5 / -"))
# saída:
# 9.0

# B + (A * C) / C * 2 -> 10 5 30 * 30 / 2 * +
print(solve_expression("10 5 30 * 30 / 2 * +"))
# saída:
# 20.0

# A * B - C + 4 * A - B -> 5 10 * 30 - 4 5 * 10 - +
print(solve_expression("5 10 * 30 - 4 5 * 10 - +"))
# saída:
# 30.0

# (A + C / B ) * (A + B) -> 30 10 / 5 + 5 10 + *
print(solve_expression("30 10 / 5 + 5 10 + *"))
# saída:
# 120.0

# 50 * B / 2 * 5 / A -> 50 10 * 2 / 5 * 5 /
print(solve_expression("50 10 * 2 / 5 * 5 /"))
# saída:
# 250.0
