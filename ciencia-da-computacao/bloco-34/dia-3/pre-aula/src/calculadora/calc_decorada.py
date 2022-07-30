from src.calculadora.calc import Calculadora


class CalculadoraDecorada:
    def __init__(self, calculadora: Calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero: str):
        if not isinstance(numero, str):
            return numero

        return {
            "um": 1,
            "dois": 2,
            "três": 3,
            "quatro": 4,
            "cinco": 5,
            "seis": 6,
            "sete": 7,
            "oito": 8,
            "nove": 9,
            "dez": 10,
        }.get(numero.lower())

    def soma(self, x: str, y: str):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )
