def good_pairs(entrance: list[int], exit: list[int], instant: int) -> int:
    """
    Você têm dois arrays de números inteiros que representam:
    (I) instantes de entrada e saídas em uma biblioteca
    (II) um número que represente um instante a ser buscado.
    Retorne quantas pessoas estudantes estão na biblioteca
    naquele instante.
    Considere que todo estudante que entrou e saiu da biblioteca.

    Complexidade: O(n)

    Entrada:
    --------

    entrance: list[int]
        representa o instante de entrada do aluno no índice i

    exit: list[int]
        representa o instante de saída do aluno no índice i

    instant: int
        o instante para o qual desejamos saber quantos alunos estão lá


    Saída:
    ------

    acc: int
        a quantidade de alunos que estão na biblioteca no instante dado
    """

    # SOLUÇÃO DO GABARITO (refatorado):
    if len(entrance) != len(exit):
        return None

    size = len(entrance)
    acc = 0

    for i in range(size):
        if entrance[i] <= instant <= exit[i]:
            acc += 1

    return acc


def test_good_pairs():
    assert good_pairs([1, 2, 3], [3, 7], 4) is None
    assert good_pairs([1, 2, 3], [3, 2, 7], 4) == 1
    assert good_pairs([1, 4, 3], [3, 4, 7], 4) == 2
    assert good_pairs([1, 4, 3], [10, 4, 7], 4) == 3
