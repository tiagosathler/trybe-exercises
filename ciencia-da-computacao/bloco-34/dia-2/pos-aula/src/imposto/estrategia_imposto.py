from abc import ABC, abstractmethod


class EstrategiaDeImposto(ABC):
    @classmethod
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError
