def count_servers(servers: list[list[int]]) -> int:
    """
    Em um software gerenciador de servidores, precisamos verificar
    o número de servidores que se comunicam.
    Os servidores estão representados como um array bidimensional
    onde o valor 1 representa um computador e 0 a ausência do mesmo.
    Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna.

    Complexidade: O(n²)

    Entrada:
    --------

    servers: list[list[int]]


    Saída:
    ------

    acc: int
        a quantidade de servidores que se comunicam
    """

    # SOLUÇÃO DO GABARITO (refatorado):
    rows, columns = len(servers), len(servers[0])

    for column in servers:
        if (len(column) != rows):
            return None

    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if servers[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    acc = 0
    for i in range(rows):
        for j in range(columns):
            if servers[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                acc += 1

    return acc


def test_count_servers():
    assert count_servers([[1, 0], [0]]) is None
    assert count_servers([[1, 0], [0, 1]]) == 0
    assert count_servers([[1, 0], [1, 1]]) == 3
    assert count_servers([[1, 0, 0], [1, 0, 0], [0, 0, 1]]) == 2
