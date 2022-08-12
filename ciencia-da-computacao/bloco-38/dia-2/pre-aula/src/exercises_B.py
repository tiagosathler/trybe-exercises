from src.conjunto import Conjunto


if __name__ == "__main__":
    """
    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    Perguntas:
        Quem ainda não entregou a lista1?
        Quem já entregou as duas listas?
        Quem já entregou qualquer uma das duas listas?
        Quem ainda não entregou nenhuma das listas?
    """

    # exercício 7:
    conj_estudantes = Conjunto(10)
    conj_lista1 = Conjunto(10)
    conj_lista2 = Conjunto(10)

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    for elem in estudantes:
        conj_estudantes.add(elem)

    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print(
        "Não entregaram a lista 1:",
        conj_estudantes.difference(conj_lista1),
    )

    print(
        "Já entregaram as 2 listas:",
        conj_lista1.intersection(conj_lista2),
    )

    print(
        "Quem já entregou pelo menos uma lista:",
        conj_lista1.union(conj_lista2),
    )
    print(
        "Quem não entregou nenhuma:",
        conj_estudantes.difference(conj_lista1.union(conj_lista2)),
    )
