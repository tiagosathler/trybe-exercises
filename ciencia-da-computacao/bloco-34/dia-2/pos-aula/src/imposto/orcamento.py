from src.imposto.estrategia_imposto import EstrategiaDeImposto


class Orcamento:
    def __init__(self, valor: int | float):
        self.valor = valor

    def calcular_imposto(self, imposto: EstrategiaDeImposto) -> float:
        return imposto.calcular(self.valor)
