from statistics import mean, median, mode


class Estatistica:
    def checar_valores(self, data: list[int | float]):
        if len(data) == 0:
            raise ValueError("data is empty")
        for i in range(len(data)):
            if not (isinstance(data[i], int) or isinstance(data[i], float)):
                raise ValueError(
                    "data must be a list of integer or float numbers"
                )

    def __init__(self, data: list[int | float]):
        self.checar_valores(data)
        self.__data = data

    def media(self):
        return mean(self.__data)

    def mediana(self):
        return median(self.__data)

    def moda(self):
        return mode(self.__data)
