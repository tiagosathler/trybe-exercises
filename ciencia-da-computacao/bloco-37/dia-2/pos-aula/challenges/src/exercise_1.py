def stable_frequency(arr: list[int]) -> int:
    """
    Em um software monitor, o qual verifica a resiliência de outro software,
    precisamos saber o tempo máximo que um software permaneceu sem
    instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
    para verificamos se está tudo bem. Supondo um array que contenha os
    estados coletados por nosso software, calcule quanto tempo máximo que o
    servidor permaneceu sem instabilidades.

    Complexidade: O(n)

    Entrada:
    --------

    arr -> list[int]
       values:
           0 -> instable;
           1 -> ok;

    Saída:
    ------

    result -> int
    """
    stable_moments = arr.count(1)

    if not stable_moments:
        return 0
    elif stable_moments == 1:
        return 1

    length = len(arr)
    max_frequency = 0
    current = 1

    for (index, value) in enumerate(arr):
        if index < length - 1 and value and arr[index + 1]:
            current += 1
            if current >= max_frequency:
                max_frequency = current
        else:
            current = 1
    return max_frequency

    # SOLUÇÃO DO GABARITO:
    # max_time = 0
    # current_time = 0
    # for value in arr:
    #     if value == 1:
    #         current_time += 1
    #     else:
    #         current_time = 0
    #     if current_time >= max_time:
    #         max_time = current_time
    # return max_time


def test_stable_frequency():
    assert stable_frequency([0, 0, 0, 0, 0, 0]) == 0
    assert stable_frequency([0, 0, 0, 1, 0, 0]) == 1
    assert stable_frequency([0, 1, 1, 1, 0, 0, 1, 1]) == 3
    assert stable_frequency([1, 1, 1, 1, 0, 0, 1, 1]) == 4
    assert (
        stable_frequency([0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0])
        == 6
    )
