from collections.abc import Iterator
from estrategias import EstrategiaIteracao


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas: list[str], estrategia: EstrategiaIteracao):
        self._cartas = cartas
        self._estrategia = estrategia
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos = self._estrategia.proxima_carta(self._pos)
            return carta
