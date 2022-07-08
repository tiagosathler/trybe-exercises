from src.imposto.estrategia_imposto import EstrategiaDeImposto


class ISS(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor: int | float):
        return valor * 0.1


class ICMS(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor: int | float):
        return valor * 0.06


class PIS(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor: int | float):
        return valor * 0.0065


class COFINS(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor: int | float):
        return valor * 0.03
