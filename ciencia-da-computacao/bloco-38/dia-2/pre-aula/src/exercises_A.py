from src.conjunto import Conjunto


if __name__ == "__main__":
    # exercício 1
    conjuntoA = Conjunto(1000)

    for item in [0, 10, 100, 1000]:
        conjuntoA.add(item)

    # exercício 2
    print(conjuntoA)

    # exercício 3
    print(conjuntoA.is_in(10))
    print(conjuntoA.is_in(99))

    # exercício 4
    conjuntoB = Conjunto(1000)
    conjuntoB.add(2)
    conjuntoB.add(20)
    conjuntoB.add(200)
    print(conjuntoB)

    conjuntoC = conjuntoA.union(conjuntoB)
    print(conjuntoC)

    # exercício 5
    conjuntoD = Conjunto(1000)
    conjuntoD.add(0)
    conjuntoD.add(300)
    conjuntoD.add(1000)
    print(conjuntoD)

    conjuntoE = conjuntoA.intersection(conjuntoD)
    print(conjuntoE)

    # exercício 6
    conjuntoF = Conjunto(10)
    for i in [1, 2, 3]:
        conjuntoF.add(i)

    conjuntoG = Conjunto(10)
    for i in [7, 2, 10]:
        conjuntoG.add(i)

    conjuntoH = Conjunto(10)
    conjuntoI = conjuntoF.union(conjuntoG)

    print(conjuntoF.issubset(conjuntoI))
    print(conjuntoI.issuperset(conjuntoF))
    print(conjuntoH.issubset(conjuntoI))
