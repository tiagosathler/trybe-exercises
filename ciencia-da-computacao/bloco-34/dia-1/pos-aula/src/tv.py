class Tv:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def checar_tv(self):
        if not self.__ligada:
            raise Exception("Ligue a TV")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def aumentar_volume(self):
        self.checar_tv()
        if self.__volume < 99 and self.__ligada:
            self.__volume += 1

    def diminuir_volume(self):
        self.checar_tv()
        if self.__volume > 0 and self.__ligada:
            self.__volume -= 1

    def modificar_canal(self, canal: int):
        self.checar_tv()
        if not (isinstance(canal, int) and 1 <= canal <= 99):
            raise ValueError(f"Canal '{canal}' inválido")
        self.__canal = canal

    def canal(self):
        self.checar_tv()
        return self.__canal

    def volume(self):
        self.checar_tv()
        return self.__volume

    def operando(self):
        return self.__status

    def __str__(self):
        if self.__ligada:
            return f"""
            TV:
                tamanho: {self.__tamanho}
                ligada? {self.__ligada}
                volume: {self.__volume}
                canal: {self.__canal}
            """
        else:
            return f"""
            TV:
                tamanho: {self.__tamanho}
                ligada? {self.__ligada}
            """
