from src.calculadora.calc import Calculadora
from src.calculadora.calc_decorada import CalculadoraDecorada


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    calculadora.soma(10, 20)

    calculadora_decorada = CalculadoraDecorada(calculadora)
    print("'oito' + 'dois' =", calculadora_decorada.soma("oito", "dois"))
