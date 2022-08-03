def shuffle(numbers: list[int], n: int) -> list[int]:
    """
    Em um jogo de baralho, as cartas estão representadas por um array numérico.
    Para iniciar o jogo, devemos embaralhar as cartas.
    Faremos isto dividindo uma porção de cartas em 2 e depois mesclando
    as duas porções.

    Complexidade:

    Entrada:
    --------

    arr: list[int]
       cartas

    grupo: int
        grupo de cartas para embaralhar

    Saída:
    ------

    result -> list[int]
        cartas embaralhadas
    """

    # SOLUÇÃO DO GABARITO:
    answer = []
    new_array_index = 0
    for index in range(n):
        answer.insert(new_array_index, numbers[index])
        new_array_index += 1
        answer.insert(new_array_index, numbers[index + n])
        new_array_index += 1
    return answer


def test_shuffle():
    assert shuffle([2, 6, 4, 5], 2) == [2, 4, 6, 5]
    assert shuffle([1, 4, 4, 7, 6, 6], 3) == [1, 7, 4, 6, 4, 6]
