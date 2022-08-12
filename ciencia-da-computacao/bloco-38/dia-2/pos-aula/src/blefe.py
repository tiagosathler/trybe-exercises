# nota da partida
def nota_partida(escolhas: set, adivinhas: set) -> int:
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas: set, adivinhas: set) -> int:
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas: list, adivinhas: list) -> int:
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def quem_ganhou_blefe(jogadas: dict[str, list]) -> str | None:
    [jogadorA, jogadorB] = list(jogadas.keys())

    nota_jogador_A = nota_individual(jogadas[jogadorA], jogadas[jogadorB])

    nota_jogador_B = nota_individual(jogadas[jogadorB], jogadas[jogadorA])

    if nota_jogador_A > nota_jogador_B:
        return jogadorA
    elif nota_jogador_A < nota_jogador_B:
        return jogadorB
    else:
        return None


if __name__ == "__main__":

    entradas = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

    # saída: 'Marco'

    quem_ganhou = quem_ganhou_blefe(entradas)

    if quem_ganhou:
        print(f"Quem ganhou: {quem_ganhou} ")
    else:
        print("Deu empate")

    entradas = {"Maria": [0, 1, 5, 9, 10], "Lucas": [0, 2, 5, 6, 9]}

    # saída: 'Maria'

    quem_ganhou = quem_ganhou_blefe(entradas)

    if quem_ganhou:
        print(f"Quem ganhou: {quem_ganhou} ")
    else:
        print("Deu empate")

    entradas = {"Pedro": [0, 1, 3, 9, 10], "Paulo": [0, 1, 2, 9, 10]}

    # saída: 'Deu empate'

    quem_ganhou = quem_ganhou_blefe(entradas)

    if quem_ganhou:
        print(f"Quem ganhou: {quem_ganhou} ")
    else:
        print("Deu empate")
