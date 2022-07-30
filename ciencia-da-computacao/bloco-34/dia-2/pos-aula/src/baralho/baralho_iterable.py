from collections.abc import Iterable
from carta import Carta
from estrategias import EstrategiaIteracao
from iterador_baralho import IteradorDoBaralho


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia: EstrategiaIteracao):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.estrategia = estrategia

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self.estrategia)

    def __len__(self):
        return len(self._cartas)

    def __str__(self):
        string = ""
        for e in self._cartas:
            string += str(e)
        return string
