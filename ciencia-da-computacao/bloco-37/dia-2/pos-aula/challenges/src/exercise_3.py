def good_pairs(numbers: list[int]) -> int:
    """
    Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a
    demanda de analisar um array de números inteiros que representam os
    produtos dessa empresa. Verifique quantos produtos formam boas combinações,
    ou seja, quando um produto é igual ao outro e seu índice é maior
    que o anterior. Esta combinação pode ser utilizada para modificar
    os produtos de uma página.

    Complexidade: O(n²)

    Entrada:
    --------

    numbers: list[int]
       números de produtos


    Saída:
    ------

    acc: int
        a quantidade de combinações
    """

    # SOLUÇÃO DO GABARITO (refatorado):
    size = len(numbers)

    if (size < 2):
        return 0

    acc = 0

    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                acc += 1
    return acc


def test_good_pairs():
    assert good_pairs([3]) == 0
    assert good_pairs([1, 3, 1, 1, 2, 3]) == 4
    assert good_pairs([1, 1, 2, 3]) == 1
    assert good_pairs([1, 4, 4, 7, 6, 6]) == 2
    assert good_pairs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) == 0
