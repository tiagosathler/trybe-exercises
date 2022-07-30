from abc import ABC, abstractmethod
from math import pi


class Figura(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(Figura):
    def __init__(self, lado: int):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(Figura):
    def __init__(self, base: int, altura: int):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(Figura):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return pi * self.raio**2

    def perimetro(self):
        return 2 * pi * self.raio
