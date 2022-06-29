def is_valid_triangule(a: int, b: int, c: int):
    """Verifies a valid triangle"""
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return "Equilátero"
        elif a == b or a == c or b == c:
            return "Isósceles"
        else:
            return "Escaleno"
    else:
        return "Não é triângulo"


print(is_valid_triangule(3, 3, 4))
