from src.figuras import Quadrado, Retangulo, Circulo

quadrado = Quadrado(10)
print(f"Perimetro do quadrado: {quadrado.perimetro()}")
print(f"Area do quadrado: {quadrado.area()}")

retangulo = Retangulo(10, 5)
print(f"Perimetro do retangulo: {retangulo.perimetro()}")
print(f"Area do retangulo: {retangulo.area()}")

circulo = Circulo(10)
print(f"Perimetro do circulo: {circulo.perimetro()}")
print(f"Area do circulo: {circulo.area()}")
